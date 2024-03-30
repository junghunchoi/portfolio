package com.backend.service;

import com.backend.dto.member.MemberJoinDTO;
import com.backend.entity.Member;
import com.backend.repository.MemberRepository;
import com.backend.security.dto.MemberSecurityDTO;
import java.util.Optional;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class MemberServiceImpl implements MemberService{

	private final MemberRepository memberRepository;
	private final PasswordEncoder passwordEncoder;

	@Override
	public Long register(MemberJoinDTO memberJoinDTO) {
		Member member = Member.builder()
		                      .username(memberJoinDTO.getUsername())
		                      .password(passwordEncoder.encode(memberJoinDTO.getPassword()))
		                      .email(memberJoinDTO.getEmail())
		                      .userRealName(memberJoinDTO.getUserRealName())
		                      .build();

		Long id = memberRepository.save(member).getId();

		return id;
	}

	@Override
	public Optional<Member> readOne(String userName) {

		return memberRepository.getWithuserName(userName);
	}

	@Override
	public void modify(MemberSecurityDTO memberSecurityDTO) {

	}

	@Override
	public void remove(MemberSecurityDTO memberSecurityDTO) {

	}
}
