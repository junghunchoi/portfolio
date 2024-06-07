package com.backend.controller;

import com.backend.dto.chat.MessageDto;
import java.security.Principal;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/api/chats")
@Log4j2
@RequiredArgsConstructor
public class ChatController {

	@MessageMapping("/sendMessage")
	@SendTo("/sub/messages")
	public MessageDto sendMessage(MessageDto message) {
		log.info(message.getContent());
		log.info(message.getSender());
		return message;
	}
}
