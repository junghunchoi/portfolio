package com.backend.chat;

import java.util.Optional;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class ChatRoomServiceImpl implements ChatRoomService{
	private final ModelMapper modelMapper;
	private final ChatRoomRepository chatRoomRepository;


	@Override
	public Long createChatRoom(ChatRoomDTO chatRoomDTO) {
		ChatRoom chatRoom = ChatRoom.builder()
		                            .sessionID(chatRoomDTO.getSessionID())
		                            .build();

		return chatRoomRepository.save(chatRoom).getId();
	}

	@Override
	public void deleteChatRoom(Long chatRoomID) {
		ChatRoom chatRoom = chatRoomRepository.findById(chatRoomID)
		                                      .orElseThrow(() -> new NullPointerException("ChatRoom not found with id: " + chatRoomID));

		chatRoomRepository.delete(chatRoom);
	}
}
