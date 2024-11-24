package com.backend.chat;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Chat {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "room_id")
	private ChatRoom room;

	private String sender;

	private String content;
	private String sessionId;

	@CreatedDate
	@Column(updatable = false)
	private LocalDateTime sendDate;
}