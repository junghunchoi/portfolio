package com.backend.controller;

import com.backend.common.codes.SuccessCode;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.common.dto.ResultDTO;
import com.backend.dto.notice.NoticeDTO;
import com.backend.dto.notice.NoticeListDTO;
import com.backend.service.NoticeService;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST API 컨트롤러 클래스로 공지사항 기능을 처리하는 컨트롤러입니다.
 */
@Tag(name = "CRUD REST APIs for Notices", description = "공지글 관련 API")
@RestController
@RequestMapping("/api/notices")
@Log4j2
@RequiredArgsConstructor
public class NoticeController {

	private final NoticeService noticeService;

	/**
	 * 공지사항 리스트를 조회합니다.
	 *
	 * @param pageRequestDTO 페이지 요청 정보
	 * @return 공지사항 리스트를 포함한 응답 객체
	 */
	@Operation(summary = "공지사항 목록 조회", description = "페이지 요청 정보를 기반으로 공지사항 목록을 조회합니다.")
	@ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = PageResponseDTO.class)))
	@Cacheable(cacheNames = "noticeList")
	@GetMapping()
	public ResponseEntity<ResultDTO<Object>> list(PageRequestDTO pageRequestDTO) {
		PageResponseDTO<NoticeListDTO> responseDTO = noticeService.list(pageRequestDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), responseDTO));
	}

	/**
	 * 신규 공지사항을 등록합니다.
	 *
	 * @param noticeDTO 등록할 공지사항 정보
	 * @return 등록된 공지사항의 식별자를 포함한 응답 객체
	 * @throws BindException 유효성 검사 오류 시 발생
	 */
	@Operation(summary = "공지사항 등록", description = "새로운 공지사항을 등록합니다.")
	@ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
	@PostMapping("")
	public ResponseEntity<ResultDTO<Object>> register(@RequestBody @Valid NoticeDTO noticeDTO) throws BindException {
		Long bno = noticeService.register(noticeDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), bno));
	}

	/**
	 * 특정 공지사항을 조회합니다.
	 *
	 * @param nno 조회할 공지사항의 식별자
	 * @return 조회된 공지사항 정보를 포함한 응답 객체
	 */
	@Operation(summary = "공지사항 조회", description = "특정 공지사항을 조회합니다.")
	@ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
	@GetMapping("/{nno}")
	public ResponseEntity<ResultDTO<Object>> read(@PathVariable("nno") Long nno) {
		NoticeDTO noticeDTO = noticeService.readOne(nno);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), noticeDTO));
	}

	/**
	 * 특정 공지사항을 수정합니다.
	 *
	 * @param noticeDTO 수정할 공지사항 정보
	 * @return 수정 결과 메시지를 포함한 응답 객체
	 */
	@Operation(summary = "공지사항 수정", description = "특정 공지사항을 수정합니다.")
	@ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
	@PatchMapping("")
	public ResponseEntity<ResultDTO<String>> modify(@RequestBody @Valid NoticeDTO noticeDTO) {
		noticeService.modify(noticeDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), SuccessCode.UPDATE_SUCCESS.getMessage()));
	}

	/**
	 * 특정 공지사항을 삭제합니다.
	 *
	 * @param nno 삭제할 공지사항의 식별자
	 * @return 삭제 결과 메시지를 포함한 응답 객체
	 */
	@Operation(summary = "공지사항 삭제", description = "특정 공지사항을 삭제합니다.")
	@ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
	@DeleteMapping("/{nno}")
	public ResponseEntity<ResultDTO<String>> remove(@PathVariable("nno") Long nno) {
		noticeService.remove(nno);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), SuccessCode.DELETE_SUCCESS.getMessage()));
	}
}