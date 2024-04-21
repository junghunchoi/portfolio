package com.backend.controller;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.ResultDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.dto.help.HelpDTO;
import com.backend.dto.help.HelpListDTO;
import com.backend.service.HelpService;
import io.swagger.annotations.ApiOperation;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Conditional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST API 컨트롤러 클래스로 문의글 관련 HTTP 요청을 처리합니다.
 */
@RestController
@RequestMapping("/api/helps")
@Log4j2
@RequiredArgsConstructor
public class HelpController {

	private final HelpService helpService;


	/**
	 * 문의글 리스트를 조회합니다.
	 *
	 * @param pageRequestDTO 페이지 요청 정보
	 * @return 문의글 리스트를 포함한 응답 객체
	 */
	@GetMapping()
	public ResponseEntity<ResultDTO<Object>> list(PageRequestDTO pageRequestDTO) {
		log.info(" --- board list --- ");
		PageResponseDTO<HelpListDTO> responseDTO =
			helpService.list(pageRequestDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), responseDTO));
	}

	/**
	 * 문의글을 등록합니다.
	 *
	 * @param helpDTO 등록할 문의글 정보
	 * @return 등록된 문의글의 식별자를 포함한 응답 객체
	 * @throws BindException 유효성 검사 오류 시 발생
	 */
	@PostMapping("")
	public ResponseEntity<ResultDTO<Long>> register(@RequestBody @Valid HelpDTO helpDTO)
		throws BindException {
		log.info(" --- help register --- ");
		log.info(helpDTO);
		Long bno = helpService.register(helpDTO);


		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), bno));
	}


	/**
	 * 특정 문의글을 조회합니다.
	 *
	 * @param bno 조회할 문의글의 식별자
	 * @return 조회된 문의글 정보를 포함한 응답 객체
	 */
	@GetMapping("/{bno}")
	public ResponseEntity<ResultDTO<Object>> read(@PathVariable("bno") Long bno) {
		log.info(" --- help read --- ");
		HelpDTO helpDTO = helpService.readOne(bno);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), helpDTO));
	}

	/**
	 * 문의글을 수정합니다.
	 *
	 * @param helpDTO 수정할 문의글 정보
	 * @return 수정 결과 메시지를 포함한 응답 객체
	 */
	@PatchMapping("")
	public ResponseEntity<ResultDTO<String>> modify(@RequestBody @Valid HelpDTO helpDTO) {
		log.info(" ---help modify --- ");
		log.info(helpDTO);
		helpService.modify(helpDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(),helpDTO.getHno() + "번 문의글글 수정" ));
	}

	/**
	 * 문의글을 삭제합니다.
	 *
	 * @param hno 삭제할 문의글의 식별자
	 * @return 삭제 결과 메시지를 포함한 응답 객체
	 */
	@DeleteMapping("/{hno}")
	public ResponseEntity<ResultDTO<String>> remove(@PathVariable("hno") Long hno) {
		log.info("--- board delete ---");
		helpService.remove(hno);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "Delete Help SuccessFully"));
	}
}
