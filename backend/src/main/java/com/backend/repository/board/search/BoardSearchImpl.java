package com.backend.repository.board.search;

import com.backend.dto.board.BoardListDTO;
import com.backend.dto.board.GalleryListDTO;
import com.backend.entity.Board;
import com.backend.entity.QCategory;
import com.backend.entity.QBoard;
import com.backend.entity.QFile;
import com.backend.entity.QReply;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.Objects;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;


/**
 * BoardSearch 인터페이스를 구현한 BoardSearchImpl 클래스.
 * Querydsl을 사용하여 Board 엔티티에 대한 검색 기능을 제공합니다.
 */
@Log4j2
public class BoardSearchImpl extends QuerydslRepositorySupport implements BoardSearch {
	public BoardSearchImpl() {
		super(Board.class);
	}

	/**
	 * 게시판 목록을 검색하고 페이징 처리하여 결과를 반환합니다.
	 *
	 * @param types    검색할 필드 유형 배열
	 * @param keyword  검색 키워드
	 * @param sort     정렬 방향 (asc 또는 desc)
	 * @param order    정렬 기준 필드
	 * @param pageable 페이징 정보
	 * @return 검색된 게시판 목록 페이지
	 */
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
					case "t" -> booleanBuilder.or(board.title.contains(keyword));
					case "c" -> booleanBuilder.or(board.content.contains(keyword));
					case "w" -> booleanBuilder.or(board.writer.contains(keyword));
				}
			}
			query.where(booleanBuilder);
		}

		//bno > 0
		query.where(board.bno.gt(0L));

		//자유게시판만 조회
		query.where(board.boardType.eq(1));

		if (Objects.equals(sort, "asc")) {
			switch (order) {
				case "regDate" -> query.orderBy(board.regDate.asc());
				case "title" -> query.orderBy(board.title.asc());
				case "viewCount" -> query.orderBy(board.viewCount.asc());
			}
		} else {
			switch (order) {
				case "regDate" -> query.orderBy(board.regDate.desc());
				case "title" -> query.orderBy(board.title.desc());
				case "viewCount" -> query.orderBy(board.viewCount.desc());
			}
		}
		JPQLQuery<BoardListDTO> dtoQuery = query.select(
			Projections.bean(BoardListDTO.class, board.bno, category.content.as("category"),
				board.title, board.writer, board.viewCount, board.regDate, board.modDate,
				reply.count().coalesce(0L).as("replyCount"), file.count().as("fileCount")));
		this.getQuerydsl().applyPagination(pageable, dtoQuery);

		List<BoardListDTO> dtoList = dtoQuery.fetch();

		long count = dtoQuery.fetchCount();

		return new PageImpl<>(dtoList, pageable, count);
	}

	/**
	 * 갤러리 목록을 검색하고 페이징 처리하여 결과를 반환합니다.
	 *
	 * @param types    검색할 필드 유형 배열
	 * @param keyword  검색 키워드
	 * @param order    정렬 기준 필드
	 * @param sort     정렬 방향 (asc 또는 desc)
	 * @param pageable 페이징 정보
	 * @return 검색된 갤러리 목록 페이지
	 */
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

			for (String type : types) {

				switch (type) {
					case "t" -> booleanBuilder.or(board.title.contains(keyword));
					case "c" -> booleanBuilder.or(board.content.contains(keyword));
					case "w" -> booleanBuilder.or(board.writer.contains(keyword));

				}
			}
			query.where(booleanBuilder);
		}

		//bno > 0
		query.where(board.bno.gt(0L));
		//갤러리만 조회
		query.where(board.boardType.eq(2));

		if (sort.equals("asc")) {
			switch (order) {
				case "regDate" -> query.orderBy(board.regDate.asc());
				case "title" -> query.orderBy(board.title.asc());
				case "viewCount" -> query.orderBy(board.viewCount.asc());
			}
		} else {
			switch (order) {
				case "regDate" -> query.orderBy(board.regDate.desc());
				case "title" -> query.orderBy(board.title.desc());
				case "viewCount" -> query.orderBy(board.viewCount.desc());
			}
		}

		JPQLQuery<GalleryListDTO> dtoQuery = query.select(
			Projections.bean(GalleryListDTO.class, board.bno, board.title, board.content,
				board.regDate, board.modDate, file.uploadedFileName.as("fileName")));

		this.getQuerydsl().applyPagination(pageable, dtoQuery);

		List<GalleryListDTO> items = dtoQuery.fetch();
		long count = dtoQuery.fetchCount();

		return new PageImpl<>(items, pageable, count);
	}

	@Override
	public Page<BoardListDTO> searchRetrospectList(String[] types, String keyword, String order, String sort, Pageable pageable) {

			QBoard board = QBoard.board;

			JPQLQuery<Board> query = from(board);

			query.groupBy(board);

			if ((types != null && types.length > 0) && keyword != null) {

				BooleanBuilder booleanBuilder = new BooleanBuilder();

				for (String type : types) {

					switch (type) {
						case "t" -> booleanBuilder.or(board.title.contains(keyword));
						case "c" -> booleanBuilder.or(board.content.contains(keyword));
						case "w" -> booleanBuilder.or(board.writer.contains(keyword));

					}
				}
				query.where(booleanBuilder);
			}

			//bno > 0
			query.where(board.bno.gt(0L));

			//회고만 조회
			query.where(board.boardType.eq(3));

			if (sort.equals("asc")) {
				switch (order) {
					case "regDate" -> query.orderBy(board.regDate.asc());
					case "title" -> query.orderBy(board.title.asc());
					case "viewCount" -> query.orderBy(board.viewCount.asc());
				}
			} else {
				switch (order) {
					case "regDate" -> query.orderBy(board.regDate.desc());
					case "title" -> query.orderBy(board.title.desc());
					case "viewCount" -> query.orderBy(board.viewCount.desc());
				}
			}

			JPQLQuery<BoardListDTO> dtoQuery = query.select(
					Projections.bean(BoardListDTO.class, board.bno, board.title, board.content, board.viewCount,
							board.regDate, board.modDate));

			this.getQuerydsl().applyPagination(pageable, dtoQuery);

			List<BoardListDTO> items = dtoQuery.fetch();
			long count = dtoQuery.fetchCount();

			return new PageImpl<>(items, pageable, count);
	}
}
