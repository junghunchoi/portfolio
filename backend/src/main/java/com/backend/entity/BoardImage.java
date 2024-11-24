package com.backend.entity;

import com.backend.entity.common.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
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
