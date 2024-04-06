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
	private String content;
	private String answer;
	private long viewCount;
	private LocalDateTime regDate;
	private String writer;


}
