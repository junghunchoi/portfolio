package com.backend.entity;

import com.backend.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;

/**
 * 첨부파일 entity 클래스
 * 추후 구현 예정
 */
@Entity
@Table(name="Files")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "board")
public class Files extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fno;

	@ManyToOne(fetch = FetchType.LAZY)
	private Board board;

	private String fileName;

	private String uploadedFileName;

	private String fileType;

	private int fileSize;

	private String filePath;

}
