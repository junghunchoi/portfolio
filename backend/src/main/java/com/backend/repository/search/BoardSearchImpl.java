package com.backend.repository.search;

import com.backend.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class BoardSearchImpl extends QuerydslRepositorySupport implements BoardSearch {


	public BoardSearchImpl() {
		super(Board.class);
	}

	@Override
	public Page<Board> search(Pageable pageable) {
		return null;
	}
}
