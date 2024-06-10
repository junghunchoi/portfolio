package com.backend.chat;

import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatDTO {
	private ChatRoom room;
	private String sender;
	private String content;
	private String sessionId;
	private LocalDateTime sendDate;

}
