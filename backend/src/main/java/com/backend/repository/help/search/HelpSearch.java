package com.backend.repository.help.search;

import com.backend.dto.help.HelpListDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


/**
 * 문의글 검색 기능을 위한 인터페이스입니다.
 */
public interface HelpSearch {
	/**
	 * 문의글을 검색하고 페이징 처리하여 결과를 반환합니다.
	 *
	 * @param types    검색할 필드 유형 배열
	 * @param keyword  검색 키워드
	 * @param order    정렬 기준 필드
	 * @param sort     정렬 방향 (asc 또는 desc)
	 * @param pageable 페이징 정보
	 * @return 검색된 도움말 목록 페이지
	 */
	Page<HelpListDTO> searchHelpList(String[] types, String keyword,
		String order, String sort, Pageable pageable);

}
