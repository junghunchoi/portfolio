package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.GalleryListDTO;
import com.backend.dto.file.FileDTO;
import com.backend.entity.Board;
import com.backend.entity.File;
import com.backend.repository.board.BoardRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * 갤러리 관련 비즈니스 로직을 처리하는 서비스 구현 클래스입니다.
 *
 */
@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class GalleryServiceImpl implements GalleryService {

	private final ModelMapper modelMapper;
	private final BoardRepository boardRepository;

	/**
	 * 갤러리 목록을 페이징 처리하여 조회합니다.
	 *
	 * @param pageRequestDTO 페이징 요청 정보를 담은 DTO 객체
	 * @return 페이징 처리된 갤러리 목록을 담은 DTO 객체
	 */
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
			String fileName = galleryListDTO.getFileName();

		}

		return PageResponseDTO.<GalleryListDTO>withAll()
		                      .pageRequestDTO(pageRequestDTO)
		                      .items(result.getContent())
		                      .total((int) result.getTotalElements())
		                      .build();
	}

	/**
	 * 새로운 갤러리를 등록합니다.
	 *
	 * @param boardDTO 등록할 갤러리 정보를 담은 DTO 객체
	 * @return 등록된 갤러리의 식별자 (bno)
	 */
	@Override
	public Long register(BoardDTO boardDTO) {

		boardDTO.setCategory(null);
		boardDTO.setBoardType(2); // gallery 타입
		Board board = modelMapper.map(boardDTO, Board.class);
		Long bno = boardRepository.save(board).getBno();

		return bno;
	}

	/**
	 * 특정 갤러리를 조회합니다.
	 *
	 * @param bno 조회할 갤러리의 식별자
	 * @return 조회된 갤러리 정보를 담은 DTO 객체
	 */
	@Override
	public BoardDTO readOne(Long bno) {
		List<Object[]> results = boardRepository.findBoardWithFileById(bno);
		Board board = (Board) results.get(0)[0]; // 첫 번째 열은 Board 객체를 가정합니다.
		List<File> filesFromDatabase = new ArrayList<>();
		List<FileDTO> files = new ArrayList<>();

		for (Object[] result : results) {
			// 각 행에서 File 객체를 가져와 set에 추가합니다.
			File file = (File) result[1]; // 두 번째 열은 File 객체를 가정합니다.
			filesFromDatabase.add(file);
		}

		for (File file : filesFromDatabase) {
			FileDTO fileDTO = FileDTO.builder()
			                         .fileName(file.getFileName())
			                         .fileSize(file.getFileSize())
			                         .fileType(file.getFileType())
			                         .uploadedFileName(file.getUploadedFileName())
			                         .build();

			files.add(fileDTO);
		}

		BoardDTO boardDTO = modelMapper.map(board, BoardDTO.class);
		boardDTO.setFiles(files);

		board.updateViewCount(board.getViewCount() + 1);

		boardRepository.save(board);

		return boardDTO;
	}

	/**
	 * 갤러리 정보를 수정합니다.
	 *
	 * @param boardDTO 수정할 갤러리 정보를 담은 DTO 객체
	 */
	@Override
	public void modify(BoardDTO boardDTO) {


		Optional<Board> result = boardRepository.findById(boardDTO.getBno());

		Board board = result.orElseThrow();

		board.change(boardDTO.getTitle(), boardDTO.getContent(), boardDTO.getCategory());

		boardRepository.save(board);
	}


	/**
	 * 특정 갤러리를 삭제합니다.
	 *
	 * @param bno 삭제할 갤러리의 식별자
	 */
	@Override
	public void remove(Long bno) {
		boardRepository.deleteById(bno);
	}
}
