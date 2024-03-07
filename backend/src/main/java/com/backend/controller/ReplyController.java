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

@RestController
@RequestMapping("/api/replies")
@Log4j2
@RequiredArgsConstructor
public class ReplyController {

	private final ReplyService replyService;

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

	@ApiOperation(value="Replies of Board", notes = "GET 방식으로 특정 게시물 댓글목록")
	@GetMapping(value="/{bno}")
	public PageResponseDTO<ReplyDTO> getList(@PathVariable("bno") Long bno, PageRequestDTO pageRequestDTO    ) {
		PageResponseDTO<ReplyDTO> requestDTO = replyService.getListOfBoard(bno, pageRequestDTO);

		log.info("requestDTO -> " + requestDTO.toString());
		return requestDTO;

	}


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
