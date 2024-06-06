package com.backend.controller;

import com.backend.dto.ResultDTO;
import com.backend.dto.member.MemberJoinDTO;
import com.backend.entity.Member;
import com.backend.service.MemberService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class MemberControllerTest {

	@InjectMocks
	private MemberController memberController;

	@Mock
	private MemberService memberService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void registerMember_Success() {
		MemberJoinDTO memberJoinDTO = new MemberJoinDTO();
		// memberJoinDTO 필드 설정

		doNothing().when(memberService).register(memberJoinDTO);

		ResponseEntity<ResultDTO<String>> response = memberController.registerMember(memberJoinDTO);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("member register success", response.getBody().getResultData());
	}

	@Test
	void registerMember_Exception() {
		MemberJoinDTO memberJoinDTO = new MemberJoinDTO();
		// memberJoinDTO 필드 설정

		doThrow(new RuntimeException("Error message")).when(memberService).register(memberJoinDTO);

		ResponseEntity<ResultDTO<String>> response = memberController.registerMember(memberJoinDTO);

		assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
		assertEquals("Error message", response.getBody().getResultData());
	}

	@Test
	void checkUserName_UserNameAvailable() {
		String userName = "testUser";
		Map<String, String> requestBody = new HashMap<>();
		requestBody.put("userName", userName);

		when(memberService.readOne(userName)).thenReturn(Optional.empty());

		ResponseEntity<ResultDTO<String>> response = memberController.checkUserName(requestBody);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("validate userName", response.getBody().getResultData());
	}

	@Test
	void checkUserName_UserNameTaken() {
		String userName = "testUser";
		Map<String, String> requestBody = new HashMap<>();
		requestBody.put("userName", userName);

		Member member = new Member();
		// member 필드 설정

		when(memberService.readOne(userName)).thenReturn(Optional.of(member));

		ResponseEntity<ResultDTO<String>> response = memberController.checkUserName(requestBody);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("userName already exists", response.getBody().getResultData());
	}
}