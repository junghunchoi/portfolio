package com.backend.controller;

import com.backend.dto.ResultDTO;
import com.backend.dto.member.MemberJoinDTO;
import com.backend.security.dto.MemberSecurityDTO;
import java.util.Collections;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
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

	@PostMapping("/login")
	public ResponseEntity<ResultDTO> login(@RequestBody MemberSecurityDTO memberSecurityDTO) {


		log.info("---- membercontroller login ----");
		log.info(memberSecurityDTO.toString());
		return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "login success"));
	}
}
