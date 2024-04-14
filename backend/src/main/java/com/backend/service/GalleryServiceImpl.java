package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.GalleryListDTO;
import com.backend.dto.file.FileDTO;
import com.backend.entity.Board;
import com.backend.entity.File;
import com.backend.repository.board.BoardRepository;
import com.backend.utils.FileUtils;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.core.io.Resource;
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
			String fileName = galleryListDTO.getFileName();
			if (fileName == null) {
				continue;
			}
			galleryListDTO.setFile(fileUtils.readFileAsResource(fileName));
		}

		return PageResponseDTO.<GalleryListDTO>withAll()
		                      .pageRequestDTO(pageRequestDTO)
		                      .items(result.getContent())
		                      .total((int) result.getTotalElements())
		                      .build();
	}

	@Override
	public Long register(BoardDTO boardDTO) {

		boardDTO.setCategory(null);
		boardDTO.setBoardType(2); // gallery 타입
		Board board = modelMapper.map(boardDTO, Board.class);
		Long bno = boardRepository.save(board).getBno();

		return bno;
	}

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
//			Resource resource = fileUtils.readFileAsResource(file.getUploadedFileName());
//			String resourceConvert = fileUtils.encodeResourceToBase64(resource);

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
		log.info(boardDTO);

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
