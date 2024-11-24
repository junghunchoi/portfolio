package com.backend.repository;

import com.backend.entity.Category;
import com.backend.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
}
