package com.backend;

import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableJpaAuditing
@EnableCaching
@Slf4j
public class BackendApplication {

	@Autowired
	private Environment env;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@PostConstruct
	public void logMessage() {
		log.info("== datasource : "+env.getProperty("spring.datasource.url") + " ==");
	}

}
