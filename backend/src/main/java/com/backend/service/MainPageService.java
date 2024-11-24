package com.backend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class MainPageService {
    private final BoardService boardService;

    public List<Map<String, Integer>> getMainRecords() {
        List<Map<String, Integer>> records = boardService.getMainPageRecords();
        return records;
    }
}
