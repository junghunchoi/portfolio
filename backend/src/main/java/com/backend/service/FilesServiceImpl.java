package com.backend.service;

import com.backend.dto.file.FileDTO;
import com.backend.dto.file.FileResultDTO;
import com.backend.entity.File;
import com.backend.entity.QBoard;
//import com.backend.entity.QFiles;
import com.backend.entity.QFile;
import com.backend.repository.FilesRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnailator;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Repository
@RequiredArgsConstructor
@Log4j2
public class FilesServiceImpl implements FilesService{

	@Value("${com.backend.upload.path}")
	private String uploadPath;

	private final FilesRepository filesRepository;
	private final ModelMapper modelMapper;
	private final JPAQueryFactory queryFactory;

	@Override
	public List<File> getFilesListByBno(Long bno) {
		log.info("getFilesListByBno");
		QFile files = QFile.file;
		QBoard board = QBoard.board;

		List<File> results = queryFactory
				.selectFrom(files)
				.join(files.board, board)
				.where(board.bno.eq(bno))
				.fetch();

		return results;
	}

	@Override
	public String registerFiles(FileDTO fileDTO) {

		try {
			File file = modelMapper.map(fileDTO, File.class);
			filesRepository.save(file);

			return "ok";
		} catch (Exception e) {
			log.error(e.getStackTrace());

			return "error";
		}
	}

	@Override
	public List<FileResultDTO> uploadFiles(FileDTO fileDTO) {

		final List<FileResultDTO> list = new ArrayList<>();
		fileDTO.getFiles().forEach(multipartFile -> {
			String originalName = multipartFile.getOriginalFilename();

			String uuid = UUID.randomUUID().toString();
			Path savePath = Paths.get(uploadPath, uuid + "_" + originalName);
			boolean image = false;

			try {
				multipartFile.transferTo(savePath);

				fileDTO.setFileName(originalName);
				fileDTO.setFilePath(uploadPath);
				fileDTO.setFileSize(multipartFile.getSize());
				fileDTO.setFileType(multipartFile.getContentType());
				fileDTO.setUploadedFileName(uuid + "_" + originalName);
				fileDTO.setBno(fileDTO.getBno());

				registerFiles(fileDTO);

				//이미지 파일의 종류라면
				if (Files.probeContentType(savePath).startsWith("image")) {
					image = true;
					java.io.File thumbFile = new java.io.File(uploadPath, "s_" + uuid + "_" + originalName);
					Thumbnailator.createThumbnail(savePath.toFile(), thumbFile, 200, 200);
				}

			} catch (IOException e) {
				e.printStackTrace();
			}

			list.add(FileResultDTO.builder().uuid(uuid).fileName(originalName).img(image).build());
		});
		return list;

	}
}
