//package com.backend.security.handler;
//
//import com.backend.security.dto.MemberSecurityDTO;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.log4j.Log4j2;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
//
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@Log4j2
//@RequiredArgsConstructor
//public class CustomSocialLoginSuccessHandler implements AuthenticationSuccessHandler {
//
//	private final PasswordEncoder passwordEncoder;
//
//	@Override
//	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
//		Authentication authentication) throws IOException, ServletException {
//		MemberSecurityDTO memberSecurityDTO = (MemberSecurityDTO) authentication.getPrincipal();
//
//		String encodePw = memberSecurityDTO.getPassword();
//
//		if (memberSecurityDTO.social() && (memberSecurityDTO.getPassword().equals("1111"))
//			|| passwordEncoder.matches("1111", memberSecurityDTO.getPassword())) {
//			log.info("social user should change password");
//			response.sendRedirect("/member/modify");
//			return;
//		} else {
//			response.sendRedirect("/board/list");
//		}
//	}
//}