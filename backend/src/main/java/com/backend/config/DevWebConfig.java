package com.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@Profile("dev")
public class DevWebConfig implements WebMvcConfigurer {
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/api/**")
				.allowedOrigins("http://localhost:1542")
				.allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH",  "OPTIONS")
				.allowedHeaders("*")
				.allowCredentials(true);


		registry.addMapping("/login")
		        .allowedOrigins("http://localhost:1542")
		        .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
		        .allowedHeaders("*")
		        .allowCredentials(true);

		registry.addMapping("/api/ws/**")
		        .allowedOrigins("http://localhost:1542")
		        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
		        .allowCredentials(true)
		        .maxAge(3600);

	}

}

