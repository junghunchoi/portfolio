package com.backend.controller;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.ResultDTO;
import com.backend.dto.reply.ReplyDTO;
import com.backend.service.ReplyService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ReplyController.class)
public class ReplyControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private ReplyService replyService;

	private ObjectMapper objectMapper;

	@BeforeEach
	void setUp() {
		objectMapper = new ObjectMapper();
	}

	@Test
	void register() throws Exception {
		ReplyDTO replyDTO = new ReplyDTO();
		// replyDTO 필드 설정

		given(replyService.Register(any(ReplyDTO.class))).willReturn(1L);

		mockMvc.perform(post("/api/replies")
			       .contentType(MediaType.APPLICATION_JSON)
			       .content(objectMapper.writeValueAsString(replyDTO)))
		       .andExpect(status().isOk())
		       .andExpect(jsonPath("$.data").value("register reply success : 1"));
	}

	@Test
	void getList() throws Exception {
		Long bno = 1L;
		PageRequestDTO pageRequestDTO = PageRequestDTO.builder().build();
		List<ReplyDTO> replyList = new ArrayList<>();
		// replyList 초기화

		PageResponseDTO<ReplyDTO> response = PageResponseDTO.<ReplyDTO>withAll()
		                                                    .pageRequestDTO(pageRequestDTO)
		                                                    .items(replyList)
		                                                    .total(replyList.size())
		                                                    .build();

		given(replyService.getListOfBoard(any(Long.class), any(PageRequestDTO.class))).willReturn(response);

		mockMvc.perform(get("/api/replies/{bno}", bno)
			       .contentType(MediaType.APPLICATION_JSON)
			       .content(objectMapper.writeValueAsString(pageRequestDTO)))
		       .andExpect(status().isOk())
		       .andExpect(jsonPath("$.data").exists());
	}

	@Test
	void remove() throws Exception {
		Long rno = 1L;

		mockMvc.perform(delete("/api/replies/{rno}", rno))
		       .andExpect(status().isOk())
		       .andExpect(jsonPath("$.data").value("삭제되었습니다."));
	}
}