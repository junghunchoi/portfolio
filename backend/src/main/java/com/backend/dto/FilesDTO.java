package com.backend.dto;

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
public class FilesDTO {

	private List<MultipartFile> files;

	private String uuid;

	private String fileName;

	private boolean img;

	public String getLink() {

		if (img) {
			return "s_" + uuid + "_" + fileName;
		} else {
			return uuid + "_" + fileName;
		}
	}
}
