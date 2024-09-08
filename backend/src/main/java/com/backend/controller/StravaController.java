package com.backend.controller;

import com.backend.common.dto.ResultDTO;
import com.backend.entity.Strava;
import com.backend.service.StravaService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "CRUD REST APIs for Strava", description = "스트라바 API")
@RestController
@RequestMapping("/api/strava")
@Slf4j
@RequiredArgsConstructor
public class StravaController {

    private final StravaService stravaService;

    @GetMapping("/main")
    public ResponseEntity<ResultDTO<Object>> getStravaDataForMainView() {
        List<Strava> stravaList = stravaService.getStravaList();

        return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), stravaList));
    }
}
