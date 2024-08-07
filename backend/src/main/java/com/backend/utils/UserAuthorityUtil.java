//package com.backend.utils;
//
//import java.util.Collection;
//import lombok.extern.log4j.Log4j2;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Component;
//
//@Component
//@Log4j2
//public class UserAuthorityUtil {
//	public String getUserAuthority() {
//		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//		if (authentication != null && authentication.getPrincipal() instanceof UserDetails) {
//			UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//			Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
//
//			for (GrantedAuthority authority : authorities) {
//				if (authority.getAuthority().equals("ROLE_ADMIN")) {
//					return "ROLE_ADMIN";
//				}
//			}
//		}
//		return "ROLE_USER";
//	}
//}
