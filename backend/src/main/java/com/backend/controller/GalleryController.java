package com.backend.controller;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.ResultDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.dto.board.GalleryListDTO;
import com.backend.service.GalleryService;
import io.swagger.annotations.ApiOperation;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
@RequestMapping("/api/galleries")
@Log4j2
@RequiredArgsConstructor
public class GalleryController {

	private final GalleryService galleryService;

	/**
	 * 페이지 요청 정보를 기반으로 게시물 목록과 각 게시물의 댓글 수를 조회합니다.
	 *
	 * @param pageRequestDTO 페이지네이션 정보를 담은 DTO
	 * @return 페이징 처리된 게시물 목록과 상태 코드를 포함하는 ResponseEntity 객체
	 */
	@ApiOperation(value = "get galleryList", notes = "게시물을 리스트로 조회")
	@GetMapping()
	public ResponseEntity<ResultDTO<Object>> list(PageRequestDTO pageRequestDTO) {
		log.info(" --- gallery list --- ");
		PageResponseDTO<GalleryListDTO> responseDTO =
			galleryService.list(pageRequestDTO);


		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), responseDTO));
	}


	@ApiOperation(value = "post regist board", notes = "신규 게시물 등록")
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ResultDTO<Long>> register(@RequestBody BoardDTO boardDTO, BindingResult bindingResult)
		throws BindException {
		log.info(" --- gallery register --- ");
		log.info(boardDTO);

		Long bno = galleryService.register(boardDTO);


		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), bno));
	}


	@ApiOperation(value = "get board by bno", notes = "특정 게시물 조회")
	@GetMapping("/{bno}")
	public ResponseEntity<BoardDTO> read(@PathVariable("bno") Long bno) {
		log.info(" --- gallery read --- ");
		BoardDTO boardDTO = galleryService.readOne(bno);

		return ResponseEntity.ok(boardDTO);
	}

	@ApiOperation(value = "modify board by bno", notes = "특정 게시물 수정")
	@PutMapping()
	public ResponseEntity<?> modify(@RequestBody @Valid BoardDTO boardDTO,
		BindingResult bindingResult) {
		log.info(" --- gallery modify --- ");
		log.info(boardDTO);

		if (bindingResult.hasErrors()) {
			return ResponseEntity.badRequest().body("wrong parameter");
		}

		galleryService.modify(boardDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "Modify Board SuccessFully"));
	}


	@ApiOperation(value = "delete board by bno", notes = "특정 게시물 삭제")
	@DeleteMapping("/{bno}")
	public ResponseEntity<ResultDTO> remove(@PathVariable("bno") Long bno) {
		log.info("--- gallery delete ---");

		galleryService.remove(bno);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "Delete Board SuccessFully"));

	}

}
