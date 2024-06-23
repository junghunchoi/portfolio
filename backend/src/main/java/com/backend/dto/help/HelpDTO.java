package com.backend.dto.help;

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
public class HelpDTO {
	private Long hno;

	@NotEmpty
	@Size(min = 3, max = 100, message = "제목은 3글자이상 100글자 사이여야 합니다.")
	private String title;

	@NotEmpty
	private String content;

	private String answer;

	private int isSecret;

	@NotEmpty
	private String writer;

	private long viewCount;
}
