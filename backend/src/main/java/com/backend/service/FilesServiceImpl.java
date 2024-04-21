package com.backend.service;

import com.backend.dto.file.FileDTO;
import com.backend.dto.file.FileResultDTO;
import com.backend.entity.Board;
import com.backend.entity.File;
import com.backend.entity.QBoard;
//import com.backend.entity.QFiles;
import com.backend.entity.QFile;
import com.backend.repository.FilesRepository;
import com.backend.utils.FileUtils;
import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnailator;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Repository
@RequiredArgsConstructor
@Log4j2
public class FilesServiceImpl implements FilesService {

	@Value("${com.backend.upload.path}")
	private String uploadPath;

	private final FilesRepository filesRepository;
	private final ModelMapper modelMapper;
	private final FileUtils fileUtils;
	private final JPAQueryFactory queryFactory;

	@Override
	public List<Map<String, Object>> getFilesListByBno(Long bno) {
		QFile files = QFile.file;
		QBoard board = QBoard.board;

		List<Tuple> results = queryFactory.select(files.fileName, files.uploadedFileName, files.fno)
		                                  .from(files)
		                                  .join(files.board, board)
		                                  .where(board.bno.eq(bno))
		                                  .fetch();

		List<Map<String, Object>> resultMaps = new ArrayList<>();

		for (Tuple tuple : results) {
			Map<String, Object> map = new HashMap<>();
			map.put("fno", tuple.get(files.fno));
			map.put("fileName", tuple.get(files.fileName));
			map.put("uploadedFileName", tuple.get(files.uploadedFileName));
			resultMaps.add(map);
		}

		return resultMaps;
	}

	@Override
	public String registerFiles(FileDTO fileDTO) {
		log.info(fileDTO);
		try {
			File file = File.builder()
			                .fileSize(fileDTO.getFileSize())
			                .board(Board.builder().bno(fileDTO.getBno()).build())
			                .fileName(fileDTO.getFileName())
			                .fileType(fileDTO.getFileType())
			                .uploadedFileName(fileDTO.getUploadedFileName())
			                .filePath(fileDTO.getFilePath())
			                .build();

			filesRepository.save(file);

			return "ok";
		} catch (Exception e) {
			log.error(e.getMessage());

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
					java.io.File thumbFile = new java.io.File(uploadPath,
						"s_" + uuid + "_" + originalName);
					Thumbnailator.createThumbnail(savePath.toFile(), thumbFile, 200, 200);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
			list.add(FileResultDTO.builder().uuid(uuid).fileName(originalName).img(image).build());
		});
		return list;

	}

	@Override
	public String uploadFileNameByBnoAndOriginalFileName(FileDTO fileDTO) {
		QFile file = QFile.file;
		String originalFileName = fileDTO.getFileName();

		return queryFactory.select(file.uploadedFileName)
		                   .from(file)
		                   .where(file.fileName.eq(originalFileName))
		                   .fetchOne();
	}

	@Override
	@Transactional
	public String deleteFileByFileName(String fileName) {

		QFile file = QFile.file;

		queryFactory.delete(file)
		            .where(file.uploadedFileName.eq(fileName))
		            .execute();

		fileUtils.removeFile(fileName);

		return "delete file : " + fileName;
	}

}
