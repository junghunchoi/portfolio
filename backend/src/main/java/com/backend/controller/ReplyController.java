package com.backend.controller;

import com.backend.common.codes.SuccessCode;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.common.dto.ResultDTO;
import com.backend.dto.reply.ReplyDTO;
import com.backend.service.ReplyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 댓글 관련 HTTP 요청을 처리하는 컨트롤러 클래스.
 */
@RestController
@RequestMapping("/api/replies")
@Log4j2
@RequiredArgsConstructor
public class ReplyController {

	private final ReplyService replyService;

	/**
	 * 새 댓글을 등록하는 메서드.
	 *
	 * @param replyDTO      등록할 댓글 정보를 담은 DTO
	 * @return 등록된 댓글의 식별자를 포함하는 ResponseEntity
	 */
	@PostMapping(value = "", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ResultDTO<String>> register(@Valid @RequestBody ReplyDTO replyDTO) {
		Long rno = replyService.Register(replyDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "register reply success : " + rno));
	}

	/**
	 * 특정 게시물에 대한 댓글 목록을 조회하는 메서드.
	 *
	 * @param bno            게시물 번호
	 * @param pageRequestDTO 페이지 요청 정보를 담은 DTO
	 * @return 페이징 처리된 댓글 목록
	 */
	@GetMapping(value = "/{bno}")
	public ResponseEntity<ResultDTO<Object>> getList(@PathVariable("bno") Long bno,
		PageRequestDTO pageRequestDTO) {
		PageResponseDTO<ReplyDTO> response = replyService.getListOfBoard(bno, pageRequestDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), response));

	}

	/**
	 * 특정 댓글을 삭제하는 메서드.
	 *
	 * @param rno      삭제할 댓글의 식별자
	 * @return 삭제 성공 메시지를 포함하는 ResponseEntity
	 */
	@DeleteMapping(value = "/{rno}")
	public ResponseEntity<ResultDTO<String>> remove(@PathVariable("rno") Long rno) {
		replyService.remove(rno);

		return ResponseEntity.ok(
			ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), SuccessCode.DELETE_SUCCESS.getMessage()));
	}

}
