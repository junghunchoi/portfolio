package com.backend.service;

import com.backend.entity.File;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface FilesService {


	List<File> getFilesListByBno(Long bno);

	String registerFiles(List<MultipartFile> files);
}
