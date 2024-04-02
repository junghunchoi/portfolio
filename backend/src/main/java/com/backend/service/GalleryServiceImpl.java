package com.backend.service;

import com.backend.dto.board.BoardDTO;
import org.springframework.data.domain.Pageable;

public class GalleryServiceImpl implements GalleryService {

	@Override
	public Long getGalleryList(String[] types, String keyword, String sort, String order,
		Pageable pageable) {
		return null;
	}

	@Override
	public Long register(BoardDTO boardDTO) {
		return null;
	}

	@Override
	public BoardDTO readOne(Long bno) {
		return null;
	}

	@Override
	public void modify(BoardDTO boardDTO) {

	}

	@Override
	public void remove(Long bno) {

	}
}
