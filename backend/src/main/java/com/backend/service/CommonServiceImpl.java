package com.backend.service;

import com.backend.dto.board.BoardListDTO;
import com.backend.dto.board.BoardMainDTO;
import com.backend.dto.board.GalleryListDTO;
import com.backend.dto.strava.StravaDTO;
import com.backend.entity.*;
import com.backend.repository.CategoryRepository;
import com.backend.repository.StravaRepository;
import com.backend.repository.board.BoardRepository;
import com.backend.repository.help.HelpRepository;
import com.backend.repository.notice.NoticeRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

/**
 * 공통 서비스를 제공하는 구현 클래스. 메인 페이지에 필요한 데이터를 조회하는 기능을 수행합니다.
 */
@Service
@RequiredArgsConstructor
@Log4j2
public class CommonServiceImpl implements CommonService {

	private final BoardRepository boardRepository;
	private final StravaRepository stravaRepository;
	private final CategoryRepository categoryRepository;

	/**
	 * 메인 페이지에 필요한 데이터를 조회하는 메서드.
	 *
	 * @return 게시글, 갤러리, 도움말, 공지사항 데이터를 담고 있는 Map 객체
	 */
	@Override
	public Map<String, List<?>> listMainPage() {

		Map<String, List<?>> result = new HashMap<>();
		Pageable pageable = PageRequest.of(0, 7); // 7개의 행만 조회

		List<BoardMainDTO> boardData = boardRepository.findBoardsTop6(pageable);
		List<Strava> stravaList = stravaRepository.findStrava(pageable);

		result.put("boards", boardData);
		result.put("strava", stravaList);

		return result;
	}

	@Override
	public List<Category> getCategoryList() {
		return categoryRepository.findAll();
	}
}
