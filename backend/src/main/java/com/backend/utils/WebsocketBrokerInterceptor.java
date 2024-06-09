package com.backend.utils;

import java.util.Map;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

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
		} else if (StompCommand.SUBSCRIBE == commandType) {
			//sub 시 처리할 코드를 여기서 작성
			log.info("StompCommand.SUBSCRIBE");
			log.info(String.valueOf(headerAccessor.getFirstNativeHeader("Authorization")));
		} else if (StompCommand.DISCONNECT == commandType) {
			log.info("DISCONNECT");
		}
		return message;
	}
}