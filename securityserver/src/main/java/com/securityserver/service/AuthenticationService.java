package com.securityserver.service;

import com.securityserver.dto.AuthenticationResponse;
import com.securityserver.dto.MemberSecurityDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 인증 및 인가 전반의 서비스
 * 로그인 성공 후 액세스 토큰과 리프레시 토큰을 생성하고 응답으로 반환합니다.
 */
@Log4j2
@RequiredArgsConstructor
@Service
public class AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final CustomUserDetailsService customUserDetailsService;

    /**
     * 최초 로그인 시작점으로 성공시 jwt 발급 및 권한관리 등 전반의 기능을 수행
     *
     * @param request id, password를 담은 파라미터
     * @return
     */
    public AuthenticationResponse authenticate(MemberSecurityDTO request) {
        List<String> authorities = null;
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        if (authentication.isAuthenticated()) {
            authorities = authentication.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList());
        }
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(request.getUsername());
        String accessToken = jwtService.generateAccessToken(userDetails);
        String refreshToken = jwtService.generateAccessToken(userDetails);

        return AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .authorities(authorities)
                .build();
    }
}