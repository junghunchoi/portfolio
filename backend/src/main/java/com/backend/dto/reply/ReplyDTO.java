package com.backend.dto.reply;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDateTime;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.hibernate.validator.internal.util.privilegedactions.LoadClass;

@Data
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class ReplyDTO {
	private Long rno;

	@NotNull
	private Long bno;

	@NotEmpty
	private String replyText;

	@NotEmpty
	private String replyer;

	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime regDate;

	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime modDate;
}
