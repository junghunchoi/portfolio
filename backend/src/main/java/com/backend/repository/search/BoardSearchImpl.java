package com.backend.repository.search;

import com.backend.dto.board.BoardListReplyCountDTO;
import com.backend.entity.Board;
import com.backend.entity.QBoard;
import com.backend.entity.QCategory;
import com.backend.entity.QReply;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
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
	public Page<BoardListReplyCountDTO> searchWithReplyCount(String[] types, String keyword, Pageable pageable) {

		QBoard board = QBoard.board;
		QReply reply = QReply.reply;
		QCategory category = QCategory.category;

		JPQLQuery<Board> query = from(board);
		query.leftJoin(board.category, category);
		query.leftJoin(reply).on(reply.board.eq(board));

		query.groupBy(board);

		if( (types != null && types.length > 0) && keyword != null ){

			BooleanBuilder booleanBuilder = new BooleanBuilder();
			String convertString = '%' + keyword + '%';

			for(String type: types){

				switch (type){
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

		JPQLQuery<BoardListReplyCountDTO> dtoQuery = query.select(Projections.bean(BoardListReplyCountDTO.class,
				board.bno,
				category.content.as("category"),
				board.title,
				board.writer,
				board.regDate,
				board.modDate,
				reply.count().as("viewCount")
		));

		this.getQuerydsl().applyPagination(pageable,dtoQuery);

		List<BoardListReplyCountDTO> dtoList = dtoQuery.fetch();


		long count = dtoQuery.fetchCount();

		return new PageImpl<>(dtoList, pageable, count);
	}
}
