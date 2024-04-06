package com.backend.utils;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import java.io.IOException;
import java.util.Base64;
import org.springframework.core.io.Resource;

/**
 * {@link Resource} 타입의 객체를 JSON으로 직렬화하는 커스텀 직렬화기입니다.
 * {@link Resource}의 내용을 Base64 인코딩된 문자열로 변환하여
 * JSON 스트림에 작성합니다.
 */
public class ResourceSerializer extends JsonSerializer<Resource> {

	/**
	 * 주어진 {@link Resource} 객체를 Base64 인코딩된 문자열로 직렬화하여 JSON 스트림에 작성합니다.
	 *
	 * @param value 직렬화할 {@link Resource} 객체.
	 * @param gen JSON 생성기.
	 * @param serializers 직렬화를 위한 프로바이더.
	 * @throws IOException 파일 읽기 실패 또는 JSON 스트림 작성 실패 시 발생.
	 */
	@Override
	public void serialize(Resource value, JsonGenerator gen, SerializerProvider serializers)
		throws IOException {
		if (value != null && value.exists()) {
			try {
				// 파일의 내용을 바이트 배열로 읽어옵니다.
				byte[] data = value.getInputStream().readAllBytes();
				// 바이트 배열을 Base64 인코딩된 문자열로 변환합니다.
				String encoded = Base64.getEncoder().encodeToString(data);
				// Base64 인코딩된 문자열을 JSON 스트림에 작성합니다.
				gen.writeString(encoded);
			} catch (IOException e) {
				// 파일 읽기 중 오류 처리
				throw new IOException("Could not serialize file to Base64", e);
			}
		} else {
			// 파일이 존재하지 않는 경우, null이나 기본 값을 제공합니다.
			gen.writeNull();
		}
	}
}