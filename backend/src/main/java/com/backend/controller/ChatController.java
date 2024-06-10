package com.backend.controller;

import com.backend.chat.ChatDTO;
import com.backend.chat.ChatRoomDTO;
import com.backend.chat.ChatRoomService;
import com.backend.chat.ChatService;
import com.backend.dto.ResultDTO;
import com.backend.dto.chat.MessageDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/chats")
@Log4j2
@RequiredArgsConstructor
public class ChatController {

	private final ChatService chatService;
	private final ChatRoomService chatRoomService;

	@SubscribeMapping("/sub/messages")
	public void handleSubscribe(StompHeaderAccessor headerAccessor) {
		log.info("Client subscribed to /sub/messages");
		log.info("Session ID: " + headerAccessor.getSessionId());

		// 구독 시 필요한 로직 수행
		ChatRoomDTO chatRoomDTO = ChatRoomDTO.builder()
		                                     .sessionID(headerAccessor.getSessionId())
		                                     .build();
		chatRoomService.createChatRoom(chatRoomDTO);
	}

	@MessageMapping("/sendMessage")
	@SendTo("/sub/messages")
	public String sendMessage(MessageDto message, StompHeaderAccessor headerAccessor) {
		log.info(message.getContent());
		log.info(message.getSender());
		log.info(headerAccessor.getSessionId());
		log.info(headerAccessor.getCommand());
		if (headerAccessor.getCommand() == StompCommand.SEND) {
			ChatDTO chatDTO = ChatDTO.builder()
			                         .sender(message.getSender())
			                         .content(message.getContent())
			                         .build();
			chatService.registerChat(chatDTO);
		} else if (headerAccessor.getCommand() == StompCommand.SUBSCRIBE) {
			log.info("tq");
			ChatRoomDTO chatRoomDTO = ChatRoomDTO.builder()
			                                     .sessionID(headerAccessor.getSessionId())
			                                     .build();
			chatRoomService.createChatRoom(chatRoomDTO);
		}

		return "메세지입니다";
	}

	@PostMapping("/room")
	public ResponseEntity<ResultDTO<Object>> createChatRoom(StompHeaderAccessor headerAccessor) {
		ChatRoomDTO chatRoomDTO = ChatRoomDTO.builder()
		                                     .sessionID(headerAccessor.getSessionId())
		                                     .build();
		Long chatroomID = chatRoomService.createChatRoom(chatRoomDTO);

		return ResponseEntity.ok().body(ResultDTO.res(HttpStatus.OK, "채팅방 생성 성공", chatroomID));
	}
}
