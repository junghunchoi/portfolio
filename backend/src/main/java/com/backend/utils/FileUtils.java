package com.backend.utils;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Component;

/**
 * FileUtils는 파일 처리와 관련된 유틸리티 메소드를 제공하는 클래스입니다.
 * 이 클래스는 파일을 읽고, 인코딩하는 기능을 포함하고 있습니다.
 */
@Component
@Log4j2
public class FileUtils {

	@Value("${com.backend.upload.path}")
	private String uploadPath;

	/**
	 * 지정된 파일 이름을 가지는 파일을 리소스로 읽어서 반환합니다.
	 * 파일이 존재하지 않거나 파일이 아닌 경우 예외를 발생시킵니다.
	 *
	 * @param fileName 읽을 파일의 이름입니다.
	 * @return 주어진 파일 이름에 해당하는 리소스입니다.
	 * @throws RuntimeException 파일을 찾을 수 없거나 URL이 잘못된 경우 발생합니다.
	 */
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

	/**
	 * 주어진 리소스를 Base64 문자열로 인코딩합니다.
	 * 리소스에서 데이터를 읽는 데 실패하면 예외를 발생시킵니다.
	 *
	 * @param resource 인코딩할 리소스입니다.
	 * @return 인코딩된 Base64 문자열입니다.
	 * @throws RuntimeException 파일 읽기에 실패한 경우 발생합니다.
	 */
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
