package com.backend.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.sql.Date;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.Map;
import javax.crypto.spec.SecretKeySpec;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * JWT(Jason Web Tokens) 생성 및 검증 유틸리티 클래스.
 */
@Component
@Log4j2
public class JWTUtil {

	@Value("${com.backend.jwt.secret}")
	private String KEY;

	private final String ALGORITHM = "HS256";

	/**
	 * JWT 토큰을 생성합니다.
	 *
	 * @param valueMap 토큰에 포함될 정보를 담은 Map 객체.
	 * @param days 토큰의 유효 기간(일 단위).
	 * @return 생성된 JWT 토큰 문자열.
	 */
	public String generateToken(Map<String, Object> valueMap, int days) {

		//헤더영역
		Map<String, Object> headers = new HashMap<>();
		headers.put("typ", "JWT");
		headers.put("alg", ALGORITHM);

		//페이로드영역
		Map<String, Object> payloads = new HashMap<>();
		payloads.putAll(valueMap);

		int time = (60 * 24) * days; // (60 * 24) => 1일

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
