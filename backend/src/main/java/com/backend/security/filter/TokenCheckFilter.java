package com.backend.security.filter;

import com.backend.security.CustomUserDetailsService;
import com.backend.security.exception.AccessTokenException;
import com.backend.security.exception.AccessTokenException.TOKEN_ERROR;
import com.backend.utils.JWTUtil;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;
import jakarta.persistence.Access;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;


/**
 * 토큰 검사를 수행하는 필터. 요청 헤더에서 액세스 토큰을 추출하고 유효성을 검사한 후 인증 정보를 설정합니다.
 */
@Log4j2
@RequiredArgsConstructor
public class TokenCheckFilter extends OncePerRequestFilter {

	private final CustomUserDetailsService userDetailsService;
	private final JWTUtil jwtUtil;

	/**
	 * 토큰 검사를 수행하는 필터의 내부 로직.
	 *
	 * @param request     HTTP 요청 객체
	 * @param response    HTTP 응답 객체
	 * @param filterChain 필터 체인
	 * @throws ServletException 서블릿 예외 발생 시
	 * @throws IOException      I/O 예외 발생 시
	 */
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
		FilterChain filterChain) throws ServletException, IOException {

		String path = request.getRequestURI();
		if (path.startsWith("/api/auth/")
			|| path.startsWith("/api/files/")
			|| path.matches("/api/(galleries|helps)$")
			|| path.startsWith("/api/boards")
			|| path.startsWith("/api/replies")
			|| path.startsWith("/api/notices")
			|| path.startsWith("/api/gs-guide-websocket")
			|| path.startsWith("/api/ws")) {
			filterChain.doFilter(request, response);
			return;
		}


		try {
			Map<String, Object> payload = validateAccessToken(request);

			String userName = (String) payload.get("userName");

			UserDetails userDetails = userDetailsService.loadUserByUsername(userName);

			UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
				userDetails, null, userDetails.getAuthorities());

			SecurityContextHolder.getContext().setAuthentication(authentication);

			filterChain.doFilter(request, response);
		} catch (AccessTokenException accessTokenException) {
			accessTokenException.sendResponseError(response);
		}
	}

	/**
	 * 액세스 토큰의 유효성을 검사하는 메서드.
	 *
	 * @param request HTTP 요청 객체
	 * @return 토큰의 페이로드 정보
	 * @throws AccessTokenException 액세스 토큰 예외 발생 시
	 */
	private Map<String, Object> validateAccessToken(HttpServletRequest request)
		throws AccessTokenException {

		String headerStr = request.getHeader("Authorization");

		if (headerStr == null || headerStr.length() < 8) {
			throw new AccessTokenException(AccessTokenException.TOKEN_ERROR.UNACCEPT);
		}

		//Bearer 생략
		String tokenType = headerStr.substring(0, 6);
		String tokenStr = headerStr.substring(7);

		if (tokenType.equalsIgnoreCase("Bearer") == false) {
			throw new AccessTokenException(AccessTokenException.TOKEN_ERROR.BADTYPE);
		}

		try {
			Map<String, Object> values = jwtUtil.validateToken(tokenStr);
			return values;
		} catch (MalformedJwtException malformedJwtException) {
			log.error("MalformedJwtException----------------------");
			throw new AccessTokenException(AccessTokenException.TOKEN_ERROR.MALFORM);
		} catch (SignatureException signatureException) {
			log.error("SignatureException----------------------");
			throw new AccessTokenException(AccessTokenException.TOKEN_ERROR.BADSIGN);
		} catch (ExpiredJwtException expiredJwtException) {
			log.error("ExpiredJwtException----------------------");
			throw new AccessTokenException(AccessTokenException.TOKEN_ERROR.EXPIRED);
		}
	}
}
