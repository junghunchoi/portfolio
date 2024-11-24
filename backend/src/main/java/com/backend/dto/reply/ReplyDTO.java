package com.backend.dto.reply;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Schema(description = "댓글 DTO")
public class ReplyDTO {

	@Schema(description = "댓글 번호", example = "1")
	private Long rno;

	@NotNull(message = "게시글 번호는 필수입니다.")
	@Schema(description = "게시글 번호", example = "100", required = true)
	private Long bno;

	@NotEmpty(message = "댓글 내용은 필수입니다.")
	@Schema(description = "댓글 내용", example = "좋은 게시글입니다.", required = true)
	private String replyText;

	@NotEmpty(message = "작성자는 필수입니다.")
	@Schema(description = "댓글 작성자", example = "user123", required = true)
	private String replyer;

	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	@Schema(description = "등록일시", example = "2023-06-30 14:30:00")
	private LocalDateTime regDate;

	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	@Schema(description = "수정일시", example = "2023-06-30 15:00:00")
	private LocalDateTime modDate;
}