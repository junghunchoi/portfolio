package com.backend.repository.board;

import com.backend.dto.board.BoardMainDTO;
import com.backend.dto.board.GalleryListDTO;
import com.backend.entity.Board;
import com.backend.repository.board.search.BoardSearch;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * Board 엔티티에 대한 데이터 액세스를 제공하는 리포지토리 인터페이스.
 * JpaRepository와 BoardSearch 인터페이스를 상속받습니다.
 */
public interface BoardRepository extends JpaRepository<Board, Long>, BoardSearch {

	/**
	 * 주어진 bno에 해당하는 Board 엔티티와 연관된 Category 엔티티를 조회합니다.
	 *
	 * @param bno 조회할 Board의 bno
	 * @return Board와 Category 엔티티의 배열 리스트
	 */
	@Query("SELECT b, c FROM Board b JOIN b.category c WHERE b.bno = :bno")
	List<Object[]> findBoardWithCategoryById(@Param("bno") Long bno);

	/**
	 * 주어진 bno에 해당하는 Board 엔티티와 연관된 File 엔티티를 조회합니다.
	 *
	 * @param bno 조회할 Board의 bno
	 * @return Board와 File 엔티티의 배열 리스트
	 */
	@Query("SELECT b, f FROM Board b JOIN b.files f WHERE b.bno = :bno")
	List<Object[]> findBoardWithFileById(@Param("bno") Long bno);

	/**
	 * 게시판 타입이 1인 Board 엔티티 중에서 상위 6개를 조회하여 BoardMainDTO 리스트로 반환합니다.
	 * 조회 결과에는 Board의 bno, title, 댓글 개수, regDate가 포함됩니다.
	 *
	 * @param pageable 페이징 정보
	 * @return BoardMainDTO 리스트
	 */
	@Query("SELECT new com.backend.dto.board.BoardMainDTO(b.bno, b.title, COUNT(r.rno) , b.regDate) from Board b LEFT JOIN Reply r on r.board.bno = b.bno  where b.boardType = 1 group by b.bno order by b.bno desc")
	List<BoardMainDTO> findBoardsTop6(Pageable pageable);

	/**
	 * 게시판 타입이 2인 Board 엔티티 중에서 상위 3개를 조회하여 GalleryListDTO 리스트로 반환합니다.
	 * 조회 결과에는 Board의 bno, title, content, uploadedFileName, regDate, modDate가 포함됩니다.
	 *
	 * @param pageable 페이징 정보
	 * @return GalleryListDTO 리스트
	 */
	@Query("SELECT new com.backend.dto.board.GalleryListDTO(b.bno, b.title, b.content, f.uploadedFileName, b.regDate, b.modDate) " +
		"FROM Board b " +
		"LEFT JOIN b.files f " +
		"WHERE b.boardType = 2 " +
		"GROUP BY b.bno " +
		"ORDER BY b.bno DESC")
	List<GalleryListDTO> findGalleiesTop3(Pageable pageable);
}
