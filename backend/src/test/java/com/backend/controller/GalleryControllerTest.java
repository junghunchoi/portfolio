package com.backend.controller;

import static org.junit.jupiter.api.Assertions.*;

import com.backend.dto.ResultDTO;
import org.junit.jupiter.api.Test;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.GalleryListDTO;
import com.backend.service.GalleryService;
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
class GalleryControllerTest {

	@Mock
	private GalleryService galleryService;

	@InjectMocks
	private GalleryController galleryController;

	@Test
	@DisplayName("게시물 목록 조회 테스트")
	void testList() {
		// Given
		PageRequestDTO pageRequestDTO = PageRequestDTO.builder().page(1).size(10).build();
		List<GalleryListDTO> galleryListDTOs = new ArrayList<>();
		PageResponseDTO<GalleryListDTO> responseDTO = PageResponseDTO.<GalleryListDTO>withAll()
		                                                             .pageRequestDTO(pageRequestDTO)
		                                                             .items(galleryListDTOs)
		                                                             .total(galleryListDTOs.size())
		                                                             .build();

		when(galleryService.list(any(PageRequestDTO.class))).thenReturn(responseDTO);

		// When
		ResponseEntity<ResultDTO<Object>> result = galleryController.list(pageRequestDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo(responseDTO);
	}

	@Test
	@DisplayName("게시물 등록 테스트")
	void testRegister() throws BindException {
		// Given
		BoardDTO boardDTO = BoardDTO.builder().title("Test Title").content("Test Content").build();
		Long bno = 1L;
		when(galleryService.register(any(BoardDTO.class))).thenReturn(bno);

		// When
		ResponseEntity<ResultDTO<Long>> result = galleryController.register(boardDTO);

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
		when(galleryService.readOne(any(Long.class))).thenReturn(boardDTO);

		// When
		ResponseEntity<BoardDTO> result = galleryController.read(bno);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody()).isEqualTo(boardDTO);
	}

	@Test
	@DisplayName("게시물 수정 테스트")
	void testModify() {
		// Given
		BoardDTO boardDTO = BoardDTO.builder().bno(1L).title("Updated Title").content("Updated Content").build();

		// When
		ResponseEntity<ResultDTO<String>> result = galleryController.modify(boardDTO);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData().toString()).isEqualTo("수정 성공");
	}

	@Test
	@DisplayName("게시물 삭제 테스트")
	void testRemove() {
		// Given
		Long bno = 1L;

		// When
		ResponseEntity<ResultDTO<String>> result = galleryController.remove(bno);

		// Then
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getResultData()).isEqualTo("삭제 성공");
	}
}