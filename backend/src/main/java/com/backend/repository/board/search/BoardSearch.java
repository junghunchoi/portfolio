package com.backend.repository.board.search;

import com.backend.dto.board.BoardListDTO;
import com.backend.dto.board.GalleryListDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BoardSearch {

	Page<BoardListDTO> searchBoardListWithReplyandFiles(String[] types, String keyword,
		String order, String sort, Pageable pageable);

	Page<GalleryListDTO> searchGalleryList(String[] types, String keyword,
		String order, String sort, Pageable pageable);
}
