package com.backend.dto.board;

import com.backend.entity.Category;
import java.time.LocalDateTime;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import org.springframework.core.io.Resource;

public class GalleryListDTO {
	private Long bno;

	@NotEmpty
	@Size(min = 3, max = 100)
	private String title;

	@NotEmpty
	private String content;

	@NotEmpty
	private Resource file;

	private LocalDateTime regDate;
	private LocalDateTime modDate;
}
