package com.securityserver.dto;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
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

	private String username;
	private String password;
	private String email;
	private String userRealName;

	private Map<String, Object> props;

	@JsonCreator
	public MemberSecurityDTO(@JsonProperty("username") String username,
							 @JsonProperty("password") String password,
							 @JsonProperty("email") String email,
							 @JsonProperty("authorities") Collection<? extends GrantedAuthority> authorities) {

		super(username,
				password,
				authorities != null ? authorities : Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER")));

		this.username = username;
		this.password = password;
		this.email = email;
		this.props = new HashMap<>();
	}

	// 기본 생성자 추가
	public MemberSecurityDTO() {
		super("default", "default", Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER")));
		this.props = new HashMap<>();
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