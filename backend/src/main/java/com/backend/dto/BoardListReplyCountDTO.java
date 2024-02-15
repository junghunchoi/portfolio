package com.backend.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BoardListReplyCountDTO {
	private Long bno;
	private String category;
	private String title;
	private String writer;
	private int viewCount;
	private LocalDateTime regDate;
	private LocalDateTime modDate;
	private Long replyCount;
}
