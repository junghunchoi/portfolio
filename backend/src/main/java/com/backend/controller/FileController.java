package com.backend.controller;

import com.backend.dto.file.FileDTO;
import com.backend.dto.file.FileResultDTO;
import com.backend.service.FilesService;
import io.swagger.annotations.ApiOperation;
import java.util.HashMap;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnailator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.core.io.Resource;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/files")
@RequiredArgsConstructor
@Log4j2
public class FileController {
	/*
	1) List<FileResultDTO> upload // 수정은 삭제후 다시 삽입.
	2) ResponseEntity<Resource> viewFileGET
	3) Map<String,Boolean> removeFile
	 */

	@Value("${com.backend.upload.path}")
	private String uploadPath;

	@ApiOperation(value = "Upload POST", notes = "POST 방식으로 파일 등록")
	@PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public List<FileResultDTO> upload(FileDTO fileDTO) {
		log.info(fileDTO);

		if (fileDTO.getFiles() != null) {

			final List<FileResultDTO> list = new ArrayList<>();

			fileDTO.getFiles().forEach(multipartFile -> {

				String originalName = multipartFile.getOriginalFilename();
				log.info(originalName);

				String uuid = UUID.randomUUID().toString();
				Path savePath = Paths.get(uploadPath, uuid + "_" + originalName);
				boolean image = false;

				try {
					multipartFile.transferTo(savePath);

					//이미지 파일의 종류라면
					if (Files.probeContentType(savePath).startsWith("image")) {
						image = true;
						File thumbFile = new File(uploadPath, "s_" + uuid + "_" + originalName);
						Thumbnailator.createThumbnail(savePath.toFile(), thumbFile, 200, 200);
					}

				} catch (IOException e) {
					e.printStackTrace();
				}

				list.add(
					FileResultDTO.builder().uuid(uuid).fileName(originalName).img(image).build());
			});//end each
			return list;
		}//end if
		return null;
	}


	@ApiOperation(value = "view 파일", notes = "GET방식으로 첨부파일 조회")
	@GetMapping("/view/{fileName}")
	public ResponseEntity<Resource> viewFileGET(@PathVariable String fileName) {

		Resource resource = new FileSystemResource(uploadPath + File.separator + fileName);
		String resourceName = resource.getFilename();
		HttpHeaders headers = new HttpHeaders();

		try {
			headers.add("Content-Type", Files.probeContentType(resource.getFile().toPath()));
		} catch (Exception e) {
			return ResponseEntity.internalServerError().build();
		}
		return ResponseEntity.ok().headers(headers).body(resource);
	}

	@ApiOperation(value = "remove 파일", notes = "DELETE 방식으로 파일 삭제")
	@DeleteMapping("/remove/{fileName}")
	public Map<String, Boolean> removeFile(@PathVariable String fileName) {
		Resource resource = new FileSystemResource(uploadPath + File.separator + fileName);
		String resourceName = resource.getFilename();
		Map<String, Boolean> resultMap = new HashMap<>();
		boolean removed = false;
		try {
			String contentType = Files.probeContentType(resource.getFile().toPath());
			removed = resource.getFile().delete();
			//섬네일이 존재한다면
			if (contentType.startsWith("image")) {
				File thumbnailFile = new File(uploadPath + File.separator + "s_" + fileName);
				thumbnailFile.delete();
			}
		} catch (Exception e) {
			log.error(e.getMessage());
		}
		resultMap.put("result", removed);

		return resultMap;
	}

}
