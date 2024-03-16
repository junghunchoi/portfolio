package com.backend.security;

import com.backend.entity.Member;
import com.backend.repository.MemberRepository;
import com.backend.security.dto.MemberSecurityDTO;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.swing.text.html.Option;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

	private final MemberRepository memberRepository;

//	private final PasswordEncoder passwordEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		log.info("loadUserByUsername : " + username);

		Optional<Member> result = memberRepository.getWithRoles(username);

		if (result.isEmpty()) {// 해당 아이디를 가진사람이 없다면
			throw new UsernameNotFoundException("계정이 존재하지 않습니다.");
		}

		Member member = result.get();

		MemberSecurityDTO memberSecurityDTO = new MemberSecurityDTO(member.getUsername(),
			member.getPassword(), member.getEmail(), member.isDel(), false,
			member.getRoleSet().stream().map(memberRole ->
				new SimpleGrantedAuthority("ROLE_" + memberRole.name())
			).collect(Collectors.toList()));

		log.info("memberSecurityDTO :" + memberSecurityDTO);

		return memberSecurityDTO;
	}
}
