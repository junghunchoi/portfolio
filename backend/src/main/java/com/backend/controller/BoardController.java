package com.backend.controller;

import com.backend.dto.ResultDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.BoardListReplyCountDTO;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.service.BoardService;
import io.swagger.annotations.ApiOperation;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

/**
 * REST API 컨트롤러 클래스로 게시판 관련 HTTP 요청을 처리합니다.
 */
@RestController
@RequestMapping("/api/boards")
@Log4j2
@RequiredArgsConstructor
public class BoardController {

	private final BoardService boardService;

	/**
	 * 페이지 요청 정보를 기반으로 게시물 목록과 각 게시물의 댓글 수를 조회합니다.
	 *
	 * @param pageRequestDTO 페이지네이션 정보를 담은 DTO
	 * @return 페이징 처리된 게시물 목록과 상태 코드를 포함하는 ResponseEntity 객체
	 */
	@ApiOperation(value = "get boardlist", notes = "게시물을 리스트로 조회")
	@GetMapping()
	public ResponseEntity<?> list(PageRequestDTO pageRequestDTO) {
		log.info(" --- board list --- ");

		PageResponseDTO<BoardListReplyCountDTO> responseDTO =
			boardService.listWithReplyCount(pageRequestDTO);

		return ResponseEntity.ok(responseDTO);
	}

	/**
	 * 새 게시물을 등록합니다. 요청 본문에서 BoardDTO 객체를 받아 처리하며, 유효성 검사 후 게시물을 저장합니다.
	 *
	 * @param boardDTO      게시물 정보를 담은 DTO
	 * @param bindingResult 요청 데이터의 유효성 검사 결과
	 * @return 생성된 게시물의 번호와 상태 코드를 포함하는 ResponseEntity 객체
	 */
	//@Valid -> DTO에서 설정한 제약을 검증하는 어노테이션
	//BindingResult -> 유효성 검사를 위한 클래스로 아래 if문을 통해 검증한다.
	@ApiOperation(value = "post regist board", notes = "신규 게시물 등록")
	@PostMapping("")
	public ResponseEntity<?> register(@RequestBody @Valid BoardDTO boardDTO, BindingResult bindingResult) {
		log.info(" --- board register --- ");
		if (bindingResult.hasErrors()) {
			log.info("게시물 등록 에러...");
			return ResponseEntity.badRequest().body("wrong parameter");
		}

		Long bno = boardService.register(boardDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "Insert Board SuccessFully"));
	}

	/**
	 * 특정 게시물 번호를 기준으로 게시물을 조회합니다.
	 *
	 * @param bno 게시물 번호
	 * @return 조회된 게시물 정보와 상태 코드를 포함하는 ResponseEntity 객체
	 */
	@ApiOperation(value = "get board by bno", notes = "특정 게시물 조회")
	@GetMapping("/{bno}")
	public ResponseEntity<BoardDTO> read(@PathVariable("bno") Long bno) {
		log.info(" --- board read --- ");
		BoardDTO boardDTO = boardService.readOne(bno);

		return ResponseEntity.ok(boardDTO);
	}

	/**
	 * 특정 게시물을 수정합니다. 요청 본문에서 수정할 게시물 정보를 받아 처리합니다.
	 *
	 * @param boardDTO      수정할 게시물 정보
	 * @param bindingResult 요청 데이터의 유효성 검사 결과
	 * @return 수정된 게시물 정보와 상태 코드를 포함하는 ResponseEntity 객체
	 */
	@ApiOperation(value = "modify board by bno", notes = "특정 게시물 수정")
	@PutMapping()
	public ResponseEntity<?> modify(@RequestBody @Valid BoardDTO boardDTO,
		BindingResult bindingResult) {
		log.info(" --- board modify --- ");

		if (bindingResult.hasErrors()) {
			log.error("has errors.......");

			return ResponseEntity.badRequest().body("wrong parameter");
		}
		log.info(boardDTO);
		boardService.modify(boardDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "Modify Board SuccessFully"));
	}

	/**
	 * 특정 게시물을 삭제합니다. 게시물 번호를 기준으로 게시물을 찾아 삭제 처리합니다.
	 *
	 * @param bno 삭제할 게시물 번호
	 * @return 삭제 처리된 게시물 번호와 상태 코드를 포함하는 ResponseEntity 객체
	 */
	@ApiOperation(value = "delete board by bno", notes = "특정 게시물 삭제")
	@DeleteMapping("/{bno}")
	public ResponseEntity<?> remove(@PathVariable("bno") Long bno) {
		log.info("--- board delete ---");
		try {
			boardService.remove(bno);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body("fail remove board : " + bno + " check log");
		}
		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "Delete Board SuccessFully"));

	}

}
