package com.backend.repository.help;

import com.backend.dto.help.HelpListDTO;
import com.backend.entity.Help;
import com.backend.repository.board.search.BoardSearch;
import com.backend.repository.help.search.HelpSearch;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HelpRepository extends JpaRepository<Help,Long>, HelpSearch {

}
