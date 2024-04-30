package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.help.HelpDTO;
import com.backend.dto.help.HelpListDTO;
import com.backend.entity.Help;
import com.backend.repository.help.HelpRepository;
import com.backend.repository.help.search.HelpSearch;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * 공지 관련 서비스를 제공하는 구현 클래스.
 * 공지 등록, 조회, 수정, 삭제 및 목록 조회 기능을 수행합니다.
 */
@Service
@Log4j2
@RequiredArgsConstructor
public class HelpServiceImpl implements HelpService {

	private final ModelMapper modelMapper;
	private final HelpRepository helpRepository;

	/**
	 * 공지를 등록하는 메서드.
	 *
	 * @param helpDTO 등록할 공지 정보를 담고 있는 DTO 객체
	 * @return 등록된 공지의 식별자(hno)
	 */
	@Override
	public Long register(HelpDTO helpDTO) {
		try {
			Help help = modelMapper.map(helpDTO, Help.class);
			return helpRepository.save(help).getHno();
		} catch (Exception e) {
			log.info(e.getMessage());
		}

		return null;
	}

	/**
	 * 특정 공지를 조회하는 메서드.
	 *
	 * @param hno 조회할 공지의 식별자(hno)
	 * @return 조회된 공지 정보를 담고 있는 DTO 객체
	 */
	@Override
	public HelpDTO readOne(Long hno) {

		Optional<Help> result = helpRepository.findById(hno);
		Help help = result.orElseThrow();
		HelpDTO helpDTO = modelMapper.map(help, HelpDTO.class);

		//조회수 증가
		help.updateViewCount(help.getViewCount() + 1);
		helpRepository.save(help);

		return helpDTO;
	}

	/**
	 * 공지를 수정하는 메서드.
	 *
	 * @param helpDTO 수정할 공지 정보를 담고 있는 DTO 객체
	 */
	@Override
	public void modify(HelpDTO helpDTO) {
		Optional<Help> result = helpRepository.findById(helpDTO.getHno());

		Help help = result.orElseThrow();

		help.change(helpDTO.getTitle(), helpDTO.getContent(), helpDTO.getAnswer());

		helpRepository.save(help);

	}

	/**
	 * 공지를 삭제하는 메서드.
	 *
	 * @param bno 삭제할 공지의 식별자(hno)
	 */
	@Override
	public void remove(Long bno) {
		try {
			helpRepository.deleteById(bno);
		} catch (Exception e) {
			log.info(e.getMessage());
		}
	}

	/**
	 * 공지 목록을 페이징하여 조회하는 메서드.
	 *
	 * @param pageRequestDTO 페이징 정보와 검색 조건을 담고 있는 DTO 객체
	 * @return 조회된 공지 목록과 페이징 정보를 담고 있는 DTO 객체
	 */
	@Override
	public PageResponseDTO<HelpListDTO> list(PageRequestDTO pageRequestDTO) {
		String[] types = pageRequestDTO.getTypes();
		String keyword = pageRequestDTO.getKeyword();
		String order = pageRequestDTO.getOrder();
		String sort = pageRequestDTO.getSort();
		Pageable pageable = pageRequestDTO.getPageable(order);

		Page<HelpListDTO> result = helpRepository.searchHelpList(types, keyword,
			order, sort, pageable);

		return PageResponseDTO.<HelpListDTO>withAll()
		                      .pageRequestDTO(pageRequestDTO)
		                      .items(result.getContent())
		                      .total((int) result.getTotalElements())
		                      .build();
	}
}

