package com.backend.repository.search;

import com.backend.dto.board.BoardListDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BoardSearch {
	Page<BoardListDTO> searchBoardListWithReplyandFiles(String[] types,
	                                                  String keyword,
	                                                  Pageable pageable);
}
