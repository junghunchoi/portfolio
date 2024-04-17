package com.backend.repository;

import com.backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Category 엔티티에 대한 데이터 액세스를 제공하는 리포지토리 인터페이스.
 * JpaRepository를 상속받아 기본적인 CRUD 연산을 지원합니다.
 */
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
