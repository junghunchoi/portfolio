package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.repository.RestrospectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RetrospectService {
    private final RestrospectRepository restrospectRepository;

    public PageResponseDTO<BoardListDTO> list(PageRequestDTO pageRequestDTO) {
        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        String order = pageRequestDTO.getOrder();
        String sort = pageRequestDTO.getSort();
        Pageable pageable = pageRequestDTO.getPageable(order);

        Page<BoardListDTO> result = restrospectRepository.searchRetrospectList(types, keyword,
                sort, order, pageable);

        return PageResponseDTO.<BoardListDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .items(result.getContent())
                .total((int) result.getTotalElements())
                .build();
    }
}
