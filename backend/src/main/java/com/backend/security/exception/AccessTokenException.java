package com.backend.security.exception;

import com.google.gson.Gson;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.Map;
import org.springframework.http.MediaType;

/**
 * 액세스 토큰 관련 예외를 처리하기 위한 클래스입니다.
 */
public class AccessTokenException extends RuntimeException {

	private TOKEN_ERROR token_error;

	/**
	 * 액세스 토큰 오류의 유형을 나타내는 열거형입니다.
	 */
	public enum TOKEN_ERROR {
		UNACCEPT(401,"Token is null or too short"),
		BADTYPE(401, "Token type Bearer"),
		MALFORM(403, "Malformed Token"),
		BADSIGN(403, "BadSignatured Token"),
		EXPIRED(403, "Expired Token");

		private int status;
		private String msg;

		TOKEN_ERROR(int status, String msg){
			this.status = status;
			this.msg = msg;
		}

		/**
		 * 오류의 HTTP 상태 코드를 반환합니다.
		 *
		 * @return 오류의 HTTP 상태 코드
		 */
		public int getStatus() {
			return this.status;
		}

		/**
		 * 오류 메시지를 반환합니다.
		 *
		 * @return 오류 메시지
		 */
		public String getMsg() {
			return this.msg;
		}
	}

	/**
	 * 주어진 오류 유형으로 AccessTokenException을 생성합니다.
	 *
	 * @param error 오류 유형
	 */
	public AccessTokenException(TOKEN_ERROR error){
		super(error.name());
		this.token_error = error;
	}

	/**
	 * 오류 응답을 클라이언트에게 전송합니다.
	 *
	 * @param response HttpServletResponse 객체
	 */
	public void sendResponseError(HttpServletResponse response){
		response.setStatus(token_error.getStatus());
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);

		Gson gson = new Gson();

		String responseStr = gson.toJson(Map.of("msg", token_error.getMsg(), "time", new Date()));

		try {
			response.getWriter().println(responseStr);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
}