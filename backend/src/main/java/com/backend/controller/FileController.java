package com.backend.controller;

import com.backend.dto.ResultDTO;
import com.backend.dto.file.FileDTO;
import com.backend.dto.file.FileResultDTO;
import com.backend.service.FilesService;
import com.backend.utils.FileUtils;
import io.swagger.annotations.ApiOperation;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnailator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
import org.springframework.web.multipart.MultipartFile;

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
	@ApiOperation(value = "Upload POST", notes = "POST 방식으로 파일 등록")
	@PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<ResultDTO<String>> upload(FileDTO fileDTO) {
		log.info("FileController upload ....");
		log.info(fileDTO);

		if (fileDTO.getFiles() != null) {
			filesService.uploadFiles(fileDTO);

			return ResponseEntity.ok(
				ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "upload Success"));
		}

		return ResponseEntity.ok(
			ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "skip this api"));
	}

	@ApiOperation(value = "Upload POST", notes = "POST 방식으로 파일 등록")
	@PostMapping(value = "/download", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> download(@RequestBody FileDTO fileDTO) {
		log.info("FileController download ....");
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
	@ApiOperation(value = "view 파일", notes = "GET방식으로 첨부파일 조회")
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
	@ApiOperation(value = "remove 파일", notes = "DELETE 방식으로 파일 삭제")
	@DeleteMapping("/remove/{fileName}")
	public ResponseEntity<ResultDTO<String>> removeFile(@PathVariable String fileName) {
		log.info("----- fileController removeFile -----");
		log.info(fileName);
		filesService.deleteFileByFileName(fileName);

		return ResponseEntity.ok(
			ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "delete Success"));
	}

}
