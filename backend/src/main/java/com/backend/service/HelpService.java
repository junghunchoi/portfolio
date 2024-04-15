package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.help.HelpDTO;
import com.backend.dto.help.HelpListDTO;

public interface HelpService {
	Long register(HelpDTO helpDTO);

	HelpDTO readOne(Long hno);

	void modify(HelpDTO helpDTO);

	void remove(Long bno);

	/**
	 * 게시물별 댓글의 갯수를 함께 반환
	 * 추후 썸네일, 파일여부 등 추가시 변경해야함
	 * @param pageRequestDTO
	 * @return PageResponseDTO
	 */
	PageResponseDTO<HelpListDTO> list(PageRequestDTO pageRequestDTO);
}
