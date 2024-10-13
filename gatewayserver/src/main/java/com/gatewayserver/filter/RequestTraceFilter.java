//package com.gatewayserver.filter;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cloud.gateway.filter.GatewayFilterChain;
//import org.springframework.cloud.gateway.filter.GlobalFilter;
//import org.springframework.core.annotation.Order;
//import org.springframework.http.HttpHeaders;
//import org.springframework.stereotype.Component;
//import org.springframework.web.server.ServerWebExchange;
//import reactor.core.publisher.Mono;
//
///**
// * 요청이 들어오면 id를 통해 요청을 추척할 수 있다.
// */
//@Order(1) // 가정 먼저 사용하고 싶은 경우 사용.
//@Component
//public class RequestTraceFilter implements GlobalFilter {
//
//    private static final Logger logger = LoggerFactory.getLogger(RequestTraceFilter.class);
//
//    @Autowired
//    FilterUtility filterUtility;
//
//    /**
//     *
//     * Mono<Void>는 Spring WebFlux에서 사용되는 리액티브 타입 중 하나입니다. Mono는 0 또는 1개의 결과를 나타내는 비동기 작업을 표현하는 데 사용됩니다.
//     * Mono<Void>는 특별한 형태의 Mono로, 결과 값이 없는 비동기 작업을 나타냅니다. 일반적으로 Void는 Java에서 메서드가 어떤 값도 반환하지 않을 때 사용되는 키워드입니다.
//     * Mono<Void>는 주로 다음과 같은 상황에서 사용됩니다:
//     *
//     * 비동기 작업이 완료되었음을 알리는 시그널로 사용될 때
//     * 결과 값이 없는 비동기 작업을 수행할 때 (예: 데이터 삽입, 삭제 등)
//     * 함수형 프로그래밍에서 부수 효과(side effect)만 있고 반환 값이 없는 연산을 표현할 때
//     *
//     * 위의 filter 메서드 예제에서 Mono<Void>를 반환하는 이유는 필터 자체는 어떤 값을 생성하거나 변환하지 않고, 단지 요청 헤더에 상관 관계 ID를 설정하는 부수 효과만 가지기 때문입니다. 필터 체인을 통해 요청을 전달하는 것이 주된 목적이므로, 반환 값이 필요하지 않습니다.
//     * Mono<Void>를 사용하면 필터 체인에서 비동기 작업을 수행하고, 작업이 완료될 때까지 기다린 후 다음 필터로 요청을 전달할 수 있습니다. 이는 리액티브 프로그래밍 모델에서 중요한 개념으로, 논블로킹 방식으로 동작하여 시스템의 확장성과 효율성을 높일 수 있습니다.
//     *
//     *
//     *ServerWebExchange 객체에서 요청 헤더(requestHeaders)를 가져옵니다.
//     * isCorrelationIdPresent(requestHeaders) 메서드를 호출하여 요청 헤더에 이미 상관 관계 ID가 존재하는지 확인합니다.
//     *
//     * 상관 관계 ID가 존재하면, 로거를 사용하여 해당 ID를 디버그 레벨로 출력합니다.
//     * 이 때, filterUtility.getCorrelationId(requestHeaders)를 사용하여 요청 헤더에서 상관 관계 ID를 추출합니다.
//     *
//     *
//     * 요청 헤더에 상관 관계 ID가 없는 경우:
//     *
//     * generateCorrelationId() 메서드를 호출하여 새로운 상관 관계 ID를 생성합니다.
//     * filterUtility.setCorrelationId(exchange, correlationID)를 사용하여 생성한 상관 관계 ID를 ServerWebExchange 객체에 설정합니다.
//     * 로거를 사용하여 생성된 상관 관계 ID를 디버그 레벨로 출력합니다.
//     *
//
//     * chain.filter(exchange)를 호출하여 요청을 다음 필터 또는 최종 대상으로 전달합니다.
//     *
//     * 이 때, 상관 관계 ID가 설정된 ServerWebExchange 객체가 전달됩니다.
//     *
//     * @param exchange spring의 모듈로써서 servlet의 요청 또는 응답에 접근할 수 있다.
//     * @param chain 게이트웨이 필터를 관리하기 위한 파라미터이다.
//     * @return 정의한 필터를 리턴한다.
//     */
//    @Override
//    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
//        HttpHeaders requestHeaders = exchange.getRequest().getHeaders();
//        if (isCorrelationIdPresent(requestHeaders)) {
//            logger.debug("eazyBank-correlation-id found in RequestTraceFilter : {}",
//                    filterUtility.getCorrelationId(requestHeaders));
//        } else {
//            String correlationID = generateCorrelationId();
//            exchange = filterUtility.setCorrelationId(exchange, correlationID);
//            logger.debug("eazyBank-correlation-id generated in RequestTraceFilter : {}", correlationID);
//        }
//        return chain.filter(exchange);
//    }
//
//    private boolean isCorrelationIdPresent(HttpHeaders requestHeaders) {
//        if (filterUtility.getCorrelationId(requestHeaders) != null) {
//            return true;
//        } else {
//            return false;
//        }
//    }
//
//    private String generateCorrelationId() {
//        return java.util.UUID.randomUUID().toString();
//    }
//
//}
