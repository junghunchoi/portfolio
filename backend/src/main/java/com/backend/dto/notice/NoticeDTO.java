package com.backend.dto.notice;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.PositiveOrZero;
import java.time.LocalDateTime;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "공지사항 DTO")
public class NoticeDTO {

	@Schema(description = "공지사항 번호", example = "1")
	private Long nno;

	@NotEmpty(message = "제목은 필수 입력값입니다.")
	@Size(min = 3, max = 100, message = "제목은 3글자 이상 100글자 이하여야 합니다.")
	@Schema(description = "공지사항 제목", example = "시스템 점검 안내", required = true)
	private String title;

	@NotEmpty(message = "내용은 필수 입력값입니다.")
	@Schema(description = "공지사항 내용", example = "2023년 7월 1일 오전 2시부터 4시까지 시스템 점검이 있을 예정입니다.", required = true)
	private String content;

	@Min(value = 0, message = "메인 노출 여부는 0 또는 1이어야 합니다.")
	@Max(value = 1, message = "메인 노출 여부는 0 또는 1이어야 합니다.")
	@Schema(description = "메인 노출 여부 (0: 일반, 1: 메인 노출)", example = "1")
	private int isMain;

	@NotEmpty(message = "작성자는 필수 입력값입니다.")
	@Schema(description = "작성자", example = "관리자", required = true)
	private String writer;

	@PositiveOrZero(message = "조회수는 0 이상이어야 합니다.")
	@Schema(description = "조회수", example = "100")
	private Long viewCount = 0L;

	@Schema(description = "등록일시", example = "2023-06-30T10:30:00")
	private LocalDateTime regDate;
}