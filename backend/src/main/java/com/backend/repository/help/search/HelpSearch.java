package com.backend.repository.help.search;

import com.backend.dto.board.GalleryListDTO;
import com.backend.dto.help.HelpListDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface HelpSearch {
	Page<HelpListDTO> searchHelpList(String[] types, String keyword,
		String order, String sort, Pageable pageable);

}
