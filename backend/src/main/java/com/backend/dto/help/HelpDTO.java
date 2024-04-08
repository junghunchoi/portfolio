package com.backend.dto.help;

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

	private String title;

	private String content;

	private String answer;

	private int isSecret;

	private long viewCount;
}
