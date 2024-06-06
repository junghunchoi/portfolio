package com.backend.controller;

import static org.junit.jupiter.api.Assertions.*;

import com.backend.dto.ResultDTO;
import org.junit.jupiter.api.Test;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.notice.NoticeDTO;
import com.backend.dto.notice.NoticeListDTO;
import com.backend.service.NoticeService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.BindException;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class NoticeControllerTest {

	@Mock
	private NoticeService noticeService;

	@InjectMocks
	private NoticeController noticeController;

	@Test
	@DisplayName("공지사항 목록 조회 테스트")
	void testList() {
		// Given
		PageRequestDTO pageRequestDTO = PageRequestDTO.builder().page(1).size(10).build();
		List<NoticeListDTO> noticeListDTOs = new ArrayList<>();
		PageResponseDTO<NoticeListDTO> responseDTO = PageResponseDTO.<NoticeListDTO>withAll()
		                                                            .pageRequestDTO(pageRequestDTO)
		                                                            .items(noticeListDTOs)
		                                                            .total(noticeListDTOs.size())
		                                                            .build();
		when(noticeService.list(any(PageRequestDTO.class))).thenReturn(responseDTO);

		// When
		ResponseEntity<ResultDTO<Object>> result = noticeController.list(pageRequestDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(responseDTO);
	}

	@Test
	@DisplayName("공지사항 등록 테스트")
	void testRegister() throws BindException {
		// Given
		NoticeDTO noticeDTO = NoticeDTO.builder().title("Test Title").content("Test Content").build();
		Long nno = 1L;
		when(noticeService.register(any(NoticeDTO.class))).thenReturn(nno);

		// When
		ResponseEntity<ResultDTO<Object>> result = noticeController.register(noticeDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(nno);
	}

	@Test
	@DisplayName("공지사항 조회 테스트")
	void testRead() {
		// Given
		Long nno = 1L;
		NoticeDTO noticeDTO = NoticeDTO.builder().nno(nno).title("Test Title").content("Test Content").build();
		when(noticeService.readOne(any(Long.class))).thenReturn(noticeDTO);

		// When
		ResponseEntity<ResultDTO<Object>> result = noticeController.read(nno);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(noticeDTO);
	}

	@Test
	@DisplayName("공지사항 수정 테스트")
	void testModify() {
		// Given
		NoticeDTO noticeDTO = NoticeDTO.builder().nno(1L).title("Updated Title").content("Updated Content").build();

		// When
		ResponseEntity<ResultDTO<String>> result = noticeController.modify(noticeDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo("수정 성공");
	}

	@Test
	@DisplayName("공지사항 삭제 테스트")
	void testRemove() {
		// Given
		Long nno = 1L;

		// When
		ResponseEntity<ResultDTO<String>> result = noticeController.remove(nno);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo("삭제 성공");
	}
}