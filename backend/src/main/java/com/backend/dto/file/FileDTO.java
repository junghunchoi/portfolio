package com.backend.dto.file;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "파일 업로드 DTO")
public class FileDTO {

	@Schema(description = "업로드할 파일 리스트")
	private List<MultipartFile> files;

	private MultipartFile upload;

	@Schema(description = "연관된 게시글 번호", example = "1")
	private Long bno;

	@Schema(description = "원본 파일명", example = "document.pdf")
	private String fileName;

	@Schema(description = "서버에 저장된 파일명", example = "20230101_123456_document.pdf")
	private String uploadedFileName;

	@Schema(description = "파일 MIME 타입", example = "application/pdf")
	private String fileType;

	@Schema(description = "파일 크기 (바이트)", example = "1048576")
	private long fileSize;

	@Schema(description = "파일 저장 경로", example = "/uploads/2023/01/01/")
	private String filePath;
}
