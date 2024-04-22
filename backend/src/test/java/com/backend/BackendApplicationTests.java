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



}
