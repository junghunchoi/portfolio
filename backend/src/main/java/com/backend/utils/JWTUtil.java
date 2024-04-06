package com.backend.utils;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.nio.charset.StandardCharsets;
import java.sql.Date;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.Map;
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
	private String key;

	/**
	 * JWT 토큰을 생성합니다.
	 *
	 * @param valueMap 토큰에 포함될 정보를 담은 Map 객체.
	 * @param days 토큰의 유효 기간(일 단위).
	 * @return 생성된 JWT 토큰 문자열.
	 */
	public String generateToken(Map<String, Object> valueMap, int days) {
		log.info("generatekey: " + key);

		//헤더영역
		Map<String, Object> headers = new HashMap<>();
		headers.put("typ", "JWT");
		headers.put("alg", "HS256");

		//페이로드영역
		Map<String, Object> payloads = new HashMap<>();
		payloads.putAll(valueMap);

		//테스트 시에는 짧은 유효기간
		int time = (60 * 24) * days; // 테스트는 분 단위로 나중엔 60 * 24(일)단위로 변경

		return Jwts.builder()
		                    .setHeader(headers)
		                    .setClaims(payloads)
		                    .setIssuedAt(Date.from((ZonedDateTime.now().toInstant())))
		                    .setExpiration(
			                    Date.from(ZonedDateTime.now().plusMinutes(time).toInstant()))
		                    .signWith(SignatureAlgorithm.HS256, key.getBytes())
		                    .compact();
	}

	/**
	 * 주어진 JWT 토큰을 검증하고, 토큰에 담긴 정보를 반환합니다.
	 *
	 * @param token 검증할 JWT 토큰 문자열.
	 * @return 토큰에 담긴 정보를 담고 있는 Map 객체.
	 * @throws JwtException 토큰 검증 실패 시 발생.
	 */
	public Map<String, Object> validateToken(String token) throws JwtException {
		Map<String, Object> claim = null;

		claim = Jwts.parser()
		            .setSigningKey(key.getBytes()) // Set key
		            .parseClaimsJws(token) // 파싱 및 검증, 실패 시 에러
		            .getBody();

		return claim;
	}
}
