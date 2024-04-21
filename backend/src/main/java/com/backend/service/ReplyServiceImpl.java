package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.reply.ReplyDTO;
import com.backend.entity.Board;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.backend.entity.Reply;
import com.backend.repository.ReplyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

/**
 * 댓글 관련 비즈니스 로직을 처리하는 서비스 구현 클래스입니다.
 *
 * @author 최정훈
 * @version 1
 * @since 2024.04.20
 */
@Service
@RequiredArgsConstructor
@Log4j2
public class ReplyServiceImpl implements ReplyService {

	private final ReplyRepository replyRepository;
	private final ModelMapper modelMapper;

	/**
	 * 새로운 댓글을 등록합니다.
	 *
	 * @param replyDTO 등록할 댓글 정보를 담은 DTO 객체
	 * @return 등록된 댓글의 식별자 (rno)
	 */
	@Override
	public Long Register(ReplyDTO replyDTO) {
		try {
			log.info("-- ReplyServiceImpl Register -- ");
			Reply reply = modelMapper.map(replyDTO, Reply.class);

			return replyRepository.save(reply).getRno();
		} catch (Exception e) {
			log.info(e.getMessage());
		}
		return null;
	}

	/**
	 * 특정 댓글을 조회합니다.
	 *
	 * @param rno 조회할 댓글의 식별자
	 * @return 조회된 댓글 정보를 담은 DTO 객체
	 */
	@Override
	public ReplyDTO read(@Param("rno") Long rno) {

		Optional<Reply> replyOptional = replyRepository.findById(rno);

		Reply reply = replyOptional.orElseThrow();

		return modelMapper.map(reply, ReplyDTO.class);

	}

	/**
	 * 댓글 정보를 수정합니다.
	 *
	 * @param replyDTO 수정할 댓글 정보를 담은 DTO 객체
	 */
	@Override
	public void modify(ReplyDTO replyDTO) {

		Optional<Reply> replyOptional = replyRepository.findById(replyDTO.getRno());

		Reply reply = replyOptional.orElseThrow();

		reply.changeText(replyDTO.getReplyText());

		replyRepository.save(reply);
	}

	/**
	 * 특정 댓글을 삭제합니다.
	 *
	 * @param rno 삭제할 댓글의 식별자
	 */
	@Override
	public void remove(Long rno) {
		replyRepository.deleteById(rno);
	}

	/**
	 * 특정 게시물에 속한 댓글 목록을 페이징 처리하여 조회합니다.
	 *
	 * @param bno 게시물의 식별자
	 * @param pageRequestDTO 페이징 요청 정보를 담은 DTO 객체
	 * @return 페이징 처리된 댓글 목록을 담은 DTO 객체
	 */
	@Override
	public PageResponseDTO<ReplyDTO> getListOfBoard(Long bno, PageRequestDTO pageRequestDTO) {

		Pageable pageable = PageRequest.of(
			pageRequestDTO.getPage() <= 0 ? 0 : pageRequestDTO.getPage() - 1,
			pageRequestDTO.getSize(),
			Sort.by("rno").ascending());

		Page<Reply> result = replyRepository.listOfBoard(bno, pageable);

		List<ReplyDTO> dtoList =
			result.getContent().stream().map(reply -> modelMapper.map(reply, ReplyDTO.class))
			      .collect(Collectors.toList());

		return PageResponseDTO.<ReplyDTO>withAll()
		                      .pageRequestDTO(pageRequestDTO)
		                      .items(dtoList)
		                      .total((int) result.getTotalElements())
		                      .build();
	}
}
