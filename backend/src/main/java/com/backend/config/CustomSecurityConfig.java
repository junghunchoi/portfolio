package com.backend.config;


import com.backend.security.CustomUserDetailsService;
import com.backend.security.filter.APILoginFilter;
import com.backend.security.filter.RefreshTokenFilter;
import com.backend.security.filter.TokenCheckFilter;
import com.backend.security.handler.ApiLoginSuccessHandler;
import com.backend.security.handler.Custom403Handler;
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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.rememberme.JdbcTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;
import javax.sql.DataSource;

/**
 * Spring Security 설정을 위한 Configuration 클래스
 */
@Log4j2
@Configuration
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled = true) // 필요한 화면에만 보안설정을 할 수있는 어노테이션
public class CustomSecurityConfig {

	private final DataSource dataSource; // 쿠키와 관련된 정보를 테이블로 보관
	private final CustomUserDetailsService userDetailsService;
	private final JWTUtil jwtUtil;

	private static final String[] PERMIT_URL_ARRAY = {
		"/swagger-ui/",
		"/api/auth/**",
		"/api/members/",
		"/login",
		"/api/files/**",
		"/api/**"
	};

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		log.info("---- security config ---");

		//AuthenticationManagerBuilder 설정
		AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(
			AuthenticationManagerBuilder.class);

		authenticationManagerBuilder.userDetailsService(userDetailsService)
		                            .passwordEncoder(passwordEncoder());

		//get AuthenticationManager
		AuthenticationManager authenticationManager = authenticationManagerBuilder.build();

		//필터체인에 AuthenticationManager 등록
		http.authenticationManager(authenticationManager);

		//ApiLoginFilter
		APILoginFilter apiLoginFilter = new APILoginFilter("/login");
		apiLoginFilter.setAuthenticationManager(authenticationManager);
		http.addFilterBefore(apiLoginFilter, UsernamePasswordAuthenticationFilter.class);

		//ApiLoginSuccessHandler
		ApiLoginSuccessHandler apiLoginSuccessHandler = new ApiLoginSuccessHandler(jwtUtil);
		apiLoginFilter.setAuthenticationSuccessHandler(apiLoginSuccessHandler);

		//api로 시작하는 모든 경로는 tokenfilterchain 동작
		http.addFilterBefore(tokenCheckFilter(jwtUtil, userDetailsService),
			UsernamePasswordAuthenticationFilter.class);

		//refreshtoken 호출처리
		http.addFilterBefore(new RefreshTokenFilter("/api/refreshToken", jwtUtil),
			TokenCheckFilter.class);

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
		    .antMatchers(PERMIT_URL_ARRAY)
		    .permitAll()
		    .anyRequest()
		    .authenticated();

		http.exceptionHandling().accessDeniedHandler(accessDeniedHandler()); // 403

		return http.build();
	}


	/**
	 * 정적 자원에 대한 보안 설정을 무시하는 WebSecurityCustomizer 빈 생성
	 *
	 * @return WebSecurityCustomizer 객체
	 */
	@Bean
	public WebSecurityCustomizer webSecurityCustomizer() {
		return (web) -> web.ignoring()
		                   .requestMatchers(PathRequest.toStaticResources().atCommonLocations());
	}

	/**
	 * 패스워드 인코더로 BCryptPasswordEncoder 사용
	 *
	 * @return PasswordEncoder 객체
	 */
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	/**
	 * 토큰 저장소로 JdbcTokenRepositoryImpl 사용
	 *
	 * @return PersistentTokenRepository 객체
	 */
	@Bean
	public PersistentTokenRepository persistentTokenRepository() {
		JdbcTokenRepositoryImpl repo = new JdbcTokenRepositoryImpl();
		repo.setDataSource(dataSource);

		return repo;
	}

	/**
	 * 접근 거부 처리를 위한 AccessDeniedHandler로 Custom403Handler 사용
	 *
	 * @return AccessDeniedHandler 객체
	 */
	@Bean
	public AccessDeniedHandler accessDeniedHandler() {
		return new Custom403Handler();
	}

	/**
	 * 토큰 검사를 위한 TokenCheckFilter 생성
	 *
	 * @param jwtUtil            JWTUtil 객체
	 * @param userDetailsService CustomUserDetailsService 객체
	 * @return TokenCheckFilter 객체
	 */
	private TokenCheckFilter tokenCheckFilter(JWTUtil jwtUtil,
		CustomUserDetailsService userDetailsService) {
		return new TokenCheckFilter(userDetailsService, jwtUtil);
	}

}