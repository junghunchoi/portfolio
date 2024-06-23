package com.backend.dto.member;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "회원 가입 DTO")
public class MemberJoinDTO {

	@NotBlank(message = "Username cannot be blank")
	@Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
	@Schema(description = "사용자 이름", example = "johndoe", required = true)
	private String userName;

	@NotBlank(message = "Password cannot be blank")
	@Size(min = 6, max = 100, message = "Password must be between 6 and 100 characters")
	@Schema(description = "비밀번호", example = "password123", required = true)
	private String password;

	@NotBlank(message = "Email cannot be blank")
	@Email(message = "Email should be valid")
	@Schema(description = "이메일 주소", example = "johndoe@example.com", required = true)
	private String email;

	@NotBlank(message = "User real name cannot be blank")
	@Schema(description = "사용자 실명", example = "John Doe", required = true)
	private String userRealName;
}