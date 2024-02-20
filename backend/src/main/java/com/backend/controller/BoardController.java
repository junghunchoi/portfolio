package com.backend.controller;

import com.backend.dto.BoardDTO;
import com.backend.dto.BoardListReplyCountDTO;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/board")
@Log4j2
@RequiredArgsConstructor
public class BoardController {

	@Value("${junghun.workbook.upload.path}")
	private String uploadPath;

	private final BoardService boardService;

	//GET /boards
	@GetMapping("/list")
	public ResponseEntity<PageResponseDTO<BoardListReplyCountDTO>> list(PageRequestDTO pageRequestDTO) {

		PageResponseDTO<BoardListReplyCountDTO> responseDTO =
				boardService.listWithReplyCount(pageRequestDTO);

		return ResponseEntity.ok(responseDTO);
	}

	//POST /boards
	//@Valid -> DTO에서 설정한 제약을 검증하는 어노테이션
	//BindingResult -> 유효성 검사를 위한 클래스로 아래 if문을 통해 검증한다.
	//RedirectAttributes -> 리다이렉트 할때 파라미터를 던지기 위한 클래스
	@PostMapping("/register")
	public String registerPost(@Valid BoardDTO boardDTO, BindingResult bindingResult, RedirectAttributes redirectAttributes) {
		if (bindingResult.hasErrors()) {
			log.info("게시물 등록 에러...");
			redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());
			return "redirect:/board/register";
		}

		log.info(boardDTO);

		Long bno = boardService.register(boardDTO);

		redirectAttributes.addFlashAttribute("result", bno);

		return "redirect:/board/list";
	}

	//GET /boards/{pk}
	@GetMapping({"/read", "/modify"})
	public ResponseEntity<BoardDTO> read(Long bno, PageRequestDTO pageRequestDTO, Model model) {

		BoardDTO boardDTO = boardService.readOne(bno);

//		model.addAttribute("dto", boardDTO);

		return ResponseEntity.ok(boardDTO);
	}

	//PUT /boards/{pk}
	@PostMapping("/modify")
	public String modify(@Valid BoardDTO boardDTO,
	                     BindingResult bindingResult,
	                     PageRequestDTO pageRequestDTO,
	                     RedirectAttributes redirectAttributes) {

		if (bindingResult.hasErrors()) {
			log.info("has errors.......");

			String link = pageRequestDTO.getLink();

			redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

			redirectAttributes.addAttribute("bno", boardDTO.getBno());

			return "redirect:/board/modify?" + link;
		}

		boardService.modify(boardDTO);

		redirectAttributes.addFlashAttribute("result", "modified");

		redirectAttributes.addAttribute("bno", boardDTO.getBno());

		return "redirect:/board/read";
	}

	@PostMapping("/remove")
	public String remove(BoardDTO boardDTO, RedirectAttributes redirectAttributes) {

		Long bno = boardDTO.getBno();
		log.info("remove post.. " + bno);

		boardService.remove(bno);

		redirectAttributes.addFlashAttribute("result", "removed");

		return "redirect:/board/list";

	}

}
