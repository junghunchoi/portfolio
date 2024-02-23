package com.backend.service;

import com.backend.entity.Files;
import com.backend.entity.QBoard;
import com.backend.entity.QFiles;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@RequiredArgsConstructor
@Log4j2
public class FilesServiceImpl implements FilesService{

	private final JPAQueryFactory queryFactory;

	@Override
	public List<Files> getFilesListByBno(Long bno) {
		log.info("getFilesListByBno");
		QFiles files = QFiles.files;
		QBoard board = QBoard.board;

		List<Files> results = queryFactory
				.selectFrom(files)
				.join(files.board, board)
				.where(board.bno.eq(bno))
				.fetch();

		return results;
	}

	@Override
	public String saveFiles(List<MultipartFile> files) {

		for (MultipartFile file : files) {

		}
		return null;
	}
}
