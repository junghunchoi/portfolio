package com.backend.service;

import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.entity.Board;
import com.backend.entity.Category;
import com.backend.repository.board.BoardRepository;
import com.backend.repository.CategoryRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import java.util.Optional;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class BoardServiceImpl implements BoardService {

	private final ModelMapper modelMapper;
	private final BoardRepository boardRepository;
	private final CategoryRepository categoryRepository;
	private final FilesService filesService;

	@Override
	public Long register(BoardDTO boardDTO) {
		try {
			Optional<Category> categoryResult = categoryRepository.findById(
				boardDTO.getCategory().getCno());
			Category category = categoryResult.orElseThrow();
			boardDTO.setCategory(category);
		} catch (Exception e) {
			log.error(e.getMessage());
		}
		Board board = modelMapper.map(boardDTO, Board.class);
		return boardRepository.save(board).getBno();
	}

	@Override
	public BoardDTO readOne(Long bno) {
		List<Object[]> results = boardRepository.findBoardWithCategoryById(bno);
		List<Map<String, Object>> fileList = filesService.getFilesListByBno(bno);
		Board board = null;
		Category category = null;

		for (Object[] result : results) {
			board = (Board) result[0];
			category = (Category) result[1];
		}

		BoardDTO boardDTO = modelMapper.map(board, BoardDTO.class);
		boardDTO.setCategory(category);
		boardDTO.setFiles(fileList);
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
	public PageResponseDTO<BoardListDTO> list(PageRequestDTO pageRequestDTO) {
		String[] types = pageRequestDTO.getTypes();
		String keyword = pageRequestDTO.getKeyword();
		String order = pageRequestDTO.getOrder();
		String sort = pageRequestDTO.getSort();
		Pageable pageable = pageRequestDTO.getPageable(order);

		Page<BoardListDTO> result = boardRepository.searchBoardListWithReplyandFiles(types, keyword,
			sort, order, pageable);

		return PageResponseDTO.<BoardListDTO>withAll()
		                      .pageRequestDTO(pageRequestDTO)
		                      .items(result.getContent())
		                      .total((int) result.getTotalElements())
		                      .build();
	}

	@Override
	public List<Map<String, Integer>> getMainPageRecords() {
		List<Map<String, Integer>> result = boardRepository.getMainRecords();
		result.add(boardRepository.countPostsInLastMonth());

		return result;
	}

  @Override
  public PageResponseDTO<BoardListDTO> readAllInfiniteScroll(PageRequestDTO pageRequestDTO) {

    return null;
  }
}

