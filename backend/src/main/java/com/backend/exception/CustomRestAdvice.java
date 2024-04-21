package com.backend.exception;

import com.backend.common.codes.ErrorCode;
import com.backend.common.dto.ErrorResponse;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import lombok.extern.log4j.Log4j2;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConversionException;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingRequestHeaderException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.validation.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.servlet.NoHandlerFoundException;

/**
 * Controller 내에서 발생하는 Exception 대해서 Catch 하여 응답값(Response)을 보내주는 기능을 수행함.
 */
@RestControllerAdvice
@Log4j2
public class CustomRestAdvice {

	private final HttpStatus HTTP_STATUS_OK = HttpStatus.OK;

	/**
	 * [Exception] API 호출 시 '객체' 혹은 '파라미터' 데이터 값이 유효하지 않은 경우
	 *
	 * @param e MethodArgumentNotValidException
	 * @return ResponseEntity<ErrorResponse>
	 */
	@ExceptionHandler(MethodArgumentNotValidException.class)
	protected ResponseEntity<ErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
		log.error("handleMethodArgumentNotValidException", e);
		BindingResult bindingResult = e.getBindingResult();
		StringBuilder stringBuilder = new StringBuilder();
		for (FieldError fieldError : bindingResult.getFieldErrors()) {
			stringBuilder.append(fieldError.getField()).append(":");
			stringBuilder.append(fieldError.getDefaultMessage());
			stringBuilder.append(", ");
		}
		final ErrorResponse response = ErrorResponse.of(ErrorCode.NOT_VALID_ERROR, String.valueOf(stringBuilder));

		log.error("MethodArgumentNotValidException"  + stringBuilder);

		return ResponseEntity.badRequest().body(response);
	}

	/**
	 * 바인딩 예외를 처리합니다.
	 *
	 * @param e BindException
	 * @return 에러 응답 엔티티
	 */
	@ExceptionHandler(BindException.class)
	@ResponseStatus(HttpStatus.EXPECTATION_FAILED)
	public ResponseEntity<ErrorResponse> handleBindException(BindException e) {
		StringBuilder stringBuilder = new StringBuilder();
		if (e.hasErrors()) {
			BindingResult bindingResult = e.getBindingResult();

			for (FieldError fieldError : bindingResult.getFieldErrors()) {
				stringBuilder.append(fieldError.getField()).append(":");
				stringBuilder.append(fieldError.getDefaultMessage());
				stringBuilder.append(", ");
			}
		}

		final ErrorResponse response = ErrorResponse.of(ErrorCode.INVALID_TYPE_VALUE, String.valueOf(stringBuilder));
		log.error("Binding exception occurred: {}", e.getMessage());
		return ResponseEntity.badRequest().body(response);
	}

	@ExceptionHandler(InvalidDataAccessApiUsageException.class)
	@ResponseStatus(HttpStatus.EXPECTATION_FAILED)
	public ResponseEntity<ErrorResponse> handleInvalidDataAccessApiUsageException(InvalidDataAccessApiUsageException e) {
		final ErrorResponse response = ErrorResponse.of(ErrorCode.INVALID_TYPE_VALUE, e.getStackTrace().toString());
		log.error("Invalid data access API usage: {}", e.getMessage());
		return ResponseEntity.badRequest().body(response);
	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	@ResponseStatus(HttpStatus.EXPECTATION_FAILED)
	public ResponseEntity<Map<String, String>> handleFKException(Exception e) {

		Map<String, String> errorMap = new HashMap<>();

		errorMap.put("time", "" + System.currentTimeMillis());
		errorMap.put("msg", "constraint fail");
		log.error("Data integrity violation: {}", e.getMessage());
		return ResponseEntity.badRequest().body(errorMap);

	}

	// 서비스계층에서 에러가 났을 경우 컨트롤러에 전해지기전에 return되도록 하는 메소드
	@ExceptionHandler({NoSuchElementException.class, EmptyResultDataAccessException.class})
	@ResponseStatus(HttpStatus.EXPECTATION_FAILED)
	public ResponseEntity<Map<String, String>> handleNosuchElement(Exception e) {
		log.error(e);
		Map<String, String> errorMap = new HashMap<>();

		errorMap.put("time", "" + System.currentTimeMillis());
		errorMap.put("msg", "No Such Element");
		log.error("Element not found: {}", e.getMessage());
		return ResponseEntity.badRequest().body(errorMap);

	}

	/**
	 * [Exception] API 호출 시 'Header' 내에 데이터 값이 유효하지 않은 경우
	 *
	 * @param e MissingRequestHeaderException
	 * @return ResponseEntity<ErrorResponse>
	 */
	@ExceptionHandler(MissingRequestHeaderException.class)
	protected ResponseEntity<ErrorResponse> handleMissingRequestHeaderException(MissingRequestHeaderException e) {
		final ErrorResponse response = ErrorResponse.of(ErrorCode.REQUEST_BODY_MISSING_ERROR, e.getMessage());
		log.error("Missing request header: {}", e.getHeaderName());
		return new ResponseEntity<>(response, HTTP_STATUS_OK);
	}

	/**
	 * [Exception] 클라이언트에서 Body로 '객체' 데이터가 넘어오지 않았을 경우
	 *
	 * @param e HttpMessageNotReadableException
	 * @return ResponseEntity<ErrorResponse>
	 */
	@ExceptionHandler(HttpMessageNotReadableException.class)
	protected ResponseEntity<ErrorResponse> handleHttpMessageNotReadableException(
		HttpMessageNotReadableException e) {
		log.error("HttpMessageNotReadableException", e);
		final ErrorResponse response = ErrorResponse.of(ErrorCode.REQUEST_BODY_MISSING_ERROR, e.getMessage());
		return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	}

	/**
	 * [Exception] 클라이언트에서 request로 '파라미터로' 데이터가 넘어오지 않았을 경우
	 *
	 * @param e MissingServletRequestParameterException
	 * @return ResponseEntity<ErrorResponse>
	 */
	@ExceptionHandler(MissingServletRequestParameterException.class)
	protected ResponseEntity<ErrorResponse> handleMissingRequestHeaderExceptionException(
		MissingServletRequestParameterException e) {
		log.error("handleMissingServletRequestParameterException", e);
		final ErrorResponse response = ErrorResponse.of(ErrorCode.MISSING_REQUEST_PARAMETER_ERROR, e.getMessage());
		return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	}


	/**
	 * [Exception] 잘못된 서버 요청일 경우 발생한 경우
	 *
	 * @param e HttpClientErrorException
	 * @return ResponseEntity<ErrorResponse>
	 */
	@ExceptionHandler(HttpClientErrorException.BadRequest.class)
	protected ResponseEntity<ErrorResponse> handleBadRequestException(HttpClientErrorException e) {
		log.error("HttpClientErrorException.BadRequest", e);
		final ErrorResponse response = ErrorResponse.of(ErrorCode.BAD_REQUEST_ERROR, e.getMessage());
		return new ResponseEntity<>(response, HTTP_STATUS_OK);
	}


	/**
	 * [Exception] 잘못된 주소로 요청 한 경우
	 *
	 * @param e NoHandlerFoundException
	 * @return ResponseEntity<ErrorResponse>
	 */
	@ExceptionHandler(NoHandlerFoundException.class)
	protected ResponseEntity<ErrorResponse> handleNoHandlerFoundExceptionException(NoHandlerFoundException e) {
		log.error("handleNoHandlerFoundExceptionException", e);
		final ErrorResponse response = ErrorResponse.of(ErrorCode.NOT_FOUND_ERROR, e.getMessage());
		return new ResponseEntity<>(response, HTTP_STATUS_OK);
	}


	/**
	 * [Exception] NULL 값이 발생한 경우
	 *
	 * @param e NullPointerException
	 * @return ResponseEntity<ErrorResponse>
	 */
	@ExceptionHandler(NullPointerException.class)
	protected ResponseEntity<ErrorResponse> handleNullPointerException(NullPointerException e) {
		log.error("handleNullPointerException", e);
		final ErrorResponse response = ErrorResponse.of(ErrorCode.NULL_POINT_ERROR, e.getMessage());
		return new ResponseEntity<>(response, HTTP_STATUS_OK);
	}

	/**
	 * Input / Output 내에서 발생한 경우
	 *
	 * @param e IOException
	 * @return ResponseEntity<ErrorResponse>
	 */
	@ExceptionHandler(IOException.class)
	protected ResponseEntity<ErrorResponse> handleIOException(IOException e) {
		log.error("handleIOException", e);
		final ErrorResponse response = ErrorResponse.of(ErrorCode.IO_ERROR, e.getMessage());
		return new ResponseEntity<>(response, HTTP_STATUS_OK);
	}


	/**
	 * com.google.gson 내에 Exception 발생하는 경우
	 *
	 * @param e JsonParseException
	 * @return ResponseEntity<ErrorResponse>
	 */
	@ExceptionHandler(JsonParseException.class)
	protected ResponseEntity<ErrorResponse> handleJsonParseExceptionException(JsonParseException e) {
		log.error("handleJsonParseExceptionException", e);
		final ErrorResponse response = ErrorResponse.of(ErrorCode.JSON_PARSE_ERROR, e.getMessage());
		return new ResponseEntity<>(response, HTTP_STATUS_OK);
	}

	/**
	 * com.fasterxml.jackson.core 내에 Exception 발생하는 경우
	 *
	 * @param e JsonProcessingException
	 * @return ResponseEntity<ErrorResponse>
	 */
	@ExceptionHandler(JsonProcessingException.class)
	protected ResponseEntity<ErrorResponse> handleJsonProcessingException(JsonProcessingException e) {
		log.error("handleJsonProcessingException", e);
		final ErrorResponse response = ErrorResponse.of(ErrorCode.REQUEST_BODY_MISSING_ERROR, e.getMessage());
		return new ResponseEntity<>(response, HTTP_STATUS_OK);
	}

	/**
	 * BusinessException에서 발생한 에러
	 *
	 * @param e BusinessException
	 * @return ResponseEntity
	 */
	@ExceptionHandler(BusinessExceptionHandler.class)
	public ResponseEntity<ErrorResponse> handleCustomException(BusinessExceptionHandler e) {
		log.error("BusinessExceptionHandler : ", e.getMessage());
		final ErrorResponse response = ErrorResponse.of(ErrorCode.BUSINESS_EXCEPTION_ERROR, e.getMessage());
		return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(MaxUploadSizeExceededException.class)
	public ResponseEntity<String> handleMaxSizeException(MaxUploadSizeExceededException e) {
		log.error("MaxUploadSizeExceededException : " + e.getMessage());
		return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("파일 사이즈가 너무 큽니다.");
	}

	@ExceptionHandler(HttpMessageConversionException.class)
	public ResponseEntity<String> handleHttpMessageConversionException(HttpMessageConversionException e) {

		StackTraceElement[] stackTrace = e.getStackTrace();
		String errorLocation = "";
		if (stackTrace.length > 0) {
			StackTraceElement firstElement = stackTrace[0];
			errorLocation = firstElement.getClassName() + "." + firstElement.getMethodName() +
				"(" + firstElement.getFileName() + ":" + firstElement.getLineNumber() + ")";
		}

		// 예외 메시지와 발생 위치를 응답 본문에 포함시킵니다.
		String errorMessage = "Error: " + e.getMessage() + "\nLocation: " + errorLocation;
		log.error("HttpMessageConversionException : " + errorMessage);
		return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body("HttpMessageConversionException 에러");

	}

	@ExceptionHandler(AccessDeniedException.class)
	public ResponseEntity<String> handleAccessDeniedException(AccessDeniedException e) {
		log.error("AccessDeniedException : " + e.getMessage());

		return ResponseEntity.status(HttpStatus.FORBIDDEN).body("해당 페이지에 접근권한이 없습니다. 관리자에게 문의하세요");
	}


	/**
	 * [Exception] 모든 Exception 경우 발생
	 *
	 * @param e Exception
	 * @return ResponseEntity<ErrorResponse>
	 */
	@ExceptionHandler(Exception.class)
	protected final ResponseEntity<ErrorResponse> handleAllExceptions(Exception e) {
		log.error("Exception", e);
		final ErrorResponse response = ErrorResponse.of(ErrorCode.INTERNAL_SERVER_ERROR, e.getMessage());
		return new ResponseEntity<>(response, HTTP_STATUS_OK);
	}


}
