package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.GalleryListDTO;
import com.backend.dto.notice.NoticeDTO;
import com.backend.dto.notice.NoticeListDTO;
import com.backend.dto.reply.ReplyDTO;
import com.backend.entity.Notice;
import com.backend.entity.Reply;
import com.backend.repository.notice.NoticeRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Log4j2
public class NoticeServiceImpl implements NoticeService{

	private final ModelMapper modelMapper;
	private final NoticeService noticeService;
	private final NoticeRepository noticeRepository;

	@Override
	public PageResponseDTO<NoticeListDTO> list(PageRequestDTO pageRequestDTO) {
		String[] types = pageRequestDTO.getTypes();
		String keyword = pageRequestDTO.getKeyword();
		String order = pageRequestDTO.getOrder();
		String sort = pageRequestDTO.getSort();
		Pageable pageable = pageRequestDTO.getPageable(order);

		Page<NoticeListDTO> result = noticeService.list(types, keyword,
			order, sort, pageable);



		return PageResponseDTO.<NoticeListDTO>withAll()
		                      .pageRequestDTO(pageRequestDTO)
		                      .items(result.getContent())
		                      .total((int) result.getTotalElements())
		                      .build();
	}

	@Override
	public Long register(NoticeDTO noticeDTO) {

		Notice notice = modelMapper.map(noticeDTO, Notice.class);


		return noticeRepository.save(notice).getNno();
	}

	@Override
	public NoticeDTO readOne(Long nno) {
		Optional<Notice> noticeOptional = noticeRepository.findById(nno);

		Notice notice = noticeOptional.orElseThrow();

		return modelMapper.map(notice, NoticeDTO.class);
	}

	@Override
	public void modify(NoticeDTO noticeDTO) {
		Optional<Notice> noticeOptional = noticeRepository.findById(replyDTO.getRno());

		Notice notice = noticeOptional.orElseThrow();

//		notice.changeText(NoticeDTO.getReplyText());

		noticeRepository.save(notice);

	}

	@Override
	public void remove(Long nno) {

	}
}
