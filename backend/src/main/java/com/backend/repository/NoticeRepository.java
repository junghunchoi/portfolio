package com.backend.repository;

import com.backend.entity.Notice;
import com.backend.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice,Long> {

}
