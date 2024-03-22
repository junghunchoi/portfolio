package com.backend.security.filter;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;

@Log4j2
public class APILoginFilter extends AbstractAuthenticationProcessingFilter {

	public APILoginFilter(String defaultFilterProcessesUrl) {
		super(defaultFilterProcessesUrl);
	}


	@Override
	public Authentication attemptAuthentication(HttpServletRequest request,
		HttpServletResponse response)
		throws AuthenticationException, IOException, ServletException {

		log.info("ApiLoginFilter......");

		if (request.getMethod().equalsIgnoreCase("GET")) {
			log.warn("GET 방식은 지원되지 않습니다.");
			return null;
		}

		Map<String, String> jsonDate = parseRequestJson(request);

		log.info(jsonDate);

		UsernamePasswordAuthenticationToken authenticationToken =
			new UsernamePasswordAuthenticationToken(
				jsonDate.get("username"),
				jsonDate.get("password"));

		return getAuthenticationManager().authenticate(authenticationToken);
	}

	private Map<String, String> parseRequestJson(HttpServletRequest request) {
		//JSON 데이터를 분석해 username,password를 map으로 처리
		try (Reader reader = new InputStreamReader(request.getInputStream())) {
			Gson gson = new Gson();

			return gson.fromJson(reader, Map.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
}
