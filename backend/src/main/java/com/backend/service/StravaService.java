package com.backend.service;

import com.backend.dto.strava.StravaDTO;
import com.backend.entity.Strava;
import com.backend.repository.StravaRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StravaService {

    private final StravaRepository stravaRepository;
    private final ModelMapper modelMapper;

    public List<StravaDTO> getStravaList() {
        Pageable pageable = PageRequest.of(0, 7); // 7개의 행만 조회
        List<Strava> stravaList = stravaRepository.findStrava(pageable);

        return stravaList.stream()
                .map(strava -> modelMapper.map(strava, StravaDTO.class))
                .toList();
    }
}
