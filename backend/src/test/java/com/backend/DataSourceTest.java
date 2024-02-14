package com.backend;

import com.backend.entity.Board;
import com.backend.repository.BoardRepository;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class DataSourceTest {

	@Autowired
	private BoardRepository boardRepository;


	@Test
	public void testInsert(){
		IntStream.range(1,100).forEach(i->{
			Board board = Board.builder()
					.bno((long) i)
					.title("title..."+i)
					.content("content..."+i)
					.writer("user"+(i%10))
					.build();

			log.info(board.toString());
			Board result = boardRepository.save((board));
            log.info("bno:"+result.getBno());
		});
	}
}
