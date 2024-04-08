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

@Log4j2
public class HelpSearchImpl extends QuerydslRepositorySupport implements HelpSearch {

	public HelpSearchImpl() {
		super(Help.class);
	}

	@Override
	public Page<HelpListDTO> searchHelpList(String[] types, String keyword, String order,
		String sort, Pageable pageable) {
		QHelp help = QHelp.help;

		JPQLQuery<Help> query = from(help);


		if ((types != null && types.length > 0) && keyword != null) {

			BooleanBuilder booleanBuilder = new BooleanBuilder();
			String convertString = '%' + keyword + '%';

			for (String type : types) {

				switch (type) {
					case "t":
						booleanBuilder.or(help.title.contains(convertString));
						break;
					case "c":
						booleanBuilder.or(help.content.contains(convertString));
						break;
					case "w":
						booleanBuilder.or(help.writer.contains(convertString));
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
