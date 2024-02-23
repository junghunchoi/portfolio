package com.backend;

import com.backend.entity.Board;
import com.backend.entity.Reply;
import com.backend.repository.BoardRepository;
import com.backend.repository.ReplyRepository;
import com.backend.service.FilesService;
import com.backend.service.ReplyService;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class DataSourceTest {

	@Autowired
	private BoardRepository boardRepository;

	@Autowired
	private ReplyRepository replyRepository;

	@Autowired
	@Qualifier("filesService")
	private FilesService filesService;


	@Test
	public void testInsert() {
		IntStream.range(1, 100)
				.forEach(i -> {
					Board board = Board.builder()
							.bno((long) i)
							.title("title..." + i)
							.content("content..." + i)
							.writer("user" + (i % 10))
							.build();

					log.info(board.toString());
					Board result = boardRepository.save((board));
					log.info("bno:" + result.getBno());
				});
	}

	@Test
	public void insertReply() {
		Long bno = 99L;

		Board board = Board.builder()
				.bno(bno)
				.build();

		Reply reply = Reply.builder()
				.board(board)
				.replyText("댓글내용")
				.replyer("replyer1")
				.build();

		replyRepository.save(reply);
	}

	@Test
	public void testFiles() {
		log.info(filesService.getFilesListByBno(54L));
	}
}
