package com.backend.repository;

import com.backend.entity.Strava;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface StravaRepository extends JpaRepository<Strava, Long> {

    @Query("SELECT s from Strava s order by s.startDateLocal desc")
    List<Strava> findStravaTop7(Pageable pageable);
}
