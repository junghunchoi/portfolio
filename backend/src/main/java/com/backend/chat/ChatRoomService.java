package com.backend.chat;

public interface ChatRoomService {

	// 생성
	Long createChatRoom(ChatRoomDTO chatRoomDTO);

	// 삭제
	void deleteChatRoom(Long chatRoomID);
}
