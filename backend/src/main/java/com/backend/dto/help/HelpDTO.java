package com.backend.dto.help;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "문의 DTO")
public class HelpDTO {

	@Schema(description = "문의 번호", example = "1")
	private Long hno;

	@NotEmpty(message = "제목은 필수 입력값입니다.")
	@Size(min = 3, max = 100, message = "제목은 3글자 이상 100글자 이하여야 합니다.")
	@Schema(description = "문의 제목", example = "로그인에 문제가 있습니다", required = true)
	private String title;

	@NotEmpty(message = "내용은 필수 입력값입니다.")
	@Schema(description = "문의 내용", example = "로그인 버튼을 클릭해도 반응이 없습니다.", required = true)
	private String content;

	@Schema(description = "답변 내용", example = "로그인 기능을 확인해보겠습니다. 잠시만 기다려주세요.")
	private String answer;

	@Min(value = 0, message = "비밀글 여부는 0 또는 1이어야 합니다.")
	@Max(value = 1, message = "비밀글 여부는 0 또는 1이어야 합니다.")
	@Schema(description = "비밀글 여부 (0: 공개, 1: 비밀)", example = "0")
	private int isSecret;

	@NotEmpty(message = "작성자는 필수 입력값입니다.")
	@Schema(description = "작성자", example = "홍길동", required = true)
	private String writer;

	@PositiveOrZero(message = "조회수는 0 이상이어야 합니다.")
	@Schema(description = "조회수", example = "10")
	private long viewCount;
}