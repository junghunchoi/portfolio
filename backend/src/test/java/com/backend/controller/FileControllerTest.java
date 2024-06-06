package com.backend.controller;

import com.backend.common.codes.SuccessCode;
import com.backend.dto.ResultDTO;
import com.backend.dto.file.FileDTO;
import com.backend.service.FilesService;
import com.backend.utils.FileUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Path;
import java.util.Collections;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class FileControllerTest {

	@Mock
	private FilesService filesService;

	@Mock
	private FileUtils fileUtils;

	@InjectMocks
	private FileController fileController;

	@Test
	@DisplayName("파일 업로드 테스트")
	void testUpload() throws Exception {
		// Given
		MultipartFile file = new MockMultipartFile("file", "test.txt", MediaType.TEXT_PLAIN_VALUE, "test data".getBytes());
		FileDTO fileDTO = new FileDTO();
		fileDTO.setFiles(Collections.singletonList(file));

		// When
		ResponseEntity<ResultDTO<String>> result = fileController.upload(fileDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo("upload Success");
		verify(filesService, times(1)).uploadFiles(fileDTO);
	}

	@Test
	@DisplayName("파일 다운로드 테스트")
	void testDownload() throws Exception {
		// Given
		FileDTO fileDTO = new FileDTO();
		fileDTO.setBno(1L);
		fileDTO.setUploadedFileName("test.txt");
		String uploadFileName = "test_upload.txt";
		when(filesService.uploadFileNameByBnoAndOriginalFileName(fileDTO)).thenReturn(uploadFileName);

		Path path = new File("src/test/resources/test.txt").toPath();
		Resource resource = new UrlResource(path.toUri());
		when(fileUtils.readFileAsResource(uploadFileName)).thenReturn(resource);

		// When
		ResponseEntity<?> result = fileController.download(fileDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getHeaders().getContentType()).isEqualTo(MediaType.parseMediaType("application/octet-stream"));
		assertThat(result.getHeaders().get(HttpHeaders.CONTENT_DISPOSITION).get(0)).contains("attachment; filename=\"test.txt\"");
	}

	@Test
	@DisplayName("파일 조회 테스트")
	void testViewFileGET() throws Exception {
		// Given
		String fileName = "test.txt";
		Path path = new File("src/test/resources/test.txt").toPath();
		Resource resource = new UrlResource(path.toUri());

		// When
		ResponseEntity<Resource> result = fileController.viewFileGET(fileName);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getHeaders().getContentType()).isEqualTo(MediaType.TEXT_PLAIN);
		assertThat(result.getBody()).isEqualTo(resource);
	}

	@Test
	@DisplayName("파일 삭제 테스트")
	void testRemoveFile() {
		// Given
		String fileName = "test.txt";

		// When
		ResponseEntity<ResultDTO<String>> result = fileController.removeFile(fileName);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(SuccessCode.DELETE_SUCCESS.toString());
		verify(filesService, times(1)).deleteFileByFileName(fileName);
	}
}