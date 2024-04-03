package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.reply.ReplyDTO;
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

@Service
@RequiredArgsConstructor
@Log4j2
public class ReplyServiceImpl implements ReplyService{
	private final ReplyRepository replyRepository;
	private final ModelMapper modelMapper;

	@Override
	public Long Register(ReplyDTO replyDTO) {

		Reply reply = modelMapper.map(replyDTO, Reply.class);
		Long rno = replyRepository.save(reply).getRno();
		return rno;
	}

	@Override
	public ReplyDTO read(@Param("rno") Long rno) {

		Optional<Reply> replyOptional = replyRepository.findById(rno);

		Reply reply = replyOptional.orElseThrow();

		return modelMapper.map(reply, ReplyDTO.class);

	}

	@Override
	public void modify(ReplyDTO replyDTO) {

		Optional<Reply> replyOptional = replyRepository.findById(replyDTO.getRno());

		Reply reply = replyOptional.orElseThrow();

		reply.changeText(replyDTO.getReplyText());

		replyRepository.save(reply);
	}

	@Override
	public void remove(Long rno) {
		replyRepository.deleteById(rno);
	}

	@Override
	public PageResponseDTO<ReplyDTO> getListOfBoard(Long bno, PageRequestDTO pageRequestDTO) {

		Pageable pageable = PageRequest.of(pageRequestDTO.getPage() <=0? 0: pageRequestDTO.getPage() -1,
				pageRequestDTO.getSize(),
				Sort.by("rno").ascending());

		Page<Reply> result = replyRepository.listOfBoard(bno, pageable);

		List<ReplyDTO> dtoList =
				result.getContent().stream().map(reply -> modelMapper.map(reply, ReplyDTO.class))
						.collect(Collectors.toList());

		return PageResponseDTO.<ReplyDTO>withAll()
				.pageRequestDTO(pageRequestDTO)
				.items(dtoList)
				.total((int)result.getTotalElements())
				.build();
	}

}
