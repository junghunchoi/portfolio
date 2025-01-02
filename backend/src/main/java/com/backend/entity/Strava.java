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
@Getter
@ToString
public class Strava extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String distance;

    private String type;

    private String startDateLocal;

    private StravaMap map;
    private int movingTime;
    private int elapsedTime;
    private float  totalElevationGain;
    private float  averageSpeed;
    private float  maxSpeed;
    private Float  averageHeartrate;
    private Float maxHeartrate;
    private Float averageCadence;

}
