package com.backend.service;

import com.backend.entity.Files;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface FilesService {

	List<Files> getFilesListByBno(Long bno);

	String saveFiles(List<MultipartFile> files);
}
