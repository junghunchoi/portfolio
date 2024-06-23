package com.backend.controller;

import com.backend.common.codes.SuccessCode;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.common.dto.ResultDTO;
import com.backend.dto.help.HelpDTO;
import com.backend.dto.help.HelpListDTO;
import com.backend.service.HelpService;
import com.backend.utils.JWTUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST API 컨트롤러 클래스로 문의글 관련 HTTP 요청을 처리합니다.
 */
@Tag(name = "CRUD REST APIs for Help", description = "문의글 관리 API")
@RestController
@RequestMapping("/api/helps")
@Log4j2
@RequiredArgsConstructor
public class HelpController {

	private final HelpService helpService;
	private final JWTUtil jwtUtil;


	/**
	 * 문의글 리스트를 조회합니다.
	 *
	 * @param pageRequestDTO 페이지 요청 정보
	 * @return 문의글 리스트를 포함한 응답 객체
	 */
	@Operation(summary = "문의글 목록 조회", description = "페이지 요청 정보를 기반으로 문의글 목록을 조회합니다.")
	@ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = PageResponseDTO.class)))
	@Cacheable(cacheNames = "helpList")
	@GetMapping()
	public ResponseEntity<ResultDTO<Object>> list(PageRequestDTO pageRequestDTO) {
		PageResponseDTO<HelpListDTO> responseDTO =
			helpService.list(pageRequestDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), responseDTO));
	}

	/**
	 * 문의글을 등록합니다.
	 *
	 * @param helpDTO 등록할 문의글 정보
	 * @return 등록된 문의글의 식별자를 포함한 응답 객체
	 * @throws BindException 유효성 검사 오류 시 발생
	 */
	@Operation(summary = "문의글 등록", description = "새로운 문의글을 등록합니다.")
	@ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = Long.class)))
	@PostMapping("")
	public ResponseEntity<ResultDTO<Long>> register(@RequestBody @Valid HelpDTO helpDTO)
		throws BindException {
		Long bno = helpService.register(helpDTO);


		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), bno));
	}


	/**
	 * 특정 문의글을 조회합니다.
	 *
	 * @param bno 조회할 문의글의 식별자
	 * @return 조회된 문의글 정보를 포함한 응답 객체
	 */
	@Operation(summary = "문의글 조회", description = "특정 문의글을 조회합니다.")
	@ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = HelpDTO.class)))
	@GetMapping("/{bno}")
	public ResponseEntity<ResultDTO<Object>> read(@PathVariable("bno") Long bno, @RequestHeader("Authorization") String authorizationHeader) {

		String token = authorizationHeader.substring(7); // "Bearer " 부분 제거
		String username = jwtUtil.getUsernameFromToken(token);
		HelpDTO helpDTO = helpService.readOne(bno, username);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), helpDTO));
	}

	/**
	 * 문의글을 수정합니다.
	 *
	 * @param helpDTO 수정할 문의글 정보
	 * @return 수정 결과 메시지를 포함한 응답 객체
	 */
	@Operation(summary = "문의글 수정", description = "문의글을 수정합니다.")
	@ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
	@PatchMapping("")
	public ResponseEntity<ResultDTO<String>> modify( @RequestBody @Valid HelpDTO helpDTO) {
		helpService.modify(helpDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(),helpDTO.getHno() + "번 문의글글 수정" ));
	}

	/**
	 * 문의글을 삭제합니다.
	 *
	 * @param hno 삭제할 문의글의 식별자
	 * @return 삭제 결과 메시지를 포함한 응답 객체
	 */
	@Operation(summary = "문의글 삭제", description = "문의글을 삭제합니다.")
	@ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
	@DeleteMapping("/{hno}")
	public ResponseEntity<ResultDTO<String>> remove(@PathVariable("hno") Long hno) {
		helpService.remove(hno);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), SuccessCode.DELETE_SUCCESS.getMessage()));
	}
}
