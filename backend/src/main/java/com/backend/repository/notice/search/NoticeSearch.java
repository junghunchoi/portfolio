package com.backend.repository.notice.search;

import com.backend.dto.help.HelpListDTO;
import com.backend.dto.notice.NoticeListDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface NoticeSearch {
	Page<NoticeListDTO> searchNoticeList(String[] types, String keyword,
		String order, String sort, Pageable pageable);

}
