package com.backend.security.exception;

import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.Map;

/**
 * 리프레시 토큰 관련 예외를 나타내는 클래스.
 * 리프레시 토큰 검증 과정에서 발생하는 다양한 예외 상황을 처리합니다.
 */
public class RefreshTokenException extends RuntimeException{

	private ErrorCase errorCase;

	public enum ErrorCase {
		NO_ACCESS, NO_REFRESH, OLD_REFRESH, BAD_ACCESS, BAD_REFRESH
	}

	public RefreshTokenException(ErrorCase errorCase){
		super(errorCase.name());
		this.errorCase = errorCase;
	}

	/**
	 * 예외 정보를 응답으로 전송하는 메서드.
	 *
	 * @param response HTTP 응답 객체
	 */
	public void sendResponseError(HttpServletResponse response){

		response.setStatus(HttpStatus.UNAUTHORIZED.value());
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);

		Gson gson = new Gson();

		String responseStr = gson.toJson(Map.of("msg", errorCase.name(), "time", new Date()));

		try {
			response.getWriter().println(responseStr);
		} catch (IOException e) {
			throw new RuntimeException("Failed to send response error", e);
		}
	}
}