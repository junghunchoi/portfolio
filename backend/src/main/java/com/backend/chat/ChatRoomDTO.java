package com.backend.chat;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatRoomDTO {
	private Long roomID;
	private String sessionID;
}
