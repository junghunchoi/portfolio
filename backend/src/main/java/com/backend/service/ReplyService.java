package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.reply.ReplyDTO;

public interface ReplyService {
	Long Register(ReplyDTO replyDTO);

	ReplyDTO read(Long rno);

	void modify(ReplyDTO replyDTO);

	void remove(Long rno);

	PageResponseDTO<ReplyDTO> getListOfBoard(Long bno, PageRequestDTO pageRequestDTO);
}
