package com.backend.service;

import com.backend.dto.BoardDTO;
import com.backend.dto.BoardListReplyCountDTO;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.entity.Board;
import com.backend.entity.Category;
import com.backend.repository.BoardRepository;
import com.backend.repository.CategoryRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class BoardServiceImpl implements BoardService {

	private final ModelMapper modelMapper;
	private final BoardRepository boardRepository;
	private final CategoryRepository categoryRepository;

	@Override
	public Long register(BoardDTO boardDTO) {
		Optional<Category> categoryResult = categoryRepository.findById(boardDTO.getCno());
		Category categoryObj = categoryResult.orElseThrow();
		boardDTO.setCategoryObj(categoryObj);

		Board board = dtoToEntity(boardDTO);
		Long bno = boardRepository.save(board).getBno();

		return bno;
	}

	@Override
	public BoardDTO readOne(Long bno) {
		List<Object[]> results = boardRepository.findBoardWithCategoryNameById(bno);

		Board board = null;
		String category = null;

		for (Object[] result : results) {
			board = (Board) result[0];
			category = (String) result[1];
		}

		Category categoryObj = new Category(board.getCategory().getCno(),board,category);

		BoardDTO boardDTO = modelMapper.map(board, BoardDTO.class);
		boardDTO.setCategory(category);
		boardDTO.setCategoryObj(categoryObj);
		// 조회수 증가 로직
		board.updateViewCount(board.getViewCount() + 1);

		boardRepository.save(board);

		return boardDTO;
	}

	@Override
	public void modify(BoardDTO boardDTO) {
		Optional<Board> result = boardRepository.findById(boardDTO.getBno());

		Board board = result.orElseThrow();

		board.change(boardDTO.getTitle(), boardDTO.getContent(),boardDTO.getCategoryObj());

		boardRepository.save(board);
	}

	@Override
	public void remove(Long bno) {
		boardRepository.deleteById(bno);

	}

	@Override
	public PageResponseDTO<BoardListReplyCountDTO> listWithReplyCount(
		PageRequestDTO pageRequestDTO) {
		String[] types = pageRequestDTO.getTypes();
		String keyword = pageRequestDTO.getKeyword();
		Pageable pageable = pageRequestDTO.getPageable("bno");

		Page<BoardListReplyCountDTO> result = boardRepository.searchWithReplyCount(types, keyword,
			pageable);
		return PageResponseDTO.<BoardListReplyCountDTO>withAll()
		                      .pageRequestDTO(pageRequestDTO)
		                      .dtoList(result.getContent())
		                      .total((int) result.getTotalElements())
		                      .build();
	}
}

