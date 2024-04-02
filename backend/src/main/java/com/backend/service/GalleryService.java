package com.backend.service;

import com.backend.dto.board.BoardDTO;
import org.springframework.data.domain.Pageable;

public interface GalleryService {

	Long getGalleryList(String[] types, String keyword,String sort, String order, Pageable pageable)

	Long register(BoardDTO boardDTO);

	BoardDTO readOne(Long bno);

	void modify(BoardDTO boardDTO);

	void remove(Long bno);
}
