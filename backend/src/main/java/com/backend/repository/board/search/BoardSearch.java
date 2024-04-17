package com.backend.repository.board.search;

import com.backend.dto.board.BoardListDTO;
import com.backend.dto.board.GalleryListDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * 자유게시판, 갤러리 검색 기능을 위한 인터페이스입니다.
 */
public interface BoardSearch {

	/**
	 * 게시판 목록을 검색하고 페이징 처리하여 결과를 반환합니다.
	 *
	 * @param types    검색할 필드 유형 배열
	 * @param keyword  검색 키워드
	 * @param order    정렬 기준 필드
	 * @param sort     정렬 방향 (asc 또는 desc)
	 * @param pageable 페이징 정보
	 * @return 검색된 게시판 목록 페이지
	 */
	Page<BoardListDTO> searchBoardListWithReplyandFiles(String[] types, String keyword,
		String order, String sort, Pageable pageable);

	/**
	 * 갤러리 목록을 검색하고 페이징 처리하여 결과를 반환합니다.
	 *
	 * @param types    검색할 필드 유형 배열
	 * @param keyword  검색 키워드
	 * @param order    정렬 기준 필드
	 * @param sort     정렬 방향 (asc 또는 desc)
	 * @param pageable 페이징 정보
	 * @return 검색된 갤러리 목록 페이지
	 */
	Page<GalleryListDTO> searchGalleryList(String[] types, String keyword,
		String order, String sort, Pageable pageable);
}
