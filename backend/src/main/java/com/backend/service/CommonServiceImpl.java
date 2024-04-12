package com.backend.service;

import com.backend.entity.Board;
import com.backend.entity.Help;
import com.backend.entity.Notice;
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

@Service
@RequiredArgsConstructor
@Log4j2
public class CommonServiceImpl implements CommonService{

	private final BoardRepository boardRepository;
	private final HelpRepository helpRepository;
	private final NoticeRepository noticeRepository;


	@Override
	public Map<String, List<?>> listMainPage() {

		Map<String, List<?>> result = new HashMap<>();
		Pageable pageable = PageRequest.of(0, 5); // 5개의 행만 조회

		List<Board> boardData = boardRepository.findBoardsTop5(pageable);
		List<Board> galleryData = boardRepository.findGalleiesTop5(pageable);
		List<Help> helpData = helpRepository.findHelpsTop5(pageable);
		List<Notice> noticeData = noticeRepository.findNoticesTop5(pageable);

		result.put("boards", boardData);
		result.put("galleries", galleryData);
		result.put("helps", helpData);
		result.put("notices", noticeData);

		return result;
	}
}
