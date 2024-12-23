package com.backend.entity;

import com.backend.entity.common.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Notice extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long nno;

	private String title;

	private String content;

	private String writer;

	private int isMain;

	private Long viewCount;

	/**
	 * 클릭시 조회수를 추가하기 위한 메소드
	 *
	 * @param viewCount
	 */
	public void updateViewCount(long viewCount) {
		this.viewCount = viewCount;
	}

	public void change(String title, String content, int isMain) {
		this.title = title;
		this.content = content;
		this.isMain = isMain;
	}

}
