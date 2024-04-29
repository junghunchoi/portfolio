package com.backend.dto.notice;

import java.time.LocalDateTime;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NoticeDTO {
	private Long nno;

	@NotEmpty
	@Size(min = 3, max = 100, message = "제목은 3글자이상 100글자 사이여야 합니다.")
	private String title;

	@NotEmpty
	private String content;

	private int isMain;

	@NotEmpty
	private String writer;

	private Long viewCount =0L;

	private LocalDateTime regDate;

}
