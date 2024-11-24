//package com.backend.service;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import java.util.ArrayList;
//import java.util.LinkedHashMap;
//import java.util.UUID;
//import jakarta.annotation.PostConstruct;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//@RequiredArgsConstructor
//@Service
//public class ChatService {
//	private final ObjectMapper objectMapper;
//	private Map<String, ChatRoom> chatRooms;
//
//	@PostConstruct
//	private void init() {
//		chatRooms = new LinkedHashMap<>();
//	}
//
//	public List<ChatRoom> findAllRoom() {
//		return new ArrayList<>(chatRooms.values());
//	}
//
//	public ChatRoom findRoomById(String roomId) {
//		return chatRooms.get(roomId);
//	}
//
//	public ChatRoom createRoom(String name) {
//		String randomId = UUID.randomUUID().toString();
//		ChatRoom chatRoom = ChatRoom.builder()
//		                            .roomId(randomId)
//		                            .name(name)
//		                            .build();
//		chatRooms.put(randomId, chatRoom);
//		return chatRoom;
//	}
//}
