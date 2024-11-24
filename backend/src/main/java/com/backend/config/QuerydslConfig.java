package com.backend.config;

import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import jakarta.persistence.EntityManager;

@Configuration
@RequiredArgsConstructor
public class QuerydslConfig {

	@PersistenceContext
	private EntityManager entityManager;

	@Bean
	public JPAQueryFactory jpaQueryFactory() {
		return new JPAQueryFactory(() -> entityManager);
	}
}
