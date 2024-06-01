package com.backend.exception;

import com.fasterxml.jackson.core.JsonParseException;
import java.io.IOException;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.validation.BindException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.servlet.NoHandlerFoundException;

/**
 Controller 내에서 발생하는 Exception 대해서 Catch 하여 응답값(Response)을 보내주는 기능을 수행함.
 */
@RestControllerAdvice
@Log4j2
public class CustomRestAdvice {
	/**

	 [Exception] API 호출 시 '객체' 혹은 '파라미터' 데이터 값이 유효하지 않은 경우

	 @param e MethodArgumentNotValidException
	 @return ResponseEntity<String>
	 */
	@ExceptionHandler(MethodArgumentNotValidException.class)
	protected ResponseEntity<String> handleMethodArgumentNotValidException(
		MethodArgumentNotValidException e) {
		log.error("유효하지 않은 객체 혹은 파라미터 데이터 값입니다: {}", e.getMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
		                     .body("유효하지 않은 데이터 값이 전달되었습니다. 입력값을 확인해 주세요.");
	}

	/**

	 [Exception] 바인딩 예외 및 요청의 데이터 유효성이 잘못된 경우

	 @param e BindException
	 @return 에러 응답 엔티티
	 */
	@ExceptionHandler(BindException.class)
	@ResponseStatus(HttpStatus.EXPECTATION_FAILED)
	public ResponseEntity<String> handleBindException(BindException e) {
		log.error("바인딩 예외가 발생했습니다: {}", e.getMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
		                     .body("요청 데이터의 바인딩에 실패했습니다. 입력값을 확인해 주세요.");
	}

	/**

	 [Exception] 클라이언트에서 Body로 '객체' 데이터가 넘어오지 않았을 경우

	 @param e HttpMessageNotReadableException
	 @return ResponseEntity<String>
	 */
	@ExceptionHandler(HttpMessageNotReadableException.class)
	protected ResponseEntity<String> handleHttpMessageNotReadableException(
		HttpMessageNotReadableException e) {
		log.error("요청 본문을 읽을 수 없습니다: {}", e.getMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
		                     .body("요청 본문이 누락되었거나 잘못된 형식입니다.");
	}

	/**

	 [Exception] 잘못된 서버 요청일 경우 발생한 경우

	 @param e HttpClientErrorException
	 @return ResponseEntity<String>
	 */
	@ExceptionHandler(HttpClientErrorException.BadRequest.class)
	protected ResponseEntity<String> handleBadRequestException(HttpClientErrorException e) {
		log.error("잘못된 요청입니다: {}", e.getMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
		                     .body("잘못된 요청입니다. 요청 형식과 파라미터를 확인해 주세요.");
	}

	/**

	 [Exception] 잘못된 주소로 요청 한 경우

	 @param e NoHandlerFoundException
	 @return ResponseEntity<String>
	 */
	@ExceptionHandler(NoHandlerFoundException.class)
	protected ResponseEntity<String> handleNoHandlerFoundExceptionException(
		NoHandlerFoundException e) {
		log.error("요청한 URL을 찾을 수 없습니다: {}", e.getMessage());
		return ResponseEntity.status(HttpStatus.NOT_FOUND)
		                     .body("요청한 페이지를 찾을 수 없습니다. URL을 확인해 주세요.");
	}

	/**

	 [Exception] NULL 값이 발생한 경우

	 @param e NullPointerException
	 @return ResponseEntity<String>
	 */
	@ExceptionHandler(NullPointerException.class)
	protected ResponseEntity<String> handleNullPointerException(NullPointerException e) {
		log.error("예기치 않은 NULL 값이 발생했습니다: {}", e.getMessage());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
		                     .body("서버에서 예기치 않은 NULL 값이 발생했습니다. 관리자에게 문의해 주세요.");
	}

	/**

	 [Exception] Input / Output 내에서 발생한 경우

	 @param e IOException
	 @return ResponseEntity<String>
	 */
	@ExceptionHandler(IOException.class)
	protected ResponseEntity<String> handleIOException(IOException e) {
		log.error("입출력 오류가 발생했습니다: {}", e.getMessage());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
		                     .body("서버에서 입출력 처리 중 오류가 발생했습니다. 관리자에게 문의해 주세요.");
	}

	/**

	 [Exception] Json 오류관련

	 @param e JsonParseException
	 @return ResponseEntity<String>
	 */
	@ExceptionHandler(JsonParseException.class)
	protected ResponseEntity<String> handleJsonParseExceptionException(
		JsonParseException e) {
		log.error("JSON 파싱 중 오류가 발생했습니다: {}", e.getMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
		                     .body("잘못된 JSON 형식입니다. 요청 데이터를 확인해 주세요.");
	}

	/**

	 BusinessException에서 발생한 에러

	 @param e BusinessException
	 @return ResponseEntity<String>
	 */
	@ExceptionHandler(BusinessExceptionHandler.class)
	public ResponseEntity<String> handleCustomException(BusinessExceptionHandler e) {
		log.error("비즈니스 로직 처리 중 오류가 발생했습니다: {}", e.getMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
		                     .body("요청 처리 중 오류가 발생했습니다. 입력값을 확인하시고 문제가 지속되면 관리자에게 문의해 주세요.");
	}

	/**

	 [Exception] MaxUploadSizeExceededException 발생한 에러

	 @param e MaxUploadSizeExceededException
	 @return ResponseEntity<String>
	 */
	@ExceptionHandler(MaxUploadSizeExceededException.class)
	public ResponseEntity<String> handleMaxSizeException(MaxUploadSizeExceededException e) {
		log.error("업로드 파일 크기 제한을 초과했습니다: {}", e.getMessage());
		return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
		                     .body("업로드 가능한 파일 크기를 초과했습니다. 파일 크기를 확인해 주세요.");
	}

	@ExceptionHandler(AccessDeniedException.class)
	public ResponseEntity<String> handleAccessDeniedException(AccessDeniedException e) {
		log.error("접근이 거부되었습니다: {}", e.getMessage());
		return ResponseEntity.status(HttpStatus.FORBIDDEN)
		                     .body("해당 페이지에 접근 권한이 없습니다. 관리자에게 문의하세요.");
	}
	/**

	 [Exception] 모든 Exception 경우 발생

	 @param e Exception
	 @return ResponseEntity<String>
	 */
	@ExceptionHandler(Exception.class)
	protected final ResponseEntity<String> handleAllExceptions(Exception e) {
		log.error("예기치 않은 오류가 발생했습니다: {}", e.getMessage());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
		                     .body("서버에서 예기치 않은 오류가 발생했습니다. 관리자에게 문의해 주세요.");
	}
}