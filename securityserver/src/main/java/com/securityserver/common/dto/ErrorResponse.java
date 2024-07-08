package com.securityserver.common.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

/**
 * Global Exception Handler에서 발생한 에러에 대한 응답 처리를 관리
 */
@Data
@AllArgsConstructor

public class ErrorResponse {
	@Schema(
		description = "API path invoked by client"
	)
	private  String apiPath;


	private HttpStatus errorCode;


	private  String errorMessage;


	private LocalDateTime errorTime;
}