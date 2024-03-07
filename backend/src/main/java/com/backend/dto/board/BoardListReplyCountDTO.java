package com.backend.dto.board;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BoardListReplyCountDTO {
	private Long bno;
	private String category;
	private String title;
	private String writer;
	private Long viewCount;
	private LocalDateTime regDate;
	private LocalDateTime modDate;
}
