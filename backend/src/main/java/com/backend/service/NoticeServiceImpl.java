package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.notice.NoticeDTO;
import com.backend.dto.notice.NoticeListDTO;
import com.backend.entity.Notice;
import com.backend.repository.notice.NoticeRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * 공지사항 관련 비즈니스 로직을 처리하는 서비스 구현 클래스입니다.
 *
 * @author 최정훈
 * @version 1
 * @since 2024.04.20
 */
@Service
@RequiredArgsConstructor
@Log4j2
public class NoticeServiceImpl implements NoticeService{

	private final ModelMapper modelMapper;
	private final NoticeRepository noticeRepository;

	/**
	 * 공지사항 목록을 페이징 처리하여 조회합니다.
	 *
	 * @param pageRequestDTO 페이징 요청 정보를 담은 DTO 객체
	 * @return 페이징 처리된 공지사항 목록을 담은 DTO 객체
	 */
	@Override
	public PageResponseDTO<NoticeListDTO> list(PageRequestDTO pageRequestDTO) {
		String[] types = pageRequestDTO.getTypes();
		String keyword = pageRequestDTO.getKeyword();
		String order = pageRequestDTO.getOrder();
		String sort = pageRequestDTO.getSort();
		Pageable pageable = pageRequestDTO.getPageable(order);

		Page<NoticeListDTO> result = noticeRepository.searchNoticeList(types, keyword,
			order, sort, pageable);



		return PageResponseDTO.<NoticeListDTO>withAll()
		                      .pageRequestDTO(pageRequestDTO)
		                      .items(result.getContent())
		                      .total((int) result.getTotalElements())
		                      .build();
	}

	/**
	 * 새로운 공지사항을 등록합니다.
	 *
	 * @param noticeDTO 등록할 공지사항 정보를 담은 DTO 객체
	 * @return 등록된 공지사항의 식별자 (nno)
	 */
	@Override
	public Long register(NoticeDTO noticeDTO) {

		Notice notice = modelMapper.map(noticeDTO, Notice.class);

		return noticeRepository.save(notice).getNno();
	}

	/**
	 * 특정 공지사항을 조회합니다.
	 *
	 * @param nno 조회할 공지사항의 식별자
	 * @return 조회된 공지사항 정보를 담은 DTO 객체
	 */
	@Override
	public NoticeDTO readOne(Long nno) {
		Optional<Notice> noticeOptional = noticeRepository.findById(nno);

		Notice notice = noticeOptional.orElseThrow();

		//조회수증가
		notice.updateViewCount(notice.getViewCount()+1);
		noticeRepository.save(notice);

		return modelMapper.map(notice, NoticeDTO.class);
	}

	/**
	 * 공지사항 정보를 수정합니다.
	 *
	 * @param noticeDTO 수정할 공지사항 정보를 담은 DTO 객체
	 */
	@Override
	public void modify(NoticeDTO noticeDTO) {
		Optional<Notice> noticeOptional = noticeRepository.findById(noticeDTO.getNno());
		Notice notice = noticeOptional.orElseThrow();

		notice.change(noticeDTO.getTitle(),noticeDTO.getContent(),noticeDTO.getIsMain());

		noticeRepository.save(notice);
	}

	/**
	 * 특정 공지사항을 삭제합니다.
	 *
	 * @param nno 삭제할 공지사항의 식별자
	 */
	@Override
	public void remove(Long nno) {
		Optional<Notice> noticeOptional = noticeRepository.findById(nno);

		Notice notice = noticeOptional.orElseThrow();
		noticeRepository.delete(notice);
	}
}
