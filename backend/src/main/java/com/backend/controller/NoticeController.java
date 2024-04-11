package com.backend.controller;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.ResultDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.dto.notice.NoticeListDTO;
import com.backend.service.NoticeService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notice")
@Log4j2
@RequiredArgsConstructor
public class NoticeController {

	private final NoticeService noticeService;

	@GetMapping()
	public ResponseEntity<ResultDTO> list(PageRequestDTO pageRequestDTO) {
		log.info(" --- board list --- ");
		PageResponseDTO<NoticeListDTO> responseDTO =
			(PageResponseDTO<BoardListDTO>) boardService.list(pageRequestDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "Delete Board SuccessFully"));

	}
}
