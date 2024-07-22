package com.securityserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableEureka
@EnableResourceServer
@EnableAuthorizationServer
public class SecurityserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecurityserverApplication.class, args);
	}

}
