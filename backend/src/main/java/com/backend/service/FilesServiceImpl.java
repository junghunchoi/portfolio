package com.backend.service;

import com.backend.dto.file.FileDTO;
import com.backend.entity.File;
import com.backend.entity.QBoard;
//import com.backend.entity.QFiles;
import com.backend.entity.QFile;
import com.backend.repository.FilesRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Repository
@RequiredArgsConstructor
@Log4j2
public class FilesServiceImpl implements FilesService{

	@Value("${com.backend.upload.path}")
	private String uploadPath;
	private final FilesRepository filesRepository;
	private final JPAQueryFactory queryFactory;

	@Override
	public List<File> getFilesListByBno(Long bno) {
		log.info("getFilesListByBno");
		QFile files = QFile.file;
		QBoard board = QBoard.board;

		List<File> results = queryFactory
				.selectFrom(files)
				.join(files.board, board)
				.where(board.bno.eq(bno))
				.fetch();

		return results;
	}

	@Override
	public String registerFiles(MultipartFile files) {

//		for (MultipartFile file : files) {
//
//			File fileEntity = File.builder()
//				.fileName(file.getName())
//				.
//			                      .build();
//
//			filesRepository.save(fileEntity);
//		}

		return null;
	}

	@Override
	public String uploadFiles(FileDTO fileDTO) {
		return null;
	}
}
