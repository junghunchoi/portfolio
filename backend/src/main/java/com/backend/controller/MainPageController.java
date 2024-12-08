package com.backend.controller;

import com.backend.common.dto.ResultDTO;
import com.backend.service.MainPageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/main")
public class MainPageController {
    private final MainPageService mainPageService;

    @GetMapping("/records")
    public ResponseEntity<Object> getRecords() {
        List<Map<String, Integer>> records = mainPageService.getMainRecords();

        return ResponseEntity.ok(
                ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), records));
    }

}
