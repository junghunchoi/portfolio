package com.backend.controller;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.ResultDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.dto.notice.NoticeDTO;
import com.backend.dto.notice.NoticeListDTO;
import com.backend.service.NoticeService;
import io.swagger.annotations.ApiOperation;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notices")
@Log4j2
@RequiredArgsConstructor
public class NoticeController {

	private final NoticeService noticeService;

	@GetMapping()
	public ResponseEntity<ResultDTO> list(PageRequestDTO pageRequestDTO) {
		log.info(" --- notice list --- ");
		log.info(pageRequestDTO);
		PageResponseDTO<NoticeListDTO> responseDTO = noticeService.list(
			pageRequestDTO);

		return ResponseEntity.ok(
			ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), responseDTO));

	}

	@ApiOperation(value = "post regist board", notes = "신규 게시물 등록")
	@PostMapping("")
	public ResponseEntity<ResultDTO> register(@RequestBody @Valid NoticeDTO noticeDTO)
		throws BindException {
		log.info(" --- notice register --- ");
		log.info(noticeDTO);

		Long bno = noticeService.register(noticeDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), bno));
	}

	@GetMapping("/{nno}")
	public ResponseEntity<ResultDTO> read(@PathVariable("nno") Long nno) {
		log.info(" --- notice read --- ");
		NoticeDTO noticeDTO = noticeService.readOne(nno);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), noticeDTO));
	}

	@ApiOperation(value = "modify board by bno", notes = "특정 게시물 수정")
	@PutMapping()
	public ResponseEntity<?> modify(@RequestBody @Valid NoticeDTO noticeDTO,
		BindingResult bindingResult) {
		log.info(" --- notice modify --- ");

		if (bindingResult.hasErrors()) {
			log.error("has errors.......");

			return ResponseEntity.badRequest().body("wrong parameter");
		}
		log.info(noticeDTO);
		noticeService.modify(noticeDTO);

		return ResponseEntity.ok(
			ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "Modify Notice SuccessFully"));
	}

	@ApiOperation(value = "delete board by bno", notes = "특정 게시물 삭제")
	@DeleteMapping("/{nno}")
	public ResponseEntity<?> remove(@PathVariable("nno") Long nno) {
		log.info("--- notice delete ---");

		noticeService.remove(nno);

		return ResponseEntity.ok(
			ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "Delete Board SuccessFully"));

	}
}
