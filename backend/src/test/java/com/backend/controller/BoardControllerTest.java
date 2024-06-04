package com.backend.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.ResultDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.service.BoardService;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.ArrayList;
import java.util.List;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.validation.BindException;
import org.springframework.web.bind.MethodArgumentNotValidException;

@ExtendWith(MockitoExtension.class)
@Log4j2
class BoardControllerTest {

	@Mock
	private BoardService boardService;

	@InjectMocks
	private BoardController boardController;

	private MockMvc mockMvc;

	private ObjectMapper objectMapper = new ObjectMapper();

	@BeforeEach
	void setUp() {
		mockMvc = MockMvcBuilders.standaloneSetup(boardController).build();
	}

	@Nested
	class readList{

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

	}

	@Nested
	class registBoard{

		@Test
		@DisplayName("게시물 등록 성공했을 때")
		void boardRegisterSuccess() {
			// Given
			BoardDTO boardDTO = BoardDTO.builder().title("Test Title").content("Test Content").build();
			Long bno = 1L;
			when(boardService.register(any(BoardDTO.class))).thenReturn(bno);

			// When
			ResponseEntity<ResultDTO<Long>> result;
			try {
				result = boardController.register(boardDTO);
			} catch (BindException e) {
				fail("Unexpected BindException occurred: " + e.getMessage());
				return;
			}

			// Then
			assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
			assertThat(result.getBody().getResultData()).isEqualTo(bno);
		}

		@Test
		@DisplayName("유효하지 않은 데이터로 등록 실패할 경우")
		void registerBoardWithInvalidData() throws Exception {
			// Given
			BoardDTO boardDTO = BoardDTO.builder().title("").content("").build(); // 유효하지 않은 입력값

			// When
			ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.post("/api/boards")
			                                                                    .contentType(MediaType.APPLICATION_JSON)
			                                                                    .content(objectMapper.writeValueAsString(boardDTO)));
			// Then
			resultActions
				.andExpect(MockMvcResultMatchers.status().isBadRequest())
				.andExpect(result -> assertTrue(
					result.getResolvedException() instanceof MethodArgumentNotValidException));
		}
	}

	@Nested
	class readBoard{
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
	}

	@Nested
	class modifyBoard{

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
	}

	@Nested
	class removeBoard{

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
}