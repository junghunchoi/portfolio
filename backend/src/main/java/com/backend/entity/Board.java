package com.backend.entity;

import com.backend.domain.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import lombok.*;

import javax.persistence.*;
import org.hibernate.annotations.BatchSize;

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

	@Column(nullable = false)
	private int boardType;

	@Column(length = 500, nullable = false)
	private String title;

	@Column(length = 2000, nullable = false)
	private String content;

	@Column(length = 50, nullable = false)
	private String writer;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cno")
	private Category category;

	@OneToMany(mappedBy = "board", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<File> files;

	private long viewCount;

//	@OneToMany(mappedBy = "board", cascade = {
//		CascadeType.ALL}, fetch = FetchType.LAZY, orphanRemoval = true)
//	@Builder.Default
//	@BatchSize(size = 20)
//	private Set<BoardImage> imageSet = new HashSet<>();


	/**
	 * 변경이 가능한 컬럼을 메소드로 처리해 영속성을 관리한다.
	 *
	 * @param title
	 * @param content
	 * @Param category
	 */
	public void change(String title, String content, Category category) {
		this.title = title;
		this.content = content;
		this.category = category;
	}

	/**
	 * 클릭시 조회수를 추가하기 위한 메소드
	 *
	 * @param viewCount
	 */
	public void updateViewCount(long viewCount) {
		this.viewCount = viewCount;
	}

}
