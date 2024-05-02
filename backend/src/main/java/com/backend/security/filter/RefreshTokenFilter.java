package com.backend.security.filter;


import com.backend.security.exception.RefreshTokenException;
import com.backend.utils.JWTUtil;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.time.Instant;
import java.util.Date;
import java.util.Map;
import com.google.gson.Gson;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.MediaType;
import org.springframework.web.filter.OncePerRequestFilter;

/**
 * Refresh Token을 처리하기 위한 필터.
 * Access Token이 만료되었을 때, Refresh Token을 사용하여 새로운 Access Token을 발급받습니다.
 */
@Log4j2
@RequiredArgsConstructor
public class RefreshTokenFilter extends OncePerRequestFilter {

	private final String refreshPath;
	private final JWTUtil jwtUtil;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
		FilterChain filterChain) throws ServletException, IOException {

		String path = request.getRequestURI();

		if (!path.equals(refreshPath)) {
			log.info("skip refresh token filter.....");
			filterChain.doFilter(request, response);
			return;
		}

		log.info("Refresh Token Filter...run..............1");

		// 전송된 JSON에서 accessToken과 refreshToken을 얻어옵니다.
		Map<String, String> tokens = parseRequestJSON(request);

		String accessToken = tokens.get("accessToken");
		String refreshToken = tokens.get("refreshToken");

		log.info("accessToken: " + accessToken);
		log.info("refreshToken: " + refreshToken);

		try {
			checkAccessToken(accessToken);
		} catch (RefreshTokenException refreshTokenException) {
			refreshTokenException.sendResponseError(response);
			return;
		}

		Map<String, Object> refreshClaims = null;

		try {
			refreshClaims = checkRefreshToken(refreshToken);
		} catch (RefreshTokenException refreshTokenException) {
			refreshTokenException.sendResponseError(response);
			return;
		}

		// Refresh Token의 유효시간이 얼마 남지 않은 경우
		Integer exp = (Integer) refreshClaims.get("exp");

		Date expTime = new Date(Instant.ofEpochMilli(exp).toEpochMilli() * 1000);

		Date current = new Date(System.currentTimeMillis());

		// 만료 시간과 현재 시간의 간격 계산
		// 만일 3일 미만인 경우에는 Refresh Token도 다시 생성
		long gapTime = (expTime.getTime() - current.getTime());

		log.info("-----------------------------------------");
		log.info("current: " + current);
		log.info("expTime: " + expTime);
		log.info("gap: " + gapTime);

		String userName = (String) refreshClaims.get("userName");

		// 이 상태까지 오면 무조건 AccessToken은 새로 생성
		String accessTokenValue = jwtUtil.generateToken(Map.of("userName", userName), 3);

		String refreshTokenValue = tokens.get("refreshToken");

		// RefreshToken이 3일도 안 남았다면..
		if (gapTime < (1000 * 60 * 3)) {
			log.info("new Refresh Token required...  ");
			refreshTokenValue = jwtUtil.generateToken(Map.of("userName", userName), 30);
		}

		log.info("Refresh Token result....................");
		log.info("accessToken: " + accessTokenValue);
		log.info("refreshToken: " + refreshTokenValue);

		sendTokens(accessTokenValue, refreshTokenValue, response);
	}

	/**
	 * 요청의 JSON 데이터를 파싱하여 토큰 정보를 추출합니다.
	 *
	 * @param request HttpServletRequest 객체
	 * @return 토큰 정보가 포함된 Map 객체
	 */
	private Map<String, String> parseRequestJSON(HttpServletRequest request) {
		// JSON 데이터를 분석해서 accessToken, refreshToken 전달 값을 Map으로 처리
		try (Reader reader = new InputStreamReader(request.getInputStream())) {
			Gson gson = new Gson();
			return gson.fromJson(reader, Map.class);
		} catch (Exception e) {
			log.error(e.getMessage());
		}
		return null;
	}

	/**
	 * Access Token의 유효성을 검사합니다.
	 *
	 * @param accessToken Access Token 값
	 * @throws RefreshTokenException Access Token이 유효하지 않은 경우
	 */
	private void checkAccessToken(String accessToken) throws RefreshTokenException {
		try {
			jwtUtil.validateToken(accessToken);
		} catch (ExpiredJwtException expiredJwtException) {
			log.info("Access Token has expired");
		} catch (Exception exception) {
			throw new RefreshTokenException(RefreshTokenException.ErrorCase.NO_ACCESS);
		}
	}

	/**
	 * Refresh Token의 유효성을 검사합니다.
	 *
	 * @param refreshToken Refresh Token 값
	 * @return Refresh Token의 클레임 정보가 포함된 Map 객체
	 * @throws RefreshTokenException Refresh Token이 유효하지 않은 경우
	 */
	private Map<String, Object> checkRefreshToken(String refreshToken)
		throws RefreshTokenException {
		try {
			Map<String, Object> values = jwtUtil.validateToken(refreshToken);
			return values;
		} catch (ExpiredJwtException expiredJwtException) {
			throw new RefreshTokenException(RefreshTokenException.ErrorCase.OLD_REFRESH);
		} catch (Exception exception) {
			exception.printStackTrace();
			new RefreshTokenException(RefreshTokenException.ErrorCase.NO_REFRESH);
		}
		return null;
	}

	/**
	 * 새로 발급된 Access Token과 Refresh Token을 응답으로 전송합니다.
	 *
	 * @param accessTokenValue  새로 발급된 Access Token 값
	 * @param refreshTokenValue 새로 발급된 Refresh Token 값
	 * @param response          HttpServletResponse 객체
	 */
	private void sendTokens(String accessTokenValue, String refreshTokenValue, HttpServletResponse response) {
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);

		Gson gson = new Gson();

		String jsonStr = gson.toJson(
			Map.of("accessToken", accessTokenValue, "refreshToken", refreshTokenValue));

		try {
			response.getWriter().println(jsonStr);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
}