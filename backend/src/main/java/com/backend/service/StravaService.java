package com.backend.service;

import com.backend.entity.Strava;
import com.backend.repository.StravaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StravaService {

    private final StravaRepository stravaRepository;


}
