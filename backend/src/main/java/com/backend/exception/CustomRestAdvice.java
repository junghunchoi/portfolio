package com.backend.exception;

import com.backend.common.dto.ErrorResponse;
import com.fasterxml.jackson.core.JsonParseException;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.context.request.WebRequest;
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
	protected ResponseEntity<Object> handleMethodArgumentNotValidException(
		MethodArgumentNotValidException e) {
		log.error("유효하지 않은 객체 혹은 파라미터 데이터 값입니다: {}", e.getMessage());
		Map<String, String> validationErrors = new HashMap<>();
		List<ObjectError> validationErrorList = e.getBindingResult().getAllErrors();

		validationErrorList.forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String validationMsg = error.getDefaultMessage();
			validationErrors.put(fieldName, validationMsg);
		});
		return new ResponseEntity<>(validationErrors, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(BindException.class)
	@ResponseStatus(HttpStatus.EXPECTATION_FAILED)
	public ResponseEntity<ErrorResponse> handleBindException(BindException e, WebRequest webRequest) {
		log.error("바인딩 예외가 발생했습니다: {}", e.getMessage());
		ErrorResponse errorResponse = new ErrorResponse(
			webRequest.getDescription(false),
			HttpStatus.BAD_REQUEST,
			e.getMessage(),
			LocalDateTime.now()
		);
		return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(HttpMessageNotReadableException.class)
	protected ResponseEntity<ErrorResponse> handleHttpMessageNotReadableException(
		HttpMessageNotReadableException e, WebRequest webRequest) {
		log.error("요청 본문을 읽을 수 없습니다: {}", e.getMessage());
		ErrorResponse errorResponse = new ErrorResponse(
			webRequest.getDescription(false),
			HttpStatus.BAD_REQUEST,
			e.getMessage(),
			LocalDateTime.now()
		);
		return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(HttpClientErrorException.BadRequest.class)
	protected ResponseEntity<ErrorResponse> handleBadRequestException(HttpClientErrorException e, WebRequest webRequest) {
		log.error("잘못된 요청입니다: {}", e.getMessage());
		ErrorResponse errorResponse = new ErrorResponse(
			webRequest.getDescription(false),
			HttpStatus.BAD_REQUEST,
			e.getMessage(),
			LocalDateTime.now()
		);
		return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(NoHandlerFoundException.class)
	protected ResponseEntity<ErrorResponse> handleNoHandlerFoundExceptionException(
		NoHandlerFoundException e, WebRequest webRequest) {
		log.error("요청한 URL을 찾을 수 없습니다: {}", e.getMessage());
		ErrorResponse errorResponse = new ErrorResponse(
			webRequest.getDescription(false),
			HttpStatus.NOT_FOUND,
			e.getMessage(),
			LocalDateTime.now()
		);
		return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(NullPointerException.class)
	protected ResponseEntity<ErrorResponse> handleNullPointerException(NullPointerException e, WebRequest webRequest) {
		log.error("예기치 않은 NULL 값이 발생했습니다: {}", e.getMessage());
		ErrorResponse errorResponse = new ErrorResponse(
			webRequest.getDescription(false),
			HttpStatus.INTERNAL_SERVER_ERROR,
			e.getMessage(),
			LocalDateTime.now()
		);
		return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(IOException.class)
	protected ResponseEntity<ErrorResponse> handleIOException(IOException e, WebRequest webRequest) {
		log.error("입출력 오류가 발생했습니다: {}", e.getMessage());
		ErrorResponse errorResponse = new ErrorResponse(
			webRequest.getDescription(false),
			HttpStatus.INTERNAL_SERVER_ERROR,
			e.getMessage(),
			LocalDateTime.now()
		);
		return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(JsonParseException.class)
	protected ResponseEntity<ErrorResponse> handleJsonParseExceptionException(
		JsonParseException e, WebRequest webRequest) {
		log.error("JSON 파싱 중 오류가 발생했습니다: {}", e.getMessage());
		ErrorResponse errorResponse = new ErrorResponse(
			webRequest.getDescription(false),
			HttpStatus.BAD_REQUEST,
			e.getMessage(),
			LocalDateTime.now()
		);
		return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(BusinessExceptionHandler.class)
	public ResponseEntity<ErrorResponse> handleCustomException(BusinessExceptionHandler e, WebRequest webRequest) {
		log.error("비즈니스 로직 처리 중 오류가 발생했습니다: {}", e.getMessage());
		ErrorResponse errorResponse = new ErrorResponse(
			webRequest.getDescription(false),
			HttpStatus.BAD_REQUEST,
			e.getMessage(),
			LocalDateTime.now()
		);
		return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(MaxUploadSizeExceededException.class)
	public ResponseEntity<ErrorResponse> handleMaxSizeException(MaxUploadSizeExceededException e, WebRequest webRequest) {
		log.error("업로드 파일 크기 제한을 초과했습니다: {}", e.getMessage());
		ErrorResponse errorResponse = new ErrorResponse(
			webRequest.getDescription(false),
			HttpStatus.PAYLOAD_TOO_LARGE,
			e.getMessage(),
			LocalDateTime.now()
		);
		return new ResponseEntity<>(errorResponse, HttpStatus.PAYLOAD_TOO_LARGE);
	}

	@ExceptionHandler(AccessDeniedException.class)
	public ResponseEntity<ErrorResponse> handleAccessDeniedException(AccessDeniedException e, WebRequest webRequest) {
		log.error("접근이 거부되었습니다: {}", e.getMessage());
		ErrorResponse errorResponse = new ErrorResponse(
			webRequest.getDescription(false),
			HttpStatus.FORBIDDEN,
			e.getMessage(),
			LocalDateTime.now()
		);
		return new ResponseEntity<>(errorResponse, HttpStatus.FORBIDDEN);
	}

	@ExceptionHandler(Exception.class)
	protected final ResponseEntity<ErrorResponse> handleAllExceptions(Exception e, WebRequest webRequest) {
		log.error("예기치 않은 오류가 발생했습니다: {}", e.getMessage());
		ErrorResponse errorResponse = new ErrorResponse(
			webRequest.getDescription(false),
			HttpStatus.INTERNAL_SERVER_ERROR,
			e.getMessage(),
			LocalDateTime.now()
		);
		return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}