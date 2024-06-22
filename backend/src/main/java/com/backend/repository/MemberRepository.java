package com.backend.repository;

import com.backend.entity.Member;
import java.util.Optional;
import jakarta.persistence.Entity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * Member 엔티티에 대한 데이터 액세스를 제공하는 리포지토리 인터페이스.
 * JpaRepository를 상속받아 기본적인 CRUD 연산을 지원합니다.
 */
public interface MemberRepository extends JpaRepository<Member, String> {

	/**
	 * 주어진 username에 해당하는 Member 엔티티와 연관된 Role 엔티티를 함께 조회합니다.
	 *
	 * @param username 조회할 Member의 username
	 * @return Member 엔티티를 담고 있는 Optional 객체
	 */
	@EntityGraph(attributePaths = "roleSet")
	@Query("select m from Member m where m.username = :username")
	Optional<Member> getWithRoles(@Param("username") String username);

	/**
	 * 주어진 username에 해당하는 Member 엔티티와 연관된 Role 엔티티를 함께 조회합니다.
	 *
	 * @param username 조회할 Member의 username
	 * @return Member 엔티티를 담고 있는 Optional 객체
	 */
	@EntityGraph(attributePaths = "roleSet")
	@Query("select m from Member m where m.username = :username")
	Optional<Member> getWithuserName(@Param("username") String username);

	/**
	 * 주어진 email에 해당하는 Member 엔티티와 연관된 Role 엔티티를 함께 조회합니다.
	 *
	 * @param email 조회할 Member의 email
	 * @return Member 엔티티를 담고 있는 Optional 객체
	 */
	@EntityGraph(attributePaths = "roleSet")
	Optional<Member> findByEmail(String email);

	/**
	 * 주어진 username에 해당하는 Member 엔티티의 password를 업데이트합니다.
	 *
	 * @param password 업데이트할 password
	 * @param username 업데이트할 Member의 username
	 */
	@Modifying
	@Transactional
	@Query("update Member m set m.password = :password where m.username = :username")
	void updatePassword(@Param("password") String password, @Param("username") String username);
}