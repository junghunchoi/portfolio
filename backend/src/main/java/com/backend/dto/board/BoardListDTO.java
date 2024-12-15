package com.backend.dto.board;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BoardListDTO {

	private Long id;
	private String category;
	private String content;
	private String title;
	private String writer;
	private Long viewCount;
	private Long replyCount;
	private Long fileCount;
	private LocalDateTime regDate;
	private LocalDateTime modDate;
}
