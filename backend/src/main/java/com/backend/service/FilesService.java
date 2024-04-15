package com.backend.service;

import com.backend.dto.file.FileDTO;
import com.backend.dto.file.FileResultDTO;
import com.backend.entity.File;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface FilesService {


	List<String> getFilesListByBno(Long bno);

	String registerFiles(FileDTO fileDTO);

	List<FileResultDTO> uploadFiles(FileDTO fileDTO);

	String uploadFileNameByBnoAndOriginalFileName(FileDTO fileDTO);


}
