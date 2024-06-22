package com.backend.entity;

import lombok.*;

import jakarta.persistence.*;

/**
 * 카테고리 Entity 클래스
 */
@Entity
@Table(name = "Category")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cno;

	@Column(length = 500, nullable = false)
	private String content;

}
