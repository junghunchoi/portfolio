package com.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;


@Getter
@ToString
@Data
public class PageResponseDTO<E> {

	private int page;
	private int size;
	private int total;

	private int start;

	private int end;

	private boolean prev;

	private boolean next;

	private List<E> dtoList;

	private String order;

	private String sort;

	@Builder(builderMethodName = "withAll")
	public PageResponseDTO(PageRequestDTO pageRequestDTO, List<E> dtoList, int total) {

		if (total < 0) {
			return;
		}

		this.page = pageRequestDTO.getPage();
		this.size = pageRequestDTO.getSize();
		this.total = total;
		this.dtoList = dtoList;

		//화면에서의 마지막 번호
		this.end =   (int)(Math.ceil(this.page / 10.0 )) *  10;

		this.start = this.end - 9;

		//데이터의 개수를 계산한 마지막 페이지 번호
		int last =  (int)(Math.ceil((total/(double)size)));

		this.end = Math.min(end, last);

		this.prev = this.start > 1;

		this.next =  total > this.end * this.size;

	}
}
