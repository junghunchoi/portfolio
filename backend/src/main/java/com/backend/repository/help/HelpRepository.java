package com.backend.repository.help;

import com.backend.dto.help.HelpListDTO;
import com.backend.entity.Help;
import com.backend.entity.Notice;
import com.backend.repository.board.search.BoardSearch;
import com.backend.repository.help.search.HelpSearch;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * 문의를 위한 리포지토리 인터페이스입니다.
 */
public interface HelpRepository extends JpaRepository<Help,Long>, HelpSearch {

	/**
	 * 최신 문의글 6개를 조회합니다.
	 *
	 * @param pageable 페이징 정보
	 * @return 최신 도움말 목록
	 */
	@Query("SELECT h from Help h order by h.hno desc")
	List<Help> findHelpsTop6(Pageable pageable);
}
