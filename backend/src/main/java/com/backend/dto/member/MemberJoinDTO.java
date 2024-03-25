package com.backend.dto.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberJoinDTO {
	private String username;
	private String password;
	private String email;
	private String userRealName;
	private boolean del;
	private boolean social;

}
