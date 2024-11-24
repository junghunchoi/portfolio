package com.backend.chat;

import java.time.LocalDateTime;
import java.util.List;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class ChatServiceImpl implements ChatService {

	private final ModelMapper modelMapper;
	private final ChatRepository chatRepository;


	@Override
	public List<ChatDTO> getListofChatByChatRoomID(Long chatRoomID) {
		return chatRepository.findByRoomIdOrderBySendDateDesc(chatRoomID);
	}

	@Override
	public Long registerChat(ChatDTO chatDTO) {
		chatDTO.setSendDate(LocalDateTime.now());
		Chat chat = Chat.builder()
		                .content(chatDTO.getContent())
		                .room(ChatRoom.builder().id(chatDTO.getRoom().getId()).build())
		                .sender(chatDTO.getSender())
		                .sendDate(LocalDateTime.now())
		                .build();

		return chatRepository.save(chat).getId();
	}
}
