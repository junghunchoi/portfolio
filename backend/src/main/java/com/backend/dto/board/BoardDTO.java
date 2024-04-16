package com.backend.dto.board;

import com.backend.entity.Category;
import java.time.LocalDateTime;
import java.util.List;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BoardDTO {

	private Long bno;

	@NotEmpty
	@Size(min = 3, max = 100, message = "제목은 3글자이상 100글자 사이여야 합니다.")
	private String title;

	@NotEmpty
	private String content;

	@NotEmpty
	private int boardType;

	@NotEmpty
	private String writer;

	private Category category;

	private long viewCount;

	private LocalDateTime regDate;
	private LocalDateTime modDate;

	private List<?> files;

}
