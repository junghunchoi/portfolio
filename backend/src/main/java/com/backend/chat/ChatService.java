package com.backend.chat;

import java.util.List;


public interface ChatService {

	// 특정 대화방 게시물 리스트 조회
	List<ChatDTO> getListofChatByChatRoomID(Long chatRoomID);

	// 특정 대화방 글 등록
	Long registerChat(ChatDTO chatDTO);

}
