package com.backend.utils;

import lombok.extern.log4j.Log4j2;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class WebsocketBrokerInterceptor implements ChannelInterceptor {

	@Override
	public Message<?> preSend(Message<?> message, MessageChannel channel) {
		final StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(message);
		final StompCommand commandType = headerAccessor.getCommand();

		if (StompCommand.SEND == commandType) {
			//pub 시 메시지 처리할 경우
			log.info("StompCommand.SEND");
			log.info(headerAccessor.getSessionId());
		} else if (StompCommand.SUBSCRIBE == commandType) {
			//sub 시 처리할 코드를 여기서 작성
			log.info("StompCommand.SUBSCRIBE");
		} else if (StompCommand.DISCONNECT == commandType) {
			log.info("DISCONNECT");
		}
		return message;
	}
}