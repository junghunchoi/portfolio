package com.backend.security.handler;


import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 접근 거부(403 Forbidden) 처리를 위한 핸들러.
 * 접근이 거부되었을 때 호출되어 적절한 응답을 처리합니다.
 */
@Log4j2
public class Custom403Handler implements AccessDeniedHandler {

	/**
	 * 접근 거부 처리를 수행하는 메서드.
	 *
	 * @param request               접근이 거부된 요청의 HttpServletRequest 객체
	 * @param response              응답을 위한 HttpServletResponse 객체
	 * @param accessDeniedException 접근 거부 예외 객체
	 * @throws IOException      I/O 예외 발생 시
	 * @throws ServletException 서블릿 예외 발생 시
	 */
	@Override
	public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
		log.info("------- ACCESS DENIED -------");

		// 응답 상태 코드를 403 Forbidden으로 설정
		response.setStatus(HttpStatus.FORBIDDEN.value());

		// JSON 요청인지 확인
		String contentType = request.getHeader("Content-Type");
		boolean jsonRequest = contentType != null && contentType.startsWith("application/json");

		// 일반 요청인 경우
		if (!jsonRequest) {
			// 로그인 페이지로 리다이렉트하면서 접근 거부 에러 파라미터 전달
			response.getWriter().println("일반 요청은 처리할 수 없습니다.");
		}

	}
}