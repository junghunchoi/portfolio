package com.backend.repository;

import com.backend.entity.Board;
import com.backend.entity.Files;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilesRepository extends JpaRepository<Files, Long> {
}
