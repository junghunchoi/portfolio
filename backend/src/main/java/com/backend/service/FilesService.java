package com.backend.service;

import com.backend.dto.file.FileDTO;
import com.backend.dto.file.FileResultDTO;
import com.backend.entity.File;
import com.querydsl.core.Tuple;
import java.util.Map;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface FilesService {


	List<Map<String, Object>> getFilesListByBno(Long bno);

	String registerFiles(FileDTO fileDTO);

	List<FileResultDTO> uploadFiles(FileDTO fileDTO);

	String editorUpload(FileDTO fileDTO);

	String uploadFileNameByBnoAndOriginalFileName(FileDTO fileDTO);

	String deleteFileByFileName(String fileName);


}
