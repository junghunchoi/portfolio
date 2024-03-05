package com.backend.entity;

import com.backend.domain.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

/**
 * 게시글 entity 클래스
 */
@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Board extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bno;

	@Column(length = 500, nullable = false)
	private String title;

	@Column(length = 2000, nullable = false)
	private String content;

	@Column(length = 50, nullable = false)
	private String writer;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cno")
	private Category category;

	private int viewCount;


	/**
	 * 변경이 가능한 컬럼을 메소드로 처리해 영속성을 관리한다.
	 * @param title
	 * @param content
	 */
	public void change(String title, String content, Category category) {
		this.title = title;
		this.content = content;
		this.category = category;
	}

	/**
	 * 클릭시 조회수를 추가하기 위한 메소드
	 * @param viewCount
	 */
	public void updateViewCount(int viewCount) {
		this.viewCount = viewCount;
	}

}
