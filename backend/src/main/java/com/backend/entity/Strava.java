package com.backend.entity;

import com.backend.entity.common.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "Strava")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Strava extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String distance;

    @JsonProperty("start_date_local")
    private String startDateLocal;

    @Embedded
    @JsonProperty("map")
    private Map map;

    public Strava() {
        this(0L, "", "", new Map());
    }

    public Strava(Long id, String distance, String startDateLocal, Map map) {
        this.id = id;
        this.distance = distance;
        this.startDateLocal = startDateLocal;
        this.map = map;
    }

    @Embeddable
    @JsonIgnoreProperties(ignoreUnknown = true)
    @Getter
    public static class Map {
        @JsonProperty("summary_polyline")
        @Lob
        @Column(columnDefinition = "TEXT")
        private String summaryPolyline;

        public Map() {
            this("");
        }

        public Map(String summaryPolyline) {
            this.summaryPolyline = summaryPolyline;
        }
    }
}
