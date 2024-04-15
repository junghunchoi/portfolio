package com.backend.dto.board;

import com.backend.entity.Category;
import com.backend.utils.ResourceSerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.LocalDateTime;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.core.io.Resource;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GalleryListDTO {
	private Long bno;

	@NotEmpty
	@Size(min = 3, max = 100)
	private String title;

	@NotEmpty
	private String content;

	private String fileName;

	private LocalDateTime regDate;
	private LocalDateTime modDate;
}
