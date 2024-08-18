package com.gatewayserver;

import io.github.resilience4j.circuitbreaker.CircuitBreakerConfig;
import io.github.resilience4j.timelimiter.TimeLimiterConfig;

import java.time.Duration;
import java.time.LocalDateTime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.circuitbreaker.resilience4j.ReactiveResilience4JCircuitBreakerFactory;
import org.springframework.cloud.circuitbreaker.resilience4j.Resilience4JConfigBuilder;
import org.springframework.cloud.client.circuitbreaker.Customizer;
import org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;
import org.springframework.cloud.gateway.filter.ratelimit.RedisRateLimiter;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import reactor.core.publisher.Mono;

@SpringBootApplication
public class GatewayserverApplication {

    public static void main(String[] args) {
        SpringApplication.run(GatewayserverApplication.class, args);
    }

    @Bean
    public RouteLocator RouteConfig(RouteLocatorBuilder routeLocatorBuilder) {
        return routeLocatorBuilder.routes()
                .route(p -> p
                        .path("/board/**") // "/board/"로 오는 모든 요청을 라우팅한다.
                        .filters(f -> f.rewritePath("/board/(?<segment>.*)", "/${segment}") // "/board/"다음에 오는 경로를 추출하여 대상 서비스로 전달할 떄 "/board"를 제거한다.
                                .addResponseHeader("X-Response-Time", LocalDateTime.now().toString()) // 헤더에 요청시간을 넣는다.
//                                .requestRateLimiter(config -> config.setRateLimiter(redisRateLimiter()) // 레디스를 이용해 요청속도를 제한한다.
//                                        .setKeyResolver(userKeyResolver()))
                                .retry(retryConfig -> retryConfig.setRetries(3)
                                        .setMethods(HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE, HttpMethod.PATCH, HttpMethod.OPTIONS)
                                        .setBackoff(Duration.ofMillis(100), Duration.ofMillis(1000), 2, true))
                                .circuitBreaker(config -> config.setName("boardsCircuitBreaker") // boardsCircuitBreaker라는 이름으로 서킷 브레이커를 설정한다.
                                        .setFallbackUri("forward:/contactSupport"))) // 서비스 장애시 해당 url로 포워딩한다.
                        .uri("lb://BOARD")) // board라는 서비스로 요청을 라우팅한다.
                .build();
    }

    // yml의 설정대신 자바코드로 설정값을 지정하기 위한 메소드
    @Bean
    public Customizer<ReactiveResilience4JCircuitBreakerFactory> defaultCustomizer() {
        return factory -> factory.configureDefault(id -> new Resilience4JConfigBuilder(id)
                .circuitBreakerConfig(CircuitBreakerConfig.ofDefaults())
                // 최대 4초기다리게 설정한코드
                .timeLimiterConfig(TimeLimiterConfig.custom().timeoutDuration(Duration.ofSeconds(4)).build()).build());
    }

    // 요청처리 갯수에 필요한 셋팅을 한다.
//    @Bean
//    public RedisRateLimiter redisRateLimiter() {
//        return new RedisRateLimiter(1, 1, 1);
//    }

    // 기본설정으로 헤더의 유저에 따라 요청수를 관리한다.
    @Bean
    KeyResolver userKeyResolver() {
        return exchange -> Mono.justOrEmpty(exchange.getRequest().getHeaders().getFirst("user"))
                .defaultIfEmpty("anonymous");
    }

}
