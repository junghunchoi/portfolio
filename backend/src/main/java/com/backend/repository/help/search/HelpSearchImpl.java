package com.backend.repository.help.search;

import com.backend.dto.help.HelpListDTO;
import com.backend.entity.Help;
import com.backend.entity.QHelp;
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
 * HelpSearch 인터페이스를 구현한 HelpSearchImpl 클래스.
 * Querydsl을 사용하여 Help 엔티티에 대한 검색 기능을 제공합니다.
 */
@Log4j2
public class HelpSearchImpl extends QuerydslRepositorySupport implements HelpSearch {

	public HelpSearchImpl() {
		super(Help.class);
	}

	/**
	 * Help 리스트를 검색하여 페이징된 결과를 반환합니다.
	 *
	 * @param types    검색할 필드 유형 배열 (t: 제목, c: 내용, w: 작성자)
	 * @param keyword  검색할 키워드
	 * @param order    정렬 기준 필드 (regDate: 등록일, title: 제목, viewCount: 조회수)
	 * @param sort     정렬 방식 (asc: 오름차순, desc: 내림차순)
	 * @param pageable 페이징 정보
	 * @return 검색 결과에 해당하는 HelpListDTO 객체들의 페이징된 결과
	 */
	@Override
	public Page<HelpListDTO> searchHelpList(String[] types, String keyword, String order,
		String sort, Pageable pageable) {
		QHelp help = QHelp.help;

		JPQLQuery<Help> query = from(help);


		if ((types != null && types.length > 0) && keyword != null) {

			BooleanBuilder booleanBuilder = new BooleanBuilder();

			for (String type : types) {

				switch (type) {
					case "t":
						booleanBuilder.or(help.title.contains(keyword));
						break;
					case "c":
						booleanBuilder.or(help.content.contains(keyword));
						break;
					case "w":
						booleanBuilder.or(help.writer.contains(keyword));
						break;
				}
			}//end for
			query.where(booleanBuilder);
		}


		if (sort.equals("asc")) {
			switch (order) {
				case "regDate":
					query.orderBy(help.regDate.asc());
				case "title":
					query.orderBy(help.title.asc());
				case "viewCount":
					query.orderBy(help.viewCount.asc());
			}
		} else {
			switch (order) {
				case "regDate":
					query.orderBy(help.regDate.desc());
				case "title":
					query.orderBy(help.title.desc());
				case "viewCount":
					query.orderBy(help.viewCount.desc());
			}
		}

		JPQLQuery<HelpListDTO> dtoQuery = query.select(Projections.bean(HelpListDTO.class,
			help.hno,
			help.title,
			help.content,
			help.answer,
			help.writer,
			help.isSecret,
			help.regDate
		));

		this.getQuerydsl().applyPagination(pageable, dtoQuery);

		List<HelpListDTO> items = dtoQuery.fetch();
		log.info(items);
		long count = dtoQuery.fetchCount();

		return new PageImpl<>(items, pageable, count);

	}
}
