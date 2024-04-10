package com.backend.repository.board.search;

import com.backend.dto.board.BoardListDTO;
import com.backend.dto.board.GalleryListDTO;
import com.backend.entity.Board;
import com.backend.entity.QBoard;
import com.backend.entity.QCategory;
import com.backend.entity.QFile;
import com.backend.entity.QReply;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.Objects;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

/**
 * 게시물 리스트 검색을 위한 클래스
 */
@Log4j2
public class BoardSearchImpl extends QuerydslRepositorySupport implements BoardSearch {


	public BoardSearchImpl() {
		super(Board.class);
	}

	@Override
	public Page<BoardListDTO> searchBoardListWithReplyandFiles(String[] types, String keyword,
		String sort, String order, Pageable pageable) {

		QBoard board = QBoard.board;
		QReply reply = QReply.reply;
		QFile file = QFile.file;
		QCategory category = QCategory.category;

		JPQLQuery<Board> query = from(board);
		query.leftJoin(board.category, category);
		query.leftJoin(reply).on(reply.board.eq(board));
		query.leftJoin(file).on(file.board.eq(board));

		query.groupBy(board);

		if ((types != null && types.length > 0) && keyword != null) {

			BooleanBuilder booleanBuilder = new BooleanBuilder();

			for (String type : types) {

				switch (type) {
					case "t":
						booleanBuilder.or(board.title.contains(keyword));
						break;
					case "c":
						booleanBuilder.or(board.content.contains(keyword));
						break;
					case "w":
						booleanBuilder.or(board.writer.contains(keyword));
						break;
				}
			}//end for
			query.where(booleanBuilder);
		}

		//bno > 0
		query.where(board.bno.gt(0L));

		//자유게시판만 조회
		query.where(board.boardType.eq(1));

		if (Objects.equals(sort, "asc")) {
			switch (order) {
				case "regDate":
					query.orderBy(board.regDate.asc());
				case "title":
					query.orderBy(board.title.asc());
				case "viewCount":
					query.orderBy(board.viewCount.asc());
			}
		} else {
			switch (order) {
				case "regDate":
					query.orderBy(board.regDate.desc());
				case "title":
					query.orderBy(board.title.desc());
				case "viewCount":
					query.orderBy(board.viewCount.desc());
			}
		}

		JPQLQuery<BoardListDTO> dtoQuery = query.select(Projections.bean(BoardListDTO.class,
			board.bno,
			category.content.as("category"),
			board.title,
			board.writer,
			board.viewCount,
			board.regDate,
			board.modDate,
			reply.count().as("replyCount"),
			file.count().as("fileCount")
		));

		log.info(query);
		log.info(dtoQuery);
		this.getQuerydsl().applyPagination(pageable, dtoQuery);

		List<BoardListDTO> dtoList = dtoQuery.fetch();

		long count = dtoQuery.fetchCount();

		return new PageImpl<>(dtoList, pageable, count);
	}

	@Override
	public Page<GalleryListDTO> searchGalleryList(String[] types, String keyword, String order,
		String sort, Pageable pageable) {

		QBoard board = QBoard.board;
		QFile file = QFile.file;

		JPQLQuery<Board> query = from(board);
		query.leftJoin(file).on(file.board.eq(board));

		query.groupBy(board);

		if ((types != null && types.length > 0) && keyword != null) {

			BooleanBuilder booleanBuilder = new BooleanBuilder();
			String convertString = '%' + keyword + '%';

			for (String type : types) {

				switch (type) {
					case "t":
						booleanBuilder.or(board.title.contains(convertString));
						break;
					case "c":
						booleanBuilder.or(board.content.contains(convertString));
						break;
					case "w":
						booleanBuilder.or(board.writer.contains(convertString));
						break;
				}
			}//end for
			query.where(booleanBuilder);
		}

		//bno > 0
		query.where(board.bno.gt(0L));
		//갤러리만 조회
		query.where(board.boardType.eq(2));

		if (sort.equals("asc")) {
			switch (order) {
				case "regDate":
					query.orderBy(board.regDate.asc());
				case "title":
					query.orderBy(board.title.asc());
				case "viewCount":
					query.orderBy(board.viewCount.asc());
			}
		} else {
			switch (order) {
				case "regDate":
					query.orderBy(board.regDate.desc());
				case "title":
					query.orderBy(board.title.desc());
				case "viewCount":
					query.orderBy(board.viewCount.desc());
			}
		}

		JPQLQuery<GalleryListDTO> dtoQuery = query.select(Projections.bean(GalleryListDTO.class,
			board.bno,
			board.title,
			board.content,
			board.regDate,
			board.modDate,
			file.uploadedFileName.as("fileName")
		));

		this.getQuerydsl().applyPagination(pageable, dtoQuery);

		List<GalleryListDTO> items = dtoQuery.fetch();
		long count = dtoQuery.fetchCount();

		return new PageImpl<>(items, pageable, count);
	}
}