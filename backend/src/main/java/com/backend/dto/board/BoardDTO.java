package com.backend.dto.board;

import com.backend.entity.Board;
import com.backend.entity.Category;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import java.util.List;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "게시글 DTO")
public class BoardDTO {

	@Schema(description = "게시글 번호", example = "1")
	private Long bno;

	@NotEmpty(message = "제목은 필수 입력값입니다.")
	@Size(min = 3, max = 100, message = "제목은 3글자 이상 100글자 이하여야 합니다.")
	@Schema(description = "게시글 제목", example = "게시글 제목 예시", required = true)
	private String title;

	@NotEmpty(message = "내용은 필수 입력값입니다.")
	@Schema(description = "게시글 내용", example = "게시글 내용 예시", required = true)
	private String content;

	@NotNull(message = "게시판 유형은 필수 입력값입니다.")
	@Min(value = 1, message = "게시판 유형은 1 이상이어야 합니다.")
	@Schema(description = "게시판 유형", example = "1", required = true)
	private Integer boardType;

	@NotEmpty(message = "작성자는 필수 입력값입니다.")
	@Schema(description = "작성자", example = "홍길동", required = true)
	private String writer;

	@Schema(description = "게시글 카테고리")
	private Category category;

	@Schema(description = "조회수", example = "100")
	private long viewCount;

	@Schema(description = "등록일시")
	private LocalDateTime regDate;

	@Schema(description = "수정일시")
	private LocalDateTime modDate;

	@Schema(description = "첨부 파일 목록")
	private List<?> files;
}