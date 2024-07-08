package com.securityserver.service;


import com.securityserver.dto.MemberSecurityDTO;
import com.securityserver.entity.Member;
import com.securityserver.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

/**
 * 사용자 인증을 위한 UserDetailsService 구현 클래스.
 * 사용자 이름을 기반으로 사용자 정보를 로드하고 인증에 필요한 사용자 정보를 제공합니다.
 */
@Log4j2
@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

	private final MemberRepository memberRepository;

	/**
	 * 주어진 사용자 이름에 해당하는 사용자 정보를 로드합니다.
	 *
	 * @param username 사용자 이름
	 * @return 사용자 인증에 필요한 정보를 담고 있는 UserDetails 객체
	 * @throws UsernameNotFoundException 사용자 이름에 해당하는 사용자가 존재하지 않을 경우
	 */
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Member> result = memberRepository.getWithRoles(username);

		if (result.isEmpty()) { //해당 아이디를 가진 사용자가 없다면
			throw new UsernameNotFoundException("username not found...");
		}

		Member member = result.get();

		return new MemberSecurityDTO(
				member.getUsername(),
				member.getPassword(),
				member.getEmail(),
				member.getRoleSet()
				      .stream().map(memberRole -> new SimpleGrantedAuthority("ROLE_" + memberRole.name()))
				      .collect(Collectors.toList())
			);
	}

}