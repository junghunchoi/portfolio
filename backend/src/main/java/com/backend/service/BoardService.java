package com.backend.service;

import com.backend.dto.board.BoardDTO;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.entity.Board;

import java.util.List;
import java.util.Map;

public interface BoardService {

	Long register(BoardDTO boardDTO);

	BoardDTO readOne(Long bno);

	void modify(BoardDTO boardDTO);

	void remove(Long bno);

	/**
	 * @param pageRequestDTO
	 * @return PageResponseDTO
	 */
	PageResponseDTO<BoardListDTO> list(PageRequestDTO pageRequestDTO);

	List<Map<String, Integer>> getMainPageRecords();

  PageResponseDTO<BoardListDTO> readAllInfiniteScroll(PageRequestDTO pageRequestDTO);
}
