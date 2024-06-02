package com.backend.controller;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.ResultDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.dto.help.HelpListDTO;
import com.backend.service.BoardService;
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
class BoardControllerTest {

	@Mock
	private BoardService boardService;

	@InjectMocks
	private BoardController boardController;

	@Test
	@DisplayName("게시물 목록 조회 테스트")
	void testList() {
		// Given
		PageRequestDTO pageRequestDTO = PageRequestDTO.builder().page(1).size(10).build();
		List<BoardListDTO> boardListDTOs = new ArrayList<>();
		PageResponseDTO pageResponseDTO =  PageResponseDTO.<BoardListDTO>withAll()
		                      .pageRequestDTO(pageRequestDTO)
		                      .items(boardListDTOs)
		                      .total((int) boardListDTOs.size())
		                      .build();

		when(boardService.list(any(PageRequestDTO.class))).thenReturn(pageResponseDTO);

		// When
		ResponseEntity<ResultDTO<Object>> result = boardController.list(pageRequestDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(pageResponseDTO);
	}

	@Test
	@DisplayName("게시물 등록 테스트")
	void testRegister() throws BindException {
		// Given
		BoardDTO boardDTO = BoardDTO.builder().title("Test Title").content("Test Content").build();
		Long bno = 1L;
		when(boardService.register(any(BoardDTO.class))).thenReturn(bno);

		// When
		ResponseEntity<ResultDTO<Long>> result = boardController.register(boardDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(bno);
	}

	@Test
	@DisplayName("게시물 조회 테스트")
	void testRead() {
		// Given
		Long bno = 1L;
		BoardDTO boardDTO = BoardDTO.builder().bno(bno).title("Test Title").content("Test Content").build();
		when(boardService.readOne(any(Long.class))).thenReturn(boardDTO);

		// When
		ResponseEntity<ResultDTO<Object>> result = boardController.read(bno);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(boardDTO);
	}

	@Test
	@DisplayName("게시물 수정 테스트")
	void testModify() {
		// Given
		BoardDTO boardDTO = BoardDTO.builder().bno(1L).title("Updated Title").content("Updated Content").build();

		// When
		ResponseEntity<ResultDTO<String>> result = boardController.modify(boardDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo("수정 성공");
	}

	@Test
	@DisplayName("게시물 삭제 테스트")
	void testRemove() {
		// Given
		Long bno = 1L;

		// When
		ResponseEntity<ResultDTO<String>> result = boardController.remove(bno);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo("삭제 성공");
	}
}