package com.backend.dto.member;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberJoinDTO {

	@NotBlank(message = "Username cannot be blank")
	@Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
	private String userName;

	@NotBlank(message = "Password cannot be blank")
	@Size(min = 6, max = 100, message = "Password must be between 6 and 100 characters")
	private String password;

	@NotBlank(message = "Email cannot be blank")
	@Email(message = "Email should be valid")
	private String email;

	@NotBlank(message = "User real name cannot be blank")
	private String userRealName;

}
