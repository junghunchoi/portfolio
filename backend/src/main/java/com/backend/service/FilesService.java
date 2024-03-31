package com.backend.service;

import com.backend.dto.file.FileDTO;
import com.backend.entity.File;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface FilesService {


	List<File> getFilesListByBno(Long bno);

	String registerFiles(MultipartFile file);

	String uploadFiles(FileDTO fileDTO);
}
