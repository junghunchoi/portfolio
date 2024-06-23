package com.backend.controller;

import com.backend.dto.ResultDTO;
import com.backend.service.CommonService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.cache.annotation.Cacheable;


/**
 * REST API 컨트롤러 클래스로 공통 기능을 처리하는 컨트롤러입니다.
 */
@Tag(name = "Common", description = "공통 기능 API")
@RestController
@RequestMapping("/api/common")
@Log4j2
@RequiredArgsConstructor
public class CommonController {

	private final CommonService commonService;

	/**
	 * 메인 페이지에서 게시물 리스트를 조회합니다.
	 *
	 * @return 게시물 리스트를 포함한 응답 객체
	 */
	@Operation(summary = "메인 페이지 게시물 목록 조회",
		description = "메인 페이지에 표시될 게시물 목록을 조회합니다.")
	@ApiResponse(responseCode = "200", description = "성공",
		content = @Content(schema = @Schema(implementation = ResultDTO.class)))
	@Cacheable(cacheNames = "main")
	@GetMapping("/main")
	public ResponseEntity<ResultDTO<Object>> listMainPage() {

		Map<String, List<?>> response = commonService.listMainPage();


		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), response));
	}

}
