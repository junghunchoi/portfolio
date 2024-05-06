package com.backend.repository.notice;

import com.backend.entity.Board;
import com.backend.entity.Notice;
import com.backend.entity.Reply;
import com.backend.repository.notice.search.NoticeSearch;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * 공지사항 관련 데이터 액세스를 위한 리포지토리 인터페이스입니다.
 */
@Repository
public interface NoticeRepository extends JpaRepository<Notice,Long>, NoticeSearch {

	/**
	 * 주요 공지사항을 우선적으로 조회하고, 최신 공지사항 6개를 조회합니다.
	 *
	 * @param pageable 페이징 정보
	 * @return 주요 공지사항과 최신 공지사항 목록
	 */
	@Query("SELECT n from Notice n order by n.isMain desc, n.nno desc")
	List<Notice> findNoticesTop6(Pageable pageable);

}
