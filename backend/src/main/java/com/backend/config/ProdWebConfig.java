package com.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@Profile("prod")
public class ProdWebConfig implements WebMvcConfigurer {
	// ip 주소는 aws ip 주소입니다.
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/api/**")
		        .allowedOrigins("http://13.211.172.156:1542")
		        .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
		        .allowedHeaders("*")
		        .allowCredentials(true);


		registry.addMapping("/login")
		        .allowedOrigins("http://13.211.172.156:1542")
		        .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
		        .allowedHeaders("*")
		        .allowCredentials(true);
	}
}
