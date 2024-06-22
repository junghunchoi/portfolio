package com.backend.controller;

import com.backend.common.dto.ResultDTO;
import com.backend.dto.member.MemberJoinDTO;
import com.backend.entity.Member;
import com.backend.service.MemberService;
import java.util.Map;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Log4j2
@RequiredArgsConstructor
public class MemberController {
	private final MemberService memberService;


	@PostMapping(value = "/auth/members/register", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ResultDTO<String>> registerMember(@RequestBody MemberJoinDTO memberJoinDTO) {
		try {
			memberService.register(memberJoinDTO);
			return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "member register success"));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(ResultDTO.res(HttpStatus.BAD_REQUEST, e.getMessage()));
		}
	}

	@PostMapping("/auth/members/check")
	public ResponseEntity<ResultDTO<String>> checkUserName(@RequestBody Map<String, String> requestBody) {
		String userName = requestBody.get("userName");
		Optional<Member> member = memberService.readOne(userName);

		if (member.isEmpty()) {
			return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "validate userName"));
		} else {
			return ResponseEntity.ok()
			                     .body(ResultDTO.res(HttpStatus.OK, "userName already exists"));
		}
	}
}
