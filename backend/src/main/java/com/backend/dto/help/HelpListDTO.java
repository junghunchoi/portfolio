package com.backend.dto.help;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class HelpListDTO {
	private Long hno;
	private String title;
	private String content;
	private String answer;
	private long viewCount;
	private int isSecret;
	private LocalDateTime regDate;
	private String writer;
}
