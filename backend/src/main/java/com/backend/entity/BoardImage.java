package com.backend.entity;

import com.backend.domain.BaseEntity;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BoardImage extends BaseEntity implements Comparable<BoardImage> {

	@Id
	private String uuid;

	private String fileName;

	private int ord;

	@ManyToOne
	private Board board;


	// @ManyToOne의 순번에 맞게 정렬하기 위함
	@Override
	public int compareTo(BoardImage other) {
		return this.ord - other.ord;
	}
}
