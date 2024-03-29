package com.backend.security.handler;

import com.backend.utils.JWTUtil;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@Log4j2
@RequiredArgsConstructor
public class ApiLoginSuccessHandler implements AuthenticationSuccessHandler {

	private final JWTUtil jwtUtil;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
		Authentication authentication) throws IOException, ServletException {
		log.info("Login Success Handler....");

		response.setContentType(MediaType.APPLICATION_JSON_VALUE);

		log.info(authentication);
		log.info(authentication.getName());

		Map<String, Object> claim = Map.of("userName", authentication.getName());

		//Access Token 유효기간
		String accessToken = jwtUtil.generateToken(claim, 1);
		//Refresh Token 유효기간
		String refreshToken = jwtUtil.generateToken(claim, 1);

		Gson gson = new Gson();

		Map<String, String> keyMap = Map.of("accessToken", accessToken,
											"refreshToken",refreshToken);

		String jsonStr = gson.toJson(keyMap);

		response.getWriter().println(jsonStr);

	}
}
