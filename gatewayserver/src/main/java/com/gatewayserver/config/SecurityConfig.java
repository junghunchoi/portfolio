package com.gatewayserver.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.ReactiveJwtAuthenticationConverter;
import org.springframework.security.web.server.SecurityWebFilterChain;
import reactor.core.publisher.Mono;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

	/**
	 *  .pathMatchers("/accounts/**").authenticated() 해당 url의 모든 요청은 인증되어야한다.
	 *  .pathMatchers("/accounts/**").hasRole("ACCOUNTS") 해당 권한을 가진 사람만 접근할 수 있다.
	 */

	@Bean
	public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
		return http
				.authorizeExchange(exchanges -> exchanges
						.pathMatchers("/board/**").permitAll()
						.pathMatchers("/auth/**").permitAll() // 인증 서버로의 요청은 모두 허용
						.anyExchange().authenticated() // 다른 모든 요청은 기본적인 인증만 확인
				)
//				.oauth2ResourceServer(OAuth2ResourceServerSpec::jwt) // JWT 토큰 검증
				.csrf(csrf -> csrf.disable())
				.build();
	}


}
