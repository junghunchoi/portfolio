package com.backend.repository.notice.search;

import com.backend.dto.notice.noticeListDTO;
import com.backend.dto.notice.NoticeListDTO;
import com.backend.entity.notice;
import com.backend.entity.Notice;
import com.backend.entity.QNotice;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.List;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

@Log4j2
public class NoticeSearchImpl extends QuerydslRepositorySupport implements NoticeSearch  {

	
	public NoticeSearchImpl() {
		super(Notice.class);
	}

	@Override
	public Page<NoticeListDTO> searchnoticeList(String[] types, String keyword, String order,
		String sort, Pageable pageable) {
		QNotice notice = QNotice.notice;
		
		JPQLQuery< Notice > query = from(notice);


		if ((types != null && types.length > 0) && keyword != null) {

			BooleanBuilder booleanBuilder = new BooleanBuilder();

			for (String type : types) {

				switch (type) {
					case "t":
						booleanBuilder.or(notice.title.contains(keyword));
						break;
					case "c":
						booleanBuilder.or(notice.content.contains(keyword));
						break;
					case "w":
						booleanBuilder.or(notice.writer.contains(keyword));
						break;
				}
			}//end for
			query.where(booleanBuilder);
		}


		if (sort.equals("asc")) {
			switch (order) {
				case "regDate":
					query.orderBy(notice.regDate.asc());
				case "title":
					query.orderBy(notice.title.asc());
				case "viewCount":
					query.orderBy(notice.viewCount.asc());
			}
		} else {
			switch (order) {
				case "regDate":
					query.orderBy(notice.regDate.desc());
				case "title":
					query.orderBy(notice.title.desc());
				case "viewCount":
					query.orderBy(notice.viewCount.desc());
			}
		}

		JPQLQuery<noticeListDTO> dtoQuery = query.select(Projections.bean(noticeListDTO.class,
			notice.hno,
			notice.title,
			notice.content,
			notice.answer,
			notice.isSecret,
			notice.regDate
		));

		this.getQuerydsl().applyPagination(pageable, dtoQuery);

		List<noticeListDTO> items = dtoQuery.fetch();
		log.info(items);
		long count = dtoQuery.fetchCount();

		return new PageImpl<>(items, pageable, count);
	}
}
