package com.backend.security.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.Map;


@Getter
@Setter
@ToString
public class MemberSecurityDTO extends User implements OAuth2User {

	private String username;
	private String password;
	private String email;
	private String userRealName;
//	private boolean del = false;
//	private boolean social = false;

	private Map<String, Object> props;

	public MemberSecurityDTO(@JsonProperty("username") String username,
		@JsonProperty("password") String password, String email,
		Collection<? extends GrantedAuthority> authorities) {

		super(username, password, authorities);

		this.username = username;
		this.password = password;
		this.email = email;
//		this.del = del;
//		this.social = social;
	}


	@Override
	public Map<String, Object> getAttributes() {
		return this.getProps();
	}

	@Override
	public String getName() {
		return this.username;
	}


}