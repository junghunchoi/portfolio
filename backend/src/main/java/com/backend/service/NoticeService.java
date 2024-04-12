package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.notice.NoticeDTO;
import com.backend.dto.notice.NoticeListDTO;

public interface NoticeService {
	PageResponseDTO<NoticeListDTO> list(PageRequestDTO pageRequestDTO);

	Long register(NoticeDTO noticeDTO);

	NoticeDTO readOne(Long nno);

	void modify(NoticeDTO noticeDTO);

	void remove(Long nno);
}
