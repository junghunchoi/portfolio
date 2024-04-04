package com.backend.repository;

import com.backend.entity.Board;
import com.backend.repository.search.BoardSearch;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BoardRepository extends JpaRepository<Board, Long>, BoardSearch {

	@Query("SELECT b, c FROM Board b JOIN b.category c WHERE b.bno = :bno")
	List<Object[]> findBoardWithCategoryById(@Param("bno") Long bno);

	@Query("SELECT b, f FROM Board b JOIN b.files f WHERE b.bno = :bno")
	List<Object[]> findBoardWithFileById(@Param("bno") Long bno);


}
