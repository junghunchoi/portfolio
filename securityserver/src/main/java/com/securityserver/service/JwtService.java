package com.securityserver.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.sql.Date;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
public class JwtService {
    @Value("${com.securityserver.jwt.secret}")
    private String KEY;

    private static final int ACCESSTOKENEXPIRATION = 7;
    private static final int REFRESHTOKENEXPIRATION = 30;

    private final String ALGORITHM = "RS256";

    /**
     * access token을 생성합니다.
     *
     * @param userDetails 로그인한 사용자의 정보를 담은 파라미터
     * @return 생성된 JWT 토큰 문자열.
     */
    public String generateAccessToken(UserDetails userDetails) {
        //헤더영역
        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", ALGORITHM);

        //페이로드영역
        Map<String, Object> payloads = new HashMap<>();
        payloads.put("username", userDetails.getUsername());
        int time = (60 * 24) * ACCESSTOKENEXPIRATION; // (60 * 24) => 1일

        return Jwts.builder()
                .setHeader(headers)
                .setClaims(payloads)
                .setIssuedAt(Date.from((ZonedDateTime.now().toInstant())))
                .setExpiration(
                        Date.from(ZonedDateTime.now().plusMinutes(time).toInstant()))
                .signWith(SignatureAlgorithm.HS256, KEY.getBytes())
                .compact();
    }

    /**
     * refresh token을 생성합니다.
     *
     * @param userDetails 로그인한 사용자의 정보를 담은 파라미터
     * @return 생성된 JWT 토큰 문자열.
     */
    public String generateRefreshToken(UserDetails userDetails) {
        //헤더영역
        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", ALGORITHM);

        //페이로드영역
        Map<String, Object> payloads = new HashMap<>();
        payloads.put("username", userDetails.getUsername());
        int time = (60 * 24) * REFRESHTOKENEXPIRATION; // (60 * 24) => 1일

        return Jwts.builder()
                .setHeader(headers)
                .setClaims(payloads)
                .setIssuedAt(Date.from((ZonedDateTime.now().toInstant())))
                .setExpiration(
                        Date.from(ZonedDateTime.now().plusMinutes(time).toInstant()))
                .signWith(SignatureAlgorithm.HS256, KEY.getBytes())
                .compact();
    }

    /**
     * 주어진 JWT 토큰을 검증하고, 토큰에 담긴 정보를 반환합니다.
     *
     * @param token 검증할 JWT 토큰 문자열.
     * @return 토큰에 담긴 정보를 담고 있는 Map 객체.
     */
    public Map<String, Object> validateToken(String token){
        Map<String, Object> claim = null;

        claim = Jwts.parser()
                .setSigningKey(KEY.getBytes())
                .parseClaimsJws(token)
                .getBody();

        return claim;
    }

    public String getUsernameFromToken(String token) {
        byte[] keyBytes = KEY.getBytes(StandardCharsets.UTF_8);
        Key key = new SecretKeySpec(keyBytes, SignatureAlgorithm.HS256.getJcaName());
        Claims claims = Jwts.parser()
                .setSigningKey(key) // 서명 검증을 위한 비밀 키 설정
                .parseClaimsJws(token)
                .getBody();

        return claims.get("userName", String.class);
    }
}
