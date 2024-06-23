package com.backend.controller;

import com.backend.common.codes.SuccessCode;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.ResultDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.service.BoardService;
import javax.validation.Valid;
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
 * REST API 컨트롤러 클래스로 자유 게시판 관련 HTTP 요청을 처리합니다.
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
	@Cacheable(cacheNames = "boardList")
	@GetMapping()
	public ResponseEntity<ResultDTO<Object>> list(PageRequestDTO pageRequestDTO) {
		PageResponseDTO<BoardListDTO> responseDTO = boardService.list(pageRequestDTO);

		return ResponseEntity.ok(
			ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), responseDTO));
	}

	/**
	 * 새 게시물을 등록합니다. 요청 본문에서 BoardDTO 객체를 받아 처리하며, 유효성 검사 후 게시물을 저장합니다.
	 *
	 * @param boardDTO 게시물 정보를 담은 DTO
	 * @return 생성된 게시물의 번호와 상태 코드를 포함하는 ResponseEntity 객체
	 */
	@PostMapping("")
	public ResponseEntity<ResultDTO<Long>> register(@Valid @RequestBody BoardDTO boardDTO)
		throws BindException {
		Long bno = boardService.register(boardDTO);
		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), bno));
	}

	/**
	 * 특정 게시물 번호를 기준으로 게시물을 조회합니다.
	 *
	 * @param bno 게시물 번호
	 * @return 조회된 게시물 정보와 상태 코드를 포함하는 ResponseEntity 객체
	 */
	@GetMapping("/{bno}")
	public ResponseEntity<ResultDTO<Object>> read(@PathVariable("bno") Long bno) {
		BoardDTO boardDTO = boardService.readOne(bno);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), boardDTO));
	}

	/**
	 * 특정 게시물을 수정합니다. 요청 본문에서 수정할 게시물 정보를 받아 처리합니다.
	 *
	 * @param boardDTO 수정할 게시물 정보
	 * @return 수정된 게시물 정보와 상태 코드를 포함하는 ResponseEntity 객체
	 */
	@PatchMapping("")
	public ResponseEntity<ResultDTO<String>> modify(@Valid @RequestBody BoardDTO boardDTO) {
		boardService.modify(boardDTO);

		return ResponseEntity.ok(
			ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), SuccessCode.UPDATE_SUCCESS.getMessage()));
	}

	/**
	 * 특정 게시물을 삭제합니다. 게시물 번호를 기준으로 게시물을 찾아 삭제 처리합니다.
	 *
	 * @param bno 삭제할 게시물 번호
	 * @return 삭제 처리된 게시물 번호와 상태 코드를 포함하는 ResponseEntity 객체
	 */
	@DeleteMapping("/{bno}")
	public ResponseEntity<ResultDTO<String>> remove(@PathVariable("bno") Long bno) {
		boardService.remove(bno);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(),
			SuccessCode.DELETE_SUCCESS.getMessage()));

	}

}
