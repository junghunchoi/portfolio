package com.backend.chat;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {
	List<ChatDTO> findByRoomIdOrderBySendDateDesc(Long chatRoomID);
}
