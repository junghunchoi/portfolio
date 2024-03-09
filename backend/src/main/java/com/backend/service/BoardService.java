package com.backend.service;

import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.BoardListReplyCountDTO;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
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
	PageResponseDTO<BoardListReplyCountDTO> listWithReplyCount(PageRequestDTO pageRequestDTO);


	/**
	 * dto -> entity로 변환하는 메소드
	 * @param boardDTO
	 * @return Board
	 */
	default Board dtoToEntity(BoardDTO boardDTO){

		Board board = Board.builder()
		                   .bno(boardDTO.getBno())
		                   .title(boardDTO.getTitle())
		                   .content(boardDTO.getContent())
		                   .writer(boardDTO.getWriter())
		                   .category(boardDTO.getCategory())
		                   .build();

		if(boardDTO.getFileNames() != null){
			boardDTO.getFileNames().forEach(fileName -> {
				String[] arr = fileName.split("_");
			});
		}
		return board;
	}

	/**
	 * entity -> dto 변환 메소드
	 * @param board
	 * @return BoardDTO
	 */
	default BoardDTO entityToDTO(Board board) {

		BoardDTO boardDTO = BoardDTO.builder()
				.bno(board.getBno())
				.title(board.getTitle())
				.content(board.getContent())
				.writer(board.getWriter())
				.regDate(board.getRegDate())
				.modDate(board.getModDate())
				.build();

		return boardDTO;
	}
}
