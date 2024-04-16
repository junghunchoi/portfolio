package com.backend.controller;

import com.backend.dto.ResultDTO;
import com.backend.dto.member.MemberJoinDTO;
import com.backend.entity.Member;
import com.backend.repository.MemberRepository;
import com.backend.security.dto.MemberSecurityDTO;
import com.backend.service.MemberService;
import com.backend.utils.FileUtils;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Log4j2
@RequiredArgsConstructor
public class MemberController {

	private final MemberService memberService;

	@PostMapping("/auth/member/login")
	public ResponseEntity<ResultDTO<String>> login(@RequestBody MemberSecurityDTO memberSecurityDTO) {

		log.info("---- membercontroller login ----");
		return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "login success"));
	}

	@PostMapping(value = "/members/register", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ResultDTO<String>> registerMember(@RequestBody MemberJoinDTO memberJoinDTO) {
		log.info("memberController - registerMember");
		log.info(memberJoinDTO);
		try {
			memberService.register(memberJoinDTO);
			return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "member register success"));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(ResultDTO.res(HttpStatus.BAD_REQUEST, e.getMessage()));
		}
	}

	@PostMapping("/members/check")
	public ResponseEntity<ResultDTO<String>> checkUserName(@RequestBody String userName) {
		log.info("memberController - checkUserName");
		log.info(userName);
		Optional<Member> member = memberService.readOne(userName);

		if (member.isEmpty()) {
			return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "validate userName"));
		} else {
			return ResponseEntity.ok()
			                     .body(ResultDTO.res(HttpStatus.OK, "isn't validate userName"));
		}
	}
}
