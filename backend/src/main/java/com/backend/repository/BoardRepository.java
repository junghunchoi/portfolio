package com.backend.repository;

import com.backend.dto.BoardDTO;
import com.backend.entity.Board;
import com.backend.entity.Reply;
import com.backend.repository.search.BoardSearch;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BoardRepository extends JpaRepository<Board, Long>, BoardSearch {

	@Query("SELECT b, c.content FROM Board b JOIN b.category c WHERE b.bno = :bno")
	List<Object[]> findBoardWithCategoryNameById(@Param("bno") Long bno);
}
