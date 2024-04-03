package com.backend.service;

import static com.backend.entity.QBoard.board;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.GalleryListDTO;
import com.backend.entity.Board;
import com.backend.repository.BoardRepository;
import com.backend.utils.FileUtils;
import java.util.List;
import java.util.Optional;
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
	private final FilesService filesService;
	private final FileUtils fileUtils;

	@Override
	public PageResponseDTO<GalleryListDTO> list(PageRequestDTO pageRequestDTO) {
		String[] types = pageRequestDTO.getTypes();
		String keyword = pageRequestDTO.getKeyword();
		String order = pageRequestDTO.getOrder();
		String sort = pageRequestDTO.getSort();
		Pageable pageable = pageRequestDTO.getPageable(order);


		Page<GalleryListDTO> result = boardRepository.searchGalleryList(types, keyword,
			order, sort, pageable);

		for (GalleryListDTO galleryListDTO : result.getContent()) {

		}

		return PageResponseDTO.<GalleryListDTO>withAll()
		                      .pageRequestDTO(pageRequestDTO)
		                      .items(result.getContent())
		                      .total((int) result.getTotalElements())
		                      .build();
	}

	@Override
	public Long register(BoardDTO boardDTO) {
		Board board = modelMapper.map(boardDTO, Board.class);
		Long bno = boardRepository.save(board).getBno();

		return bno;
	}

	@Override
	public BoardDTO readOne(Long bno) {
		List<String> fileList = filesService.getFilesListByBno(bno);
		Board board = null;

		BoardDTO boardDTO = modelMapper.map(board, BoardDTO.class);
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
}
