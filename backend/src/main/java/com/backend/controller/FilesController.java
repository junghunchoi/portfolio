package com.backend.controller;

import com.backend.dto.FilesDTO;
import com.backend.service.FilesService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

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
public class FilesController {

	@Value("${com.backend.upload.path}")
	private String uploadPath;

	private FilesService filesService;

	@ApiOperation(value = "uploads post", notes = "POST 방식으로 파일 등록")
	@PostMapping(value = "/uploads", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String upload(FilesDTO filesDTO) {

		if (filesDTO.getFiles() != null) {

			List<FilesDTO> list = new ArrayList<>();

			filesDTO.getFiles().forEach(multipartFile -> {

				String originalName = multipartFile.getOriginalFilename();
				log.info(originalName);

				String uuid = UUID.randomUUID().toString();
				Path savePath = Paths.get(uploadPath, uuid + "_" + originalName);
				boolean image = false;

				try {
					multipartFile.transferTo(savePath);

				} catch (IOException e) {
					e.printStackTrace();
				}

				list.add(filesDTO.builder()
						.uuid(uuid)
						.fileName(originalName)
						.build()
				);
			});//end each
			return "ok";
		}//end if
		return null;
	}

	@GetMapping("/test")
	public void test() {
		log.info("tq");
		log.info(filesService.getFilesListByBno(54L));
	}

}
