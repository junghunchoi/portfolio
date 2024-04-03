package com.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;


@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Log4j2
public class PageRequestDTO {

	@Builder.Default
	private int page = 1;

	@Builder.Default
	private int size = 10;

	private String type; // 검색의 종류 ex)t,c,w ...

	private String keyword;

	private String order;

	private String sort;


	//검색 조건을 문자열에서 배열로 반환
	public String[] getTypes() {
		if (type == null || type.isEmpty()) {
			return null;
		}
		return type.split("");
	}

	//사용하는 pageable 타입을 반환하는 기능도 필요하다.
	public Pageable getPageable(String...props) {
		if (this.sort.equals("asc") ) {
			return PageRequest.of(this.page - 1, this.size, Sort.by(props).ascending());
		}else {
			return PageRequest.of(this.page - 1, this.size, Sort.by(props).descending());
		}
	}


}
