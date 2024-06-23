package com.backend.dto.board;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Builder
@Data
public class BoardMainDTO{
	private long bno;
	private String title;
	private long replyCount;
	private LocalDateTime regDate;

}
