package com.backend.entity;

import com.backend.entity.common.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "Strava")
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@ToString
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
