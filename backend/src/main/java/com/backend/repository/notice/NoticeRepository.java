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

@Repository
public interface NoticeRepository extends JpaRepository<Notice,Long>, NoticeSearch {

	@Query("SELECT n from Notice n order by n.nno desc")
	List<Notice> findNoticesTop5(Pageable pageable);

}
