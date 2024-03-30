package com.backend.service;

import com.backend.dto.member.MemberJoinDTO;
import com.backend.entity.Member;
import com.backend.security.dto.MemberSecurityDTO;
import java.util.Optional;

public interface MemberService {

	Long register(MemberJoinDTO memberSecurityDTO);

	Optional<Member> readOne(String userName);

	void modify(MemberSecurityDTO memberSecurityDTO);

	void remove(MemberSecurityDTO memberSecurityDTO);


}
