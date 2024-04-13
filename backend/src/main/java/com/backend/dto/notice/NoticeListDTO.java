package com.backend.dto.notice;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NoticeListDTO {
	private Long nno;

	private String title;

	private String content;

	private int isMain;

	private Long viewCount;

	private String writer;

	private LocalDateTime regDate;

}
