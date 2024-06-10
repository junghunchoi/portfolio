package com.backend.chat;

import java.util.List;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class ChatServiceImpl implements ChatService{
	private final ModelMapper modelMapper;
	private final ChatRepository chatRepository;


	@Override
	public List<ChatDTO> getListofChatByChatRoomID(Long chatRoomID) {
		return chatRepository.findByRoomIdOrderBySendDateDesc(chatRoomID);
	}

	@Override
	public Long registerChat(ChatDTO chatDTO) {
		Chat chat = modelMapper.map(chatDTO, Chat.class);

		return chatRepository.save(chat).getId();
	}
}
