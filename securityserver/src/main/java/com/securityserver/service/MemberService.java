package com.securityserver.service;


import com.securityserver.dto.MemberJoinDTO;
import com.securityserver.dto.MemberSecurityDTO;
import com.securityserver.entity.Member;
import java.util.Optional;

public interface MemberService {

	Long register(MemberJoinDTO memberSecurityDTO);

	Optional<Member> readOne(String userName);

	void modify(MemberSecurityDTO memberSecurityDTO);

	void remove(MemberSecurityDTO memberSecurityDTO);

}
