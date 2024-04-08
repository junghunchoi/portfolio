package com.backend.controller;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.ResultDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.dto.help.HelpDTO;
import com.backend.service.HelpService;
import io.swagger.annotations.ApiOperation;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Conditional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
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
@RequestMapping("/api/helps")
@Log4j2
@RequiredArgsConstructor
public class HelpController {

	private final HelpService helpService;


//	@PreAuthorize("hasRole('ROLE_USER')")
	@GetMapping()
	public ResponseEntity<?> list(PageRequestDTO pageRequestDTO) {
		log.info(" --- board list --- ");
		PageResponseDTO<BoardListDTO> responseDTO =
			(PageResponseDTO<BoardListDTO>) helpService.list(pageRequestDTO);

		return ResponseEntity.ok(responseDTO);
	}


	@PostMapping("")
	public ResponseEntity<ResultDTO> register(@RequestBody @Valid HelpDTO helpDTO, BindingResult bindingResult)
		throws BindException {
		log.info(" --- board register --- ");
		log.info(helpDTO);
		if (bindingResult.hasErrors()) {
			throw new BindException(bindingResult);
		}

		Long bno = helpService.register(helpDTO);


		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), bno));
	}


	@GetMapping("/{bno}")
	public ResponseEntity<HelpDTO> read(@PathVariable("bno") Long bno) {
		log.info(" --- board read --- ");
		HelpDTO helpDTO = helpService.readOne(bno);

		return ResponseEntity.ok(helpDTO);
	}


	@PutMapping()
	public ResponseEntity<?> modify(@RequestBody @Valid HelpDTO helpDTO,
		BindingResult bindingResult) {
		log.info(" --- board modify --- ");

		if (bindingResult.hasErrors()) {
			log.error("has errors.......");

			return ResponseEntity.badRequest().body("wrong parameter");
		}
		log.info(helpDTO);
		helpService.modify(helpDTO);

		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "Modify Board SuccessFully"));
	}


	@DeleteMapping("/{bno}")
	public ResponseEntity<?> remove(@PathVariable("bno") Long bno) {
		log.info("--- board delete ---");
		try {
			helpService.remove(bno);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body("fail remove board : " + bno + " check log");
		}
		return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), "Delete Board SuccessFully"));

	}


}
