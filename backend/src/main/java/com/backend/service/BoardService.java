package com.backend.service;

import com.backend.dto.board.BoardDTO;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.entity.Board;

public interface BoardService {

	Long register(BoardDTO boardDTO);

	BoardDTO readOne(Long bno);

	void modify(BoardDTO boardDTO);

	void remove(Long bno);

	/**
	 * 게시물별 댓글의 갯수를 함께 반환
	 * 추후 썸네일, 파일여부 등 추가시 변경해야함
	 * @param pageRequestDTO
	 * @return PageResponseDTO
	 */
	PageResponseDTO<BoardListDTO> list(PageRequestDTO pageRequestDTO);

}
