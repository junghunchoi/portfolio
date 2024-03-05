package com.backend.repository;

import com.backend.entity.File;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilesRepository extends JpaRepository<File, Long> {
}
