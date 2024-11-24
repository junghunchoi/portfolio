package com.backend.repository;

import com.backend.entity.Board;
import com.backend.repository.board.search.BoardSearch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestrospectRepository extends JpaRepository<Board, Long>, BoardSearch {

}
