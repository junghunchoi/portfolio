package com.backend.controller;

import com.backend.dto.ResultDTO;
import com.backend.service.CommonService;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



/**
 * REST API 컨트롤러 클래스로 공통 기능을 처리하는 컨트롤러입니다.
 */
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
	@ApiOperation(value = "get main list", notes = "게시물을 리스트로 조회")
	@GetMapping("/main")
	public ResponseEntity<ResultDTO<Object>> listMainPage() {

		Map<String, List<?>> response = commonService.listMainPage();


		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), response));
	}

}
