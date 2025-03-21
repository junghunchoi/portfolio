package com.backend.dto;

import java.util.List;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

/**
12121 * 페이지 응답 DTO 클래스. 페이징 처리된 데이터와 관련 정보를 포함합니다.
 *
 * @param <E> 페이지에 포함될 데이터의 타입
 */
@Getter
@ToString
@Data
public class PageResponseDTO<E> {

  private int page;
  private int size;
  private int total;
  private int start;
  private int end;
	private Long lastId;
  private boolean prev;
  private boolean next;
  private List<E> items;
  private String order;
  private String sort;

  /**
   * PageResponseDTO 생성자.
   *
   * @param pageRequestDTO 페이지 요청 DTO
   * @param items          페이지에 포함될 데이터의 리스트
   * @param total          전체 데이터의 개수
   */
  @Builder(builderMethodName = "withAll")
  public PageResponseDTO(PageRequestDTO pageRequestDTO, List<E> items, int total) {
    if (total < 0) {
      return;
    }

    this.page = pageRequestDTO.getPage();
    this.size = pageRequestDTO.getSize();
    this.total = total;
    this.items = items;

    // 화면에서의 마지막 번호
    this.end = (int) (Math.ceil(this.page / 10.0)) * 10;

    this.start = this.end - 9;

    // 데이터의 개수를 계산한 마지막 페이지 번호
    int last = (int) (Math.ceil((total / (double) size)));

    this.end = Math.min(end, last);

    this.prev = this.start > 1;

    this.next = total > this.end * this.size;
  }


}