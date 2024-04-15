package com.backend.repository.board;

import com.backend.dto.board.BoardListDTO;
import com.backend.dto.board.BoardMainDTO;
import com.backend.dto.board.GalleryListDTO;
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

	@Query("SELECT new com.backend.dto.board.BoardMainDTO(b.bno, b.title, COUNT(r.rno) , b.regDate) from Board b LEFT JOIN Reply r on r.board.bno = b.bno  where b.boardType = 1 group by b.bno order by b.bno desc")
	List<BoardMainDTO> findBoardsTop5(Pageable pageable);

	@Query("SELECT new com.backend.dto.board.GalleryListDTO(b.bno,b.title,b.content,f.uploadedFileName,b.regDate,b.modDate)  from Board b LEFT JOIN b.files f where b.boardType = 2 order by b.bno desc")
	List<GalleryListDTO> findGalleiesTop3(Pageable pageable);
}
