package com.backend.controller;

import com.backend.dto.ResultDTO;
import com.backend.dto.file.FileDTO;
import com.backend.service.FilesService;
import com.backend.utils.FileUtils;
import java.io.File;
import java.nio.file.Files;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 파일 관련 HTTP 요청을 처리하는 컨트롤러 클래스입니다.
 */
@RestController
@RequestMapping("/api/files")
@RequiredArgsConstructor
@Log4j2
public class FileController {

	@Value("${com.backend.upload.path}")
	private String uploadPath;

	private final FilesService filesService;
	private final FileUtils fileUtils;

	/**
	 * MultipartFile 리스트를 받아 파일을 저장하고, 저장 결과를 반환합니다.
	 *
	 * @param fileDTO 파일 업로드 요청 데이터를 담고 있는 DTO
	 * @return 파일 저장 결과를 담은 FileResultDTO 리스트
	 */
	@PostMapping(value = "/upload")
	public ResponseEntity<ResultDTO<String>> upload(FileDTO fileDTO) {
		if (fileDTO.getFiles() != null) {
			filesService.uploadFiles(fileDTO);

			return ResponseEntity.ok(
				ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "upload Success"));
		}

		return ResponseEntity.ok(
			ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "skip this api"));
	}

	@PostMapping(value = "/download", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> download(@RequestBody FileDTO fileDTO) {
		String contentType = "application/octet-stream";

		String uploadFileName = filesService.uploadFileNameByBnoAndOriginalFileName(fileDTO);
		Resource resource = fileUtils.readFileAsResource(uploadFileName);


		return ResponseEntity.ok()
		                     .contentType(MediaType.parseMediaType(contentType))
		                     .header(HttpHeaders.CONTENT_DISPOSITION,
			                     "attachment; filename=\"" + resource.getFilename() + "\"")
		                     .body(resource);

	}

	/**
	 * 파일명을 기준으로 파일을 조회하여 클라이언트에게 반환합니다.
	 *
	 * @param fileName 조회할 파일의 이름
	 * @return 파일 데이터를 담고 있는 Resource와 함께 반환되는 ResponseEntity 객체
	 */
	@GetMapping("/{fileName}")
	public ResponseEntity<Resource> viewFileGET(@PathVariable String fileName) {
		Resource resource = new FileSystemResource(uploadPath + File.separator + fileName);
		HttpHeaders headers = new HttpHeaders();

		try {
			headers.add("Content-Type", Files.probeContentType(resource.getFile().toPath()));
		} catch (Exception e) {
			return ResponseEntity.internalServerError().build();
		}
		return ResponseEntity.ok().headers(headers).body(resource);
	}

	/**
	 * 지정된 파일명에 해당하는 파일을 서버에서 삭제합니다.
	 *
	 * @param fileName 삭제할 파일의 이름
	 * @return 삭제 성공 여부를 담은 Map 객체
	 */
	@DeleteMapping("/remove/{fileName}")
	public ResponseEntity<ResultDTO<String>> removeFile(@PathVariable String fileName) {
		filesService.deleteFileByFileName(fileName);

		return ResponseEntity.ok(
			ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "delete Success"));
	}

}
