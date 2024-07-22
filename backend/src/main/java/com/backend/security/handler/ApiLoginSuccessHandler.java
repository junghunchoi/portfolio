package com.backend.security.handler;

import com.backend.utils.JWTUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

/**
 * API 로그인 성공 시 처리를 담당하는 핸들러.
 * 로그인 성공 후 액세스 토큰과 리프레시 토큰을 생성하고 응답으로 반환합니다.
 */
@Log4j2
@RequiredArgsConstructor
public class ApiLoginSuccessHandler implements AuthenticationSuccessHandler {
	private static final int ACCESSTOKENEXPIRATION = 7;
	private static final int REFRESHTOKENEXPIRATION = 30;

	private final JWTUtil jwtUtil;

	/**
	 * 로그인 성공 시 처리를 수행하는 메서드.
	 *
	 * @param request        로그인 요청 객체
	 * @param response       로그인 응답 객체
	 * @param authentication 인증 정보
	 * @throws IOException      I/O 예외 발생 시
	 * @throws ServletException 서블릿 예외 발생 시
	 */
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
		Authentication authentication) throws IOException, ServletException {
		log.info("Login Success Handler....");

		response.setContentType(MediaType.APPLICATION_JSON_VALUE);

		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();

		// 응답 데이터 생성
		Map<String, Object> responseData = new HashMap<>();
		responseData.put("username", authentication.getName());
		responseData.put("authorities", authorities);

		// JSON 응답 생성
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(new ObjectMapper().writeValueAsString(responseData));

		Map<String, Object> claim = Map.of("userName", authentication.getName());
		//todo 권한도 토큰에 추가해야한다.
		//Access Token 유효기간
		String accessToken = jwtUtil.generateToken(claim, ACCESSTOKENEXPIRATION);
		//Refresh Token 유효기간
		String refreshToken = jwtUtil.generateToken(claim, REFRESHTOKENEXPIRATION);

		Gson gson = new Gson();

		Map<String, String> keyMap = Map.of("accessToken", accessToken,
											"refreshToken",refreshToken);

		String jsonStr = gson.toJson(keyMap);

		response.getWriter().println(jsonStr);

	}
}
