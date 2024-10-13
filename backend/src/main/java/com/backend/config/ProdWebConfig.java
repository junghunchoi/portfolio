//package com.backend.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Profile;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//@Profile("prod")
//public class ProdWebConfig implements WebMvcConfigurer {
//	@Override
//	public void addCorsMappings(CorsRegistry registry) {
//			registry.addMapping("/api/**")
//					.allowedOriginPatterns("http://localhost:1542")
//					.allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
//					.allowedHeaders("*")
//					.allowCredentials(true);
//
//		registry.addMapping("/**")
//				.allowedOrigins("http://localhost:8072")
//				.allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
//				.allowedHeaders("*")
//				.allowCredentials(true);
//
//
////		registry.addMapping("/login")
////		        .allowedOrigins("http://localhost:1542")
////		        .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
////		        .allowedHeaders("*")
////		        .allowCredentials(true);
//	}
//}
