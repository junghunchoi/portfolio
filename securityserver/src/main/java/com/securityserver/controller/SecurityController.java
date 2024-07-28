package com.securityserver.controller;

import com.securityserver.dto.AuthenticationResponse;
import com.securityserver.dto.ResultDTO;
import com.securityserver.dto.MemberJoinDTO;
import com.securityserver.dto.MemberSecurityDTO;
import com.securityserver.entity.Member;

import java.util.Collection;
import java.util.Optional;

import com.securityserver.service.AuthenticationService;
import com.securityserver.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@Tag(name = "Api about Member", description = "회원 관리 API")
@RestController
@RequestMapping("/auth")
@Log4j2
@RequiredArgsConstructor
public class SecurityController {
    private final AuthenticationService authenticationService;
    private final MemberService memberService;

    @Operation(summary = "회원 가입", description = "새로운 회원을 등록합니다.")
    @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
    @ApiResponse(responseCode = "400", description = "실패", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResultDTO<AuthenticationResponse>> login(@RequestBody MemberSecurityDTO memberDTO) {

        AuthenticationResponse response = authenticationService.authenticate(memberDTO);

        return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "login success", response));
    }

    @Operation(summary = "회원 가입", description = "새로운 회원을 등록합니다.")
    @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
    @ApiResponse(responseCode = "400", description = "실패", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResultDTO<String>> registerMember(@RequestBody MemberJoinDTO memberJoinDTO) {
        try {
            memberService.register(memberJoinDTO);
            return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "member register success"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ResultDTO.res(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @Operation(summary = "사용자 이름 중복 확인", description = "입력된 사용자 이름의 중복 여부를 확인합니다.")
    @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
    @PostMapping("/check")
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

