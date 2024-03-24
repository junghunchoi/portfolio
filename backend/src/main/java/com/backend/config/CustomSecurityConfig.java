package com.backend.config;


import com.backend.security.CustomUserDetailsService;
import com.backend.security.filter.APILoginFilter;
import com.backend.security.filter.RefreshTokenFilter;
import com.backend.security.filter.TokenCheckFilter;
import com.backend.security.handler.ApiLoginSuccessHandler;
import com.backend.security.handler.Custom403Handler;
//import com.backend.security.handler.CustomSocialLoginSuccessHandler;
import com.backend.utils.JWTUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.rememberme.JdbcTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;

import javax.sql.DataSource;

@Log4j2
@Configuration
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled = true) // 필요한 화면에만 보안설정을 할 수있는 어노테이션
public class CustomSecurityConfig {

	private final DataSource dataSource; // 쿠키와 관련된 정보를 테이블로 보관
	private final CustomUserDetailsService userDetailsService;
	private final JWTUtil jwtUtil;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

		log.info("---- security config ---");

		AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(
			AuthenticationManagerBuilder.class);

		authenticationManagerBuilder.userDetailsService(userDetailsService)
		                            .passwordEncoder(passwordEncoder());

		AuthenticationManager authenticationManager = authenticationManagerBuilder.build();

		http.authenticationManager(authenticationManager);

		//ApiLoginFilter
		APILoginFilter apiLoginFilter = new APILoginFilter("/generateToken");
		apiLoginFilter.setAuthenticationManager(authenticationManager);
		http.addFilterBefore(apiLoginFilter, UsernamePasswordAuthenticationFilter.class);

		//ApiLoginSuccessHandler
		ApiLoginSuccessHandler apiLoginSuccessHandler = new ApiLoginSuccessHandler(jwtUtil);
		apiLoginFilter.setAuthenticationSuccessHandler(apiLoginSuccessHandler);

		//api로 시작하는 모든 경로는 tokenfilterchain 동작
		http.addFilterBefore(tokenCheckFilter(jwtUtil, userDetailsService), UsernamePasswordAuthenticationFilter.class);

		//refreshtoken 호출처리
		http.addFilterBefore(new RefreshTokenFilter("/refreshToken", jwtUtil), TokenCheckFilter.class);

		/////////

		http.exceptionHandling().accessDeniedHandler(accessDeniedHandler()); // 403

		http.cors()
		    .and()
		    .csrf()
		    .disable()
		    .sessionManagement()
		    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		    .and()
		    .formLogin()
		    .disable()
		    .httpBasic()
		    .disable()
		    .authorizeRequests()
		    .antMatchers("/swagger-ui/**", "/api/auth/**", "/api/login", "/oauth/**", "api/boards")
		    .permitAll() // 로그인과 관련된 경로는 인증 없이 접근 허용
		    .anyRequest()
		    .authenticated(); // 그 외 모든 요청은 인증 필요

//		http.oauth2Login()
//		    .loginPage("/member/login")
//		    .successHandler(authenticationSuccessHandler());

		return http.build();
	}


	@Bean
	public WebSecurityCustomizer webSecurityCustomizer() {
		/*
		정적 자원(css 등)을 호출할 때 필터가 동작하지 않는다.
		 */

		log.info("--- web config ---");

		return (web) -> web.ignoring()
		                   .requestMatchers(PathRequest.toStaticResources().atCommonLocations());
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public PersistentTokenRepository persistentTokenRepository() {
		JdbcTokenRepositoryImpl repo = new JdbcTokenRepositoryImpl();
		repo.setDataSource(dataSource);

		return repo;
	}

	@Bean
	public AccessDeniedHandler accessDeniedHandler() {
		return new Custom403Handler();
	}

	private TokenCheckFilter tokenCheckFilter(JWTUtil jwtUtil, CustomUserDetailsService userDetailsService) {
		return new TokenCheckFilter(userDetailsService, jwtUtil);
	}

//	@Bean
//	public AuthenticationSuccessHandler authenticationSuccessHandler() {
//		return new CustomSocialLoginSuccessHandler(passwordEncoder());
//	}

//		@Bean
//	public AuthenticationSuccessHandler authenticationSuccessHandler() {
//
//		//		return new CustomSocialLoginSuccessHandler(passwordEncoder());
//	}


}