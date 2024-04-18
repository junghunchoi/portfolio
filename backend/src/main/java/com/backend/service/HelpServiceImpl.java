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

@Service
@Log4j2
@RequiredArgsConstructor
public class HelpServiceImpl implements HelpService {

	private final ModelMapper modelMapper;
	private final HelpRepository helpRepository;

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

	@Override
	public void modify(HelpDTO helpDTO) {
		Optional<Help> result = helpRepository.findById(helpDTO.getHno());

		Help help = result.orElseThrow();

		help.change(helpDTO.getTitle(), helpDTO.getContent(), helpDTO.getAnswer());

		helpRepository.save(help);

	}

	@Override
	public void remove(Long bno) {
		try {
			helpRepository.deleteById(bno);
		} catch (Exception e) {
			log.info(e.getMessage());
		}
	}

	@Override
	public PageResponseDTO<HelpListDTO> list(PageRequestDTO pageRequestDTO) {
		log.info(pageRequestDTO);
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

