package com.backend.controller;

import com.backend.dto.ResultDTO;
import com.backend.dto.member.MemberJoinDTO;
import com.backend.entity.Member;
import com.backend.repository.MemberRepository;
import com.backend.security.dto.MemberSecurityDTO;
import com.backend.service.MemberService;
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
@RequestMapping("/api/members")
@Log4j2
@RequiredArgsConstructor
public class MemberController {

	private final MemberService memberService;
	private final MemberRepository memberRepository;

	@PostMapping("/login")
	public ResponseEntity<ResultDTO> login(@RequestBody MemberSecurityDTO memberSecurityDTO) {

		log.info("---- membercontroller login ----");
		return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "login success"));
	}

	@PostMapping(value="/register", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ResultDTO> registerMember(@RequestBody MemberJoinDTO memberSecurityDTO){
		log.info("memberController - registerMember");
		log.info(memberSecurityDTO);

		memberService.register(memberSecurityDTO);

		return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "member register success"));
	}

	@PostMapping("/check")
	public ResponseEntity<ResultDTO> checkUserName(@RequestBody String userName){
		log.info("memberController - checkUserName");
		log.info(userName);
		Optional<Member> member = memberService.readOne(userName);

		if (member.isEmpty()) {
			return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "validate userName"));
		} else {
			return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "isn't validate userName"));
		}
	}
}
