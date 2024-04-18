package com.backend.entity;

import com.backend.entity.common.BaseEntity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Help extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long hno;

	private String title;

	private String content;

	private String answer;

	private long viewCount;

	private String writer;

	private int isSecret;

	public void updateViewCount(long viewCount) {
		this.viewCount = viewCount;
	}

	public void change(String title, String content, String answer) {
		this.title = title;
		this.content = content;
		this.answer = answer;

	}
}
