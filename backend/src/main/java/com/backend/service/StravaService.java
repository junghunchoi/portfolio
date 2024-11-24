package com.backend.service;

import com.backend.dto.PageRequestDTO;
import com.backend.dto.strava.StravaDTO;
import com.backend.entity.Strava;
import com.backend.repository.StravaRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StravaService {

    private final StravaRepository stravaRepository;
    private final ModelMapper modelMapper;

    public List<StravaDTO> getMainStravaList() {
        Pageable pageable = PageRequest.of(0, 7); // 7개의 행만 조회
        List<Strava> stravaList = stravaRepository.findStrava(pageable);

        return stravaList.stream()
                .map(strava -> modelMapper.map(strava, StravaDTO.class))
                .toList();
    }

    public List<StravaDTO> getStravaList(PageRequestDTO pageRequestDTO) {
        List<Strava> stravaList = stravaRepository.findAll();

        return stravaList.stream()
                .map(strava -> StravaDTO.builder()
                        .distance(strava.getDistance())
                        .map(strava.getMap())
                        .startDateLocal(LocalDateTime.parse(strava.getStartDateLocal(), DateTimeFormatter.ISO_DATE_TIME))
                        .regDate(strava.getRegDate())
                        .modDate(strava.getModDate())
                        .build())
                .toList();
    }
}
