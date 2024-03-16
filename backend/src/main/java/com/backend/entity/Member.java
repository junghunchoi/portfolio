package com.backend.entity;

/**
 * 사용자 entity 클래스
 * 추후 구현 예정
 */
import com.backend.domain.BaseEntity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import lombok.*;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "roleSet")
public class Member extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String username;
	private String password;
	private String email;
	private boolean del;

	private boolean social;

	@ElementCollection(fetch = FetchType.LAZY)
	@Builder.Default
	private Set<MemberRole> roleSet = new HashSet<>();

	public void changePassword(String mpw ){
		this.password = password;
	}

	public void changeEmail(String email){
		this.email = email;
	}

	public void changeDel(boolean del){
		this.del = del;
	}

	public void addRole(MemberRole memberRole){
		this.roleSet.add(memberRole);
	}

	public void clearRoles() {
		this.roleSet.clear();
	}

	public void changeSocial(boolean social){this.social = social;}
}