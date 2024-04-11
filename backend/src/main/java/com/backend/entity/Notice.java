package com.backend.entity;

import com.backend.domain.BaseEntity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "notice")
public class Notice extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long nno;

	private String title;

	private String content;

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

}
