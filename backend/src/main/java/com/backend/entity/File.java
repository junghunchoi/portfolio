package com.backend.entity;

import com.backend.entity.common.BaseEntity;
import lombok.*;

import jakarta.persistence.*;

/**
 * 첨부파일 entity 클래스
 * 추후 구현 예정
 */
@Entity
@Table(name="File")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "board")
public class File extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long fno;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "board_bno")
	private Board board;

	private String fileName;

	private String uploadedFileName;

	private String fileType;

	private long fileSize;

	private String filePath;

}
