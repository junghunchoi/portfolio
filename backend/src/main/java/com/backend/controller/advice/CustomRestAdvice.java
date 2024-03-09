package com.backend.controller.advice;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import lombok.extern.log4j.Log4j2;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.validation.*;

//https://github.com/merge-simpson/demo-exception-handler/blob/main/src/main/java/com/example/demo/web/exception/GlobalExceptionHandler.java
//https://velog.io/@letsdev/Spring-%EC%98%88%EC%99%B8-%EC%B2%98%EB%A6%AC-%EC%89%BD%EA%B2%8C-%EA%B4%80%EC%8B%AC%EC%82%AC-%EB%82%98%EB%88%84%EA%B8%B0-Global-Exception-HandlerController-Advice
/**
 * 에러처리 및 @Valid 어노테이션 검증을 위한 클래스
 */
@RestControllerAdvice
@Log4j2
public class CustomRestAdvice {

	@ExceptionHandler(BindException.class)
	@ResponseStatus(HttpStatus.EXPECTATION_FAILED)
	public ResponseEntity<Map<String, String>> handleBindException(BindException e) {
		Map<String, String> errorMap = new HashMap<>();

		if (e.hasErrors()) {
			BindingResult bindingResult = e.getBindingResult();

			bindingResult.getFieldErrors().forEach(fieldError -> {
				errorMap.put(fieldError.getField(), fieldError.getCode());
			});
		}

		return ResponseEntity.badRequest().body(errorMap);
	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	@ResponseStatus(HttpStatus.EXPECTATION_FAILED)
	public ResponseEntity<Map<String, String>> handleFKException(Exception e) {

		Map<String, String> errorMap = new HashMap<>();

		errorMap.put("time", "" + System.currentTimeMillis());
		errorMap.put("msg", "constraint fail");
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

		return ResponseEntity.badRequest().body(errorMap);

	}
}
