package com.backend.dto.board;

import com.backend.entity.Category;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.bytebuddy.asm.Advice.Local;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BoardDTO {

	private Long bno;

	@NotEmpty
	@Size(min = 3, max = 100)
	private String title;

	@NotEmpty
	private String content;

	@NotEmpty
	private String writer;

	private Category category;

	private LocalDateTime regDate;
	private LocalDateTime modDate;

	private List<String> fileNames;

}
