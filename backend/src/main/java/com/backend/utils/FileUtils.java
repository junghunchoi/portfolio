package com.backend.utils;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.stream.Collectors;
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

	public String encodeResourceToBase64(Resource resource) {
		try {
			// Read all bytes from the resource
			byte[] data = resource.getInputStream().readAllBytes();
			// Encode bytes to Base64
			return Base64.getEncoder().encodeToString(data);
		} catch (IOException e) {
			throw new RuntimeException("Failed to read the file", e);
		}
	}
}
