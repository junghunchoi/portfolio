package com.backend.controller;


import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.ResultDTO;
import com.backend.dto.help.HelpDTO;
import com.backend.dto.help.HelpListDTO;
import com.backend.service.HelpService;
import com.backend.utils.JWTUtil;
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
class HelpControllerTest {

	@Mock
	private HelpService helpService;

	@Mock
	private JWTUtil jwtUtil;

	@InjectMocks
	private HelpController helpController;

	@Test
	@DisplayName("문의글 목록 조회 테스트")
	void testList() {
		// Given
		PageRequestDTO pageRequestDTO = PageRequestDTO.builder().page(1).size(10).build();
		List<HelpListDTO> helpListDTOs = new ArrayList<>();
		PageResponseDTO<HelpListDTO> responseDTO = PageResponseDTO.<HelpListDTO>withAll()
		                                                          .pageRequestDTO(pageRequestDTO)
		                                                          .items(helpListDTOs)
		                                                          .total(helpListDTOs.size())
		                                                          .build();

		when(helpService.list(any(PageRequestDTO.class))).thenReturn(responseDTO);

		// When
		ResponseEntity<ResultDTO<Object>> result = helpController.list(pageRequestDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(responseDTO);
	}

	@Test
	@DisplayName("문의글 등록 테스트")
	void testRegister() throws BindException {
		// Given
		HelpDTO helpDTO = HelpDTO.builder().title("Test Title").content("Test Content").build();
		Long hno = 1L;
		when(helpService.register(any(HelpDTO.class))).thenReturn(hno);

		// When
		ResponseEntity<ResultDTO<Long>> result = helpController.register(helpDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(hno);
	}

	@Test
	@DisplayName("문의글 조회 테스트")
	void testRead() {
		// Given
		Long hno = 1L;
		String authorizationHeader = "Bearer token";
		when(jwtUtil.getUsernameFromToken(authorizationHeader.substring(7))).thenReturn("user");
		HelpDTO helpDTO = HelpDTO.builder().hno(hno).title("Test Title").content("Test Content").build();
		when(helpService.readOne(any(Long.class), any(String.class))).thenReturn(helpDTO);

		// When
		ResponseEntity<ResultDTO<Object>> result = helpController.read(hno, authorizationHeader);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(helpDTO);
	}

	@Test
	@DisplayName("문의글 수정 테스트")
	void testModify() {
		// Given
		HelpDTO helpDTO = HelpDTO.builder().hno(1L).title("Updated Title").content("Updated Content").build();

		// When
		ResponseEntity<ResultDTO<String>> result = helpController.modify(helpDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(helpDTO.getHno() + "번 문의글글 수정");
	}

	@Test
	@DisplayName("문의글 삭제 테스트")
	void testRemove() {
		// Given
		Long hno = 1L;

		// When
		ResponseEntity<ResultDTO<String>> result = helpController.remove(hno);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo("삭제 성공");
	}
}