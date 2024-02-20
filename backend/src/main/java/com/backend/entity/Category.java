package com.backend.entity;

import lombok.*;

import javax.persistence.*;

/**
 * 카테고리 Entity 클래스
 */
@Entity
@Table(name = "Category")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "board")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cno;

	@ManyToOne(fetch = FetchType.LAZY)
	private Board board;

	@Column(length = 500, nullable = false)
	private String content;

}
