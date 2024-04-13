package com.backend.repository.board;

import com.backend.entity.Board;
import com.backend.repository.board.search.BoardSearch;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BoardRepository extends JpaRepository<Board, Long>, BoardSearch {

	@Query("SELECT b, c FROM Board b JOIN b.category c WHERE b.bno = :bno")
	List<Object[]> findBoardWithCategoryById(@Param("bno") Long bno);

	@Query("SELECT b, f FROM Board b JOIN b.files f WHERE b.bno = :bno")
	List<Object[]> findBoardWithFileById(@Param("bno") Long bno);

	@Query("SELECT b from Board b where b.boardType = 1 order by b.bno")
	List<Board> findBoardsTop5(Pageable pageable);

	@Query("SELECT b from Board b where b.boardType = 2 order by b.bno desc")
	List<Board> findGalleiesTop5(Pageable pageable);
}
