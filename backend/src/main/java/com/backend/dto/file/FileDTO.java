package com.backend.dto.file;

import javax.validation.constraints.NotNull;
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
public class FileDTO {

	private List<MultipartFile> files;

	private Long bno;

	private String fileName;

	private String uploadedFileName;

	private String fileType;

	private long fileSize;

	private String filePath;

	private String resourceConvert;
}
