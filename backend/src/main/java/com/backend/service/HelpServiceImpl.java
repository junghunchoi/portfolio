package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.help.HelpDTO;
import com.backend.dto.help.HelpListDTO;
import com.backend.entity.Help;
import com.backend.repository.help.HelpRepository;
import com.backend.repository.help.search.HelpSearch;
import java.util.Collection;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * 문의 관련 서비스를 제공하는 구현 클래스. 문의 등록, 조회, 수정, 삭제 및 목록 조회 기능을 수행합니다.
 */
@Service
@Log4j2
@RequiredArgsConstructor
public class HelpServiceImpl implements HelpService {

	private final ModelMapper modelMapper;
	private final HelpRepository helpRepository;
//	private final UserAuthorityUtil userAuthorityUtil;

	/**
	 * 문의를 등록하는 메서드.
	 *
	 * @param helpDTO 등록할 문의 정보를 담고 있는 DTO 객체
	 * @return 등록된 문의의 식별자(hno)
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
	 * 특정 문의를 조회하는 메서드.
	 *
	 * @param hno 조회할 문의의 식별자(hno)
	 * @return 조회된 문의 정보를 담고 있는 DTO 객체
	 */
	@Override
	public HelpDTO readOne(Long hno, String username) {
		/**
		 * 관리자의 경우 문의에 무조건 접근할 수 있다.
		 */
//		String userAuthority = userAuthorityUtil.getUserAuthority();

		Optional<Help> result = helpRepository.findById(hno);
		Help help = result.orElseThrow();
		HelpDTO helpDTO = modelMapper.map(help, HelpDTO.class);

//		if (userAuthority.equals("ROLE_ADMIN")) {
//			return helpDTO;
//		}else{
//			//TODO 비밀글에 본인의 문의글이 아닌데 url로 접근할 때
////			if (!helpDTO.getWriter().equals(username) && helpDTO.getIsSecret() == 1) {
////				throw new AccessDeniedException("unAuthorize user");
////			}
//			//조회수 증가
//			help.updateViewCount(help.getViewCount() + 1);
//			helpRepository.save(help);
//
//			return helpDTO;
//		}
		return helpDTO;
	}

	/**
	 * 문의를 수정하는 메서드.
	 *
	 * @param helpDTO 수정할 문의 정보를 담고 있는 DTO 객체
	 */
	@Override
	public void modify(HelpDTO helpDTO) {
		Optional<Help> result = helpRepository.findById(helpDTO.getHno());

		Help help = result.orElseThrow();

		help.change(helpDTO.getTitle(), helpDTO.getContent(), helpDTO.getAnswer());

		helpRepository.save(help);

	}

	/**
	 * 문의를 삭제하는 메서드.
	 *
	 * @param bno 삭제할 문의의 식별자(hno)
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
	 * 문의 목록을 페이징하여 조회하는 메서드.
	 *
	 * @param pageRequestDTO 페이징 정보와 검색 조건을 담고 있는 DTO 객체
	 * @return 조회된 문의 목록과 페이징 정보를 담고 있는 DTO 객체
	 */
	@Override
	public PageResponseDTO<HelpListDTO> list(PageRequestDTO pageRequestDTO) {
		String[] types = pageRequestDTO.getTypes();
		String keyword = pageRequestDTO.getKeyword();
		String order = pageRequestDTO.getOrder();
		String sort = pageRequestDTO.getSort();
		Pageable pageable = pageRequestDTO.getPageable(order);

		Page<HelpListDTO> result = helpRepository.searchHelpList(types, keyword, order, sort,
			pageable);

		return PageResponseDTO.<HelpListDTO>withAll()
		                      .pageRequestDTO(pageRequestDTO)
		                      .items(result.getContent())
		                      .total((int) result.getTotalElements())
		                      .build();
	}
}

