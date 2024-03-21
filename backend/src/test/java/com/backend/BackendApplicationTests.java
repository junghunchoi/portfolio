package com.backend;

import com.backend.entity.Member;
import com.backend.entity.MemberRole;
import com.backend.repository.MemberRepository;
import java.util.Optional;
import java.util.stream.IntStream;
import lombok.extern.log4j.Log4j2;
import org.hibernate.procedure.spi.ParameterRegistrationImplementor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Admin;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootTest
@Log4j2
class BackendApplicationTests {

	@Autowired
	private MemberRepository memberRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Test
	public void insertMembers() {

		IntStream.rangeClosed(1,100).forEach(i->{
			Member member = Member.builder()
			                      .username("member" + i)
			                      .password(passwordEncoder.encode("1111"))
			                      .email("email" + i)
			                      .build();

			member.addRole(MemberRole.USER);

			if(i>90){
				member.addRole(MemberRole.ADMIN);
			}
			memberRepository.save(member);
		});
	}

	@Test
	public void testRead() {

		Optional<Member> result = memberRepository.getWithRoles("member99");

		Member member = result.orElseThrow();

		log.info(member);
		log.info(member.getRoleSet());

	}

	@Test
	void contextLoads() {
	}

}
