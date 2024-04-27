package com.backend.entity;


import com.backend.entity.common.BaseEntity;
import lombok.*;

import javax.persistence.*;

/**
 * 댓글 entity 클래스
 * 추후 구현 예정
 */
@Entity
@Table(name = "Reply", indexes = {@Index(name = "idx_reply_board_bno", columnList = "board_bno")})
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "board") // 필요할 때까지 board를 호출하지 않는다. 자원을 아끼기 위한 방법.
public class Reply extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long rno;

	@ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.REMOVE})
	private Board board;

	private String replyText;

	private String replyer;

	public void changeText(String text){
		this.replyText = text;
	}
}
