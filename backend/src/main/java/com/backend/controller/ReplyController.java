package com.backend.controller;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.reply.ReplyDTO;
import com.backend.dto.ResultDTO;
import com.backend.service.ReplyService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

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
	 * @param replyDTO       등록할 댓글 정보를 담은 DTO
	 * @param bindingResult  DTO 검증 결과
	 * @return 등록된 댓글의 식별자를 포함하는 ResponseEntity
	 * @throws BindException 입력 값 검증 실패시 발생
	 */
	@ApiOperation(value = "Replies POST", notes = "POST 방식으로 댓글등록")
	@PostMapping(value = "/", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> register(@Valid @RequestBody ReplyDTO replyDTO, BindingResult bindingResult) throws BindException {

		if (bindingResult.hasErrors()) {
			throw new BindException(bindingResult);
		}
		Map<String, Long> resultMap = new HashMap<>();

		Long rno = replyService.Register(replyDTO);

		resultMap.put("rno", rno);

		return ResponseEntity.ok(rno);
	}

	/**
	 * 특정 게시물에 대한 댓글 목록을 조회하는 메서드.
	 *
	 * @param bno 게시물 번호
	 * @param pageRequestDTO 페이지 요청 정보를 담은 DTO
	 * @return 페이징 처리된 댓글 목록
	 */
	@ApiOperation(value="Replies of Board", notes = "GET 방식으로 특정 게시물 댓글목록")
	@GetMapping(value="/{bno}")
	public PageResponseDTO<ReplyDTO> getList(@PathVariable("bno") Long bno, PageRequestDTO pageRequestDTO    ) {
		PageResponseDTO<ReplyDTO> requestDTO = replyService.getListOfBoard(bno, pageRequestDTO);

		log.info("requestDTO -> " + requestDTO.toString());
		return requestDTO;

	}


	/**
	 * 특정 댓글을 삭제하는 메서드.
	 *
	 * @param rno      삭제할 댓글의 식별자
	 * @param replyDTO 삭제할 댓글의 정보를 담은 DTO
	 * @return 삭제 성공 메시지를 포함하는 ResponseEntity
	 */
	@ApiOperation(value = "Modify Reply", notes = "PUT 방식으로 특정 댓글 수정")
	@DeleteMapping(value = "/{rno}", consumes = MediaType.APPLICATION_JSON_VALUE )
	public ResponseEntity<ResultDTO<String>> remove( @PathVariable("rno") Long rno, @RequestBody ReplyDTO replyDTO ){

		replyDTO.setRno(rno); //번호를 일치시킴

		replyService.modify(replyDTO);

		Map<String, Long> resultMap = new HashMap<>();

		resultMap.put("rno", rno);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "Delete Reply SuccessFully"));
	}

}
