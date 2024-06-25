package com.securityserver.filter;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.Map;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;

/**
 * API 로그인을 처리하기 위한 필터.
 * JSON 형식의 데이터를 분석하여 사용자 인증을 수행합니다.
 */
@Log4j2
public class APILoginFilter extends AbstractAuthenticationProcessingFilter {

	/**
	 * APILoginFilter 생성자.
	 *
	 * @param defaultFilterProcessesUrl 필터가 처리할 URL
	 */
	public APILoginFilter(String defaultFilterProcessesUrl) {
		super(defaultFilterProcessesUrl);
	}

	/**
	 * 인증 시도를 처리하는 메서드.
	 *
	 * @param request  HttpServletRequest 객체
	 * @param response HttpServletResponse 객체
	 * @return 인증 결과를 나타내는 Authentication 객체
	 * @throws AuthenticationException 인증 예외 발생 시
	 * @throws IOException             I/O 예외 발생 시
	 * @throws ServletException        서블릿 예외 발생 시
	 */
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request,
		HttpServletResponse response)
		throws AuthenticationException, IOException, ServletException {

		// GET 방식은 지원하지 않음
		if (request.getMethod().equalsIgnoreCase("GET")) {
			log.warn("GET 방식은 지원되지 않습니다.");
			return null;
		}

		// 요청의 JSON 데이터를 분석하여 사용자 정보 추출
		Map<String, String> jsonData = parseRequestJson(request);

		// 추출한 사용자 정보로 UsernamePasswordAuthenticationToken 생성
		UsernamePasswordAuthenticationToken authenticationToken =
			new UsernamePasswordAuthenticationToken(
				jsonData.get("username"),
				jsonData.get("password"));

		// AuthenticationManager를 통해 인증 수행
		return getAuthenticationManager().authenticate(authenticationToken);
	}

	/**
	 * 요청의 JSON 데이터를 분석하여 사용자 정보를 추출하는 메서드.
	 *
	 * @param request HttpServletRequest 객체
	 * @return 사용자 정보가 포함된 Map 객체
	 */
	private Map<String, String> parseRequestJson(HttpServletRequest request) {
		// JSON 데이터를 분석해 username, password를 Map으로 처리
		try (Reader reader = new InputStreamReader(request.getInputStream())) {
			Gson gson = new Gson();
			return gson.fromJson(reader, Map.class);
		} catch (IOException e) {
			log.error("JSON 데이터 분석 중 오류 발생", e);
		}
		return null;
	}
}