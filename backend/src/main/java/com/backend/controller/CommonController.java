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

@RestController
@RequestMapping("/api/common")
@Log4j2
@RequiredArgsConstructor
public class CommonController {

	private final CommonService commonService;

	@ApiOperation(value = "get mainlist", notes = "게시물을 리스트로 조회")
	@GetMapping("/main")
	public ResponseEntity<ResultDTO> listMainPage() {

		Map<String, List<?>> response = commonService.listMainPage();


		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), response));
	}

}
