package com.backend.repository.search;

import com.backend.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BoardSearch {
	Page<Board> search(Pageable pageable);
}
