package com.securityserver.service;

import com.securityserver.dto.MemberJoinDTO;
import com.securityserver.dto.MemberSecurityDTO;
import com.securityserver.entity.Member;
import java.util.Optional;

import com.securityserver.entity.MemberRole;
import com.securityserver.repository.MemberRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * 회원 관련 서비스를 제공하는 구현 클래스.
 * 회원 등록, 조회, 수정, 삭제 등의 기능을 수행합니다.
 */
@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class MemberServiceImpl implements MemberService {

	private final MemberRepository memberRepository;
	private final PasswordEncoder passwordEncoder;

	/**
	 * 회원을 등록하는 메서드.
	 *
	 * @param memberJoinDTO 회원 가입 정보를 담고 있는 DTO 객체
	 * @return 등록된 회원의 ID
	 */
	@Override
	public Long register(MemberJoinDTO memberJoinDTO) {
		log.info("register");
		Member member = Member.builder()
		                      .username(memberJoinDTO.getUserName())
		                      .password(passwordEncoder.encode(memberJoinDTO.getPassword()))
		                      .email(memberJoinDTO.getEmail())
		                      .userRealName(memberJoinDTO.getUserRealName())
		                      .build();

		member.addRole(MemberRole.USER);

		Long id = memberRepository.save(member).getId();

		return id;
	}

	/**
	 * 주어진 사용자 이름에 해당하는 회원 정보를 조회하는 메서드.
	 *
	 * @param userName 사용자 이름
	 * @return 회원 정보를 담고 있는 Optional 객체
	 */
	@Override
	public Optional<Member> readOne(String userName) {
		return memberRepository.getWithuserName(userName);
	}

	/**
	 * 회원 정보를 수정하는 메서드.
	 *
	 * @param memberSecurityDTO 수정할 회원 정보를 담고 있는 DTO 객체
	 */
	@Override
	public void modify(MemberSecurityDTO memberSecurityDTO) {

	}

	/**
	 * 회원 정보를 삭제하는 메서드.
	 *
	 * @param memberSecurityDTO 삭제할 회원 정보를 담고 있는 DTO 객체
	 */
	@Override
	public void remove(MemberSecurityDTO memberSecurityDTO) {

	}
}
