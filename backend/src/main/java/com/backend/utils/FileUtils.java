package com.backend.utils;

import com.backend.dto.file.FileDTO;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class FileUtils {

	@Value("${com.backend.upload.path}")
	private String uploadPath;

	public Resource readFileAsResource(String fileName) {
		Path filePath = Paths.get(uploadPath, fileName);
		try {
			Resource resource = new UrlResource(filePath.toUri());
			if (resource.exists() == false || resource.isFile() == false) {
				throw new RuntimeException("file not found : " + filePath.toString());
			}
			return resource;
		} catch (MalformedURLException e) {
			throw new RuntimeException("file not found : " + filePath.toString());
		}
	}
}
