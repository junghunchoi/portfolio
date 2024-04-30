package com.backend.controller;

import com.backend.common.codes.SuccessCode;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.ResultDTO;
import com.backend.dto.notice.NoticeDTO;
import com.backend.dto.notice.NoticeListDTO;
import com.backend.service.NoticeService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
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
	@DeleteMapping("/{nno}")
	public ResponseEntity<ResultDTO<String>> remove(@PathVariable("nno") Long nno) {
		noticeService.remove(nno);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), SuccessCode.DELETE_SUCCESS.getMessage()));
	}
}