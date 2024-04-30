package com.backend.repository.notice.search;

import com.backend.dto.notice.NoticeListDTO;
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

/**
 * NoticeSearch 인터페이스를 구현한 NoticeSearchImpl 클래스.
 * Querydsl을 사용하여 Notice 엔티티에 대한 검색 기능을 제공합니다.
 */
@Log4j2
public class NoticeSearchImpl extends QuerydslRepositorySupport implements NoticeSearch {


	public NoticeSearchImpl() {
		super(Notice.class);
	}

	/**
	 * Notice 리스트를 검색하여 페이징된 결과를 반환합니다.
	 *
	 * @param types    검색할 필드 유형 배열 (t: 제목, c: 내용, w: 작성자)
	 * @param keyword  검색할 키워드
	 * @param order    정렬 기준 필드 (regDate: 등록일, title: 제목, viewCount: 조회수)
	 * @param sort     정렬 방식 (asc: 오름차순, desc: 내림차순)
	 * @param pageable 페이징 정보
	 * @return 검색 결과에 해당하는 NoticeListDTO 객체들의 페이징된 결과
	 */
	@Override
	public Page<NoticeListDTO> searchNoticeList(String[] types, String keyword, String order,
		String sort, Pageable pageable) {
		QNotice notice = QNotice.notice;

		JPQLQuery<Notice> query = from(notice);

		if ((types != null && types.length > 0) && keyword != null) {

			BooleanBuilder booleanBuilder = new BooleanBuilder();

			for (String type : types) {
				switch (type) {
					case "t" -> booleanBuilder.or(notice.title.contains(keyword));
					case "c" -> booleanBuilder.or(notice.content.contains(keyword));
					case "w" -> booleanBuilder.or(notice.writer.contains(keyword));
				}
			}//end for
			query.where(booleanBuilder);
		}

		query.orderBy(notice.isMain.desc());

		if (sort.equals("asc")) {
			switch (order) {
				case "regDate" -> query.orderBy(notice.regDate.asc());
				case "title" -> query.orderBy(notice.title.asc());
				case "viewCount" -> query.orderBy(notice.viewCount.asc());
			}
		} else {
			switch (order) {
				case "regDate" -> query.orderBy(notice.regDate.desc());
				case "title" -> query.orderBy(notice.title.desc());
				case "viewCount" -> query.orderBy(notice.viewCount.desc());
			}
		}

		JPQLQuery<NoticeListDTO> dtoQuery = query.select(Projections.bean(NoticeListDTO.class,
			notice.nno,
			notice.title,
			notice.content,
			notice.writer,
			notice.viewCount,
			notice.isMain,
			notice.regDate
		));

		this.getQuerydsl().applyPagination(pageable, dtoQuery);

		List<NoticeListDTO> items = dtoQuery.fetch();
		long count = dtoQuery.fetchCount();

		return new PageImpl<>(items, pageable, count);
	}
}
