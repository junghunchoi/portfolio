package com.backend.service;

import com.backend.entity.Strava;
import com.backend.repository.StravaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StravaService {

    private final StravaRepository stravaRepository;

    public List<Strava> getStravaList() {
        Pageable pageable = PageRequest.of(0, 7); // 7개의 행만 조회

        return stravaRepository.findStravaTop7(pageable);
    }
}
