package com.backend.controller;

import com.backend.dto.ResultDTO;
import com.backend.service.CommonService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CommonControllerTest {

	@Mock
	private CommonService commonService;

	@InjectMocks
	private CommonController commonController;

	@Test
	@DisplayName("메인 페이지 게시물 리스트 조회 테스트")
	void testListMainPage() {
		// Given
		Map<String, List<?>> response = new HashMap<>();
		response.put("boards", List.of(1, 2, 3));
		response.put("helps", List.of(4, 5, 6));
		response.put("notices", List.of(1, 2, 3));
		response.put("galleries", List.of(4, 5, 6));
		when(commonService.listMainPage()).thenReturn(response);

		// When
		ResponseEntity<ResultDTO<Object>> result = commonController.listMainPage();

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(response);
	}
}