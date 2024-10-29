package com.securityserver.dto;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import com.securityserver.entity.Member;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.oauth2.core.user.OAuth2User;


@Getter
@Setter
@ToString
public class MemberSecurityDTO extends User implements OAuth2User {

	private final Member member;
	private final Map<String, Object> attributes;
	private final Collection<? extends GrantedAuthority> authorities;

	public MemberSecurityDTO(Member member, Map<String, Object> attributes) {
        super();
        this.member = member;
		this.attributes = attributes;
		this.authorities = Collections.singleton(new SimpleGrantedAuthority("ROLE_USER")); // 기본 권한 설정
	}

	@Override
	public Map<String, Object> getAttributes() {
		return attributes;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getName() {
		// OAuth2 제공자로부터 받은 고유 식별자 또는 사용자 이름 반환
		return member.getId().toString(); // 또는 다른 식별 가능한 필드
	}

	// 추가적으로 필요한 메서드
	public Member getMember() {
		return member;
	}

	public Long getId() {
		return member.getId();
	}
}