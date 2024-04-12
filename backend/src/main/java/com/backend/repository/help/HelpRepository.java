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

public interface HelpRepository extends JpaRepository<Help,Long>, HelpSearch {

	@Query("SELECT h from Help h order by h.hno desc")
	List<Help> findHelpsTop5(Pageable pageable);
}
