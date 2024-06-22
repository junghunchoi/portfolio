package com.backend.common.dto;
import com.backend.common.codes.ErrorCode;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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