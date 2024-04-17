package com.backend.repository;

import com.backend.entity.Member;
import java.util.Optional;
import javax.persistence.Entity;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MemberRepository extends JpaRepository<Member, String> {

	@EntityGraph(attributePaths = "roleSet")
	@Query("select m from Member m where m.username = :username")
	Optional<Member> getWithRoles(@Param("username") String username);

	@EntityGraph(attributePaths = "roleSet")
	@Query("select m from Member m where m.username = :username")
	Optional<Member> getWithuserName(String username);

	@EntityGraph(attributePaths = "roleSet")
	Optional<Member> findByEmail(String email);

	@Modifying
	@Transactional
	@Query("update Member m set m.password = :password where m.username = :username")
	void updatePassword(@Param("password") String password, @Param("username") String username);
}