package com.backend.dto.strava;

import com.backend.entity.StravaMap;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StravaDTO {
    @JsonProperty("distance")
    private String distance;

    @JsonProperty("map")
    private StravaMap map;

    @JsonProperty("modDate")
    private LocalDateTime modDate;

    @JsonProperty("type")
    private LocalDateTime type;

    @JsonProperty("regDate")
    private LocalDateTime regDate;

//    @JsonProperty("start_date_local")
    private LocalDateTime startDateLocal;


}
