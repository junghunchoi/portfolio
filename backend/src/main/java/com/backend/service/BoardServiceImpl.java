package com.backend.service;

import com.backend.common.codes.ErrorCode;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.BoardListReplyCountDTO;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.entity.Board;
import com.backend.entity.Category;
import com.backend.exception.BusinessExceptionHandler;
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
		try {
			Optional<Category> categoryResult = categoryRepository.findById(
				boardDTO.getCategory().getCno());
			Category category = categoryResult.orElseThrow();
			boardDTO.setCategory(category);
		} catch (Exception e) {
			e.getMessage();
		}

		Board board = dtoToEntity(boardDTO);
		Long bno = boardRepository.save(board).getBno();
		return bno;
	}

	@Override
	public BoardDTO readOne(Long bno) {
		List<Object[]> results = boardRepository.findBoardWithCategoryNameById(bno);

		Board board = null;
		Category category = null;

		for (Object[] result : results) {
			board = (Board) result[0];
			category = (Category) result[1];
		}

//		Category category = new Category(board.getCategory().getCno(),board.getCategory().getContent());

		BoardDTO boardDTO = modelMapper.map(board, BoardDTO.class);
		boardDTO.setCategory(category);
		// 조회수 증가 로직
		board.updateViewCount(board.getViewCount() + 1);

		boardRepository.save(board);

		return boardDTO;
	}

	@Override
	public void modify(BoardDTO boardDTO) {
		Optional<Board> result = boardRepository.findById(boardDTO.getBno());

		Board board = result.orElseThrow();

		board.change(boardDTO.getTitle(), boardDTO.getContent(), boardDTO.getCategory());

		boardRepository.save(board);
	}

	@Override
	public void remove(Long bno) {
		boardRepository.deleteById(bno);

	}

	@Override
	public PageResponseDTO<BoardListReplyCountDTO> listWithReplyCount(
		PageRequestDTO pageRequestDTO) {
		log.info(pageRequestDTO);
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

