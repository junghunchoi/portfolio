package com.backend;

import com.backend.entity.File;
import com.backend.repository.FilesRepository;
import com.backend.service.FilesServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;

@ExtendWith(SpringExtension.class)
@Log4j2
public class FilesServiceTest {
	@Mock
	private FilesRepository filesRepository; // FilesRepository는 FilesService 구현체에서 사용될 것으로 가정

	@InjectMocks
	private FilesServiceImpl filesService; // FilesServiceImpl은 FilesService의 구현체

	@Test
	public void testGetFilesListByBno() {
		// given
		Long bno = 54L;

		// when
		List<File> result = filesService.getFilesListByBno(bno);

		// then
		log.info(result);
	}
}
