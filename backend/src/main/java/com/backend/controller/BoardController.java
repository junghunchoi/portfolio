package com.backend.controller;

import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.BoardListReplyCountDTO;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.service.BoardService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/boards")
@Log4j2
@RequiredArgsConstructor
public class BoardController {

	private final BoardService boardService;

	@ApiOperation(value = "get boardlist", notes = "게시물을 리스트로 조회")
	@GetMapping()
	public ResponseEntity<PageResponseDTO<BoardListReplyCountDTO>> list(PageRequestDTO pageRequestDTO) {

		PageResponseDTO<BoardListReplyCountDTO> responseDTO =
				boardService.listWithReplyCount(pageRequestDTO);

		log.info(pageRequestDTO);
		return ResponseEntity.ok(responseDTO);
	}

	//POST /boards
	//@Valid -> DTO에서 설정한 제약을 검증하는 어노테이션
	//BindingResult -> 유효성 검사를 위한 클래스로 아래 if문을 통해 검증한다.
	//RedirectAttributes -> 리다이렉트 할때 파라미터를 던지기 위한 클래스
	@ApiOperation(value = "post regist board", notes = "신규 게시물 등록")
	@PostMapping("")
	public ResponseEntity<?> register(@RequestBody BoardDTO boardDTO, BindingResult bindingResult) {

		log.info(boardDTO);
		if (bindingResult.hasErrors()) {
			log.info("게시물 등록 에러...");
		}


		Long bno = boardService.register(boardDTO);


		return ResponseEntity.ok(bno);
	}

	@ApiOperation(value = "get board by bno", notes = "특정 게시물 조회")
	@GetMapping("/{bno}")
	public ResponseEntity<BoardDTO> read(@PathVariable("bno") Long bno) {

		BoardDTO boardDTO = boardService.readOne(bno);

		log.info("readcontroller"
			+ boardDTO);

		return ResponseEntity.ok(boardDTO);
	}

	@ApiOperation(value = "modify board by bno", notes = "특정 게시물 수정")
	@PutMapping()
	public ResponseEntity<?> modify(@RequestBody BoardDTO boardDTO,
	                     BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			log.info("has errors.......");

			return ResponseEntity.badRequest().body("잘못된 요청입니다");
		}
		log.info(boardDTO);
		boardService.modify(boardDTO);

		return ResponseEntity.ok(boardDTO);
	}

	@ApiOperation(value = "delete board by bno", notes = "특정 게시물 삭제")
	@DeleteMapping("/{bno}")
	public ResponseEntity<?> remove(@PathVariable("bno") Long bno) {

		log.info("remove post.. " + bno);

		boardService.remove(bno);

		return ResponseEntity.ok(bno);

	}

}
