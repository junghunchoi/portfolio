package com.backend;


import com.backend.config.QuerydslConfig;
import com.backend.entity.Board;
import com.backend.entity.QBoard;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ActiveProfiles;

import javax.persistence.EntityManager;
import java.util.List;

@DataJpaTest
@ActiveProfiles("test")
@Import(QuerydslConfig.class)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class QuerydslTest {

	@Autowired
	JPAQueryFactory jpaQueryFactory;

	@Test
	void select() {
		QBoard board = new QBoard("board");

		List<Board> b = jpaQueryFactory.select(board)
				.from(board).fetch();

		System.out.println(b.toString());
	}

}
