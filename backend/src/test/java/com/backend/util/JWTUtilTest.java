package com.backend.util;

import com.backend.utils.JWTUtil;
import java.util.Map;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Log4j2
public class JWTUtilTest {

	@Autowired
	private JWTUtil jwtUtil;

	@Test
	public void testGenerate() {
		Map<String, Object> map = Map.of("username", "abced");

		String jwtStr = jwtUtil.generateToken(map, 1);

		log.info(jwtStr);
	}

}
