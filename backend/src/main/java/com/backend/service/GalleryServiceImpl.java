package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.dto.board.GalleryListDTO;
import com.backend.repository.BoardRepository;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class GalleryServiceImpl implements GalleryService {

	private final ModelMapper modelMapper;
	private final BoardRepository boardRepository;


	@Override
	public Page<GalleryListDTO> list(PageRequestDTO pageRequestDTO) {
		String[] types = pageRequestDTO.getTypes();
		String keyword = pageRequestDTO.getKeyword();
		String order = pageRequestDTO.getOrder();
		String sort = pageRequestDTO.getSort();
		Pageable pageable = pageRequestDTO.getPageable(order);


		Page<GalleryListDTO> result = boardRepository.searchGalleryList(types, keyword,
			order, sort, pageable);

		return PageResponseDTO.<BoardListDTO>withAll()
		                      .pageRequestDTO(pageRequestDTO)
		                      .dtoList(result.getContent())
		                      .total((int) result.getTotalElements())
		                      .build();
	}

	@Override
	public Long register(BoardDTO boardDTO) {
		return null;
	}

	@Override
	public BoardDTO readOne(Long bno) {
		return null;
	}

	@Override
	public void modify(BoardDTO boardDTO) {

	}

	@Override
	public void remove(Long bno) {

	}
}
