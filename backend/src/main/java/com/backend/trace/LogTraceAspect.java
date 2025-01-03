package com.backend.trace;


import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.IntStream;

@Slf4j
@Aspect
@Component
@RequiredArgsConstructor
public class LogTraceAspect {
    private final Environment environment;

    private static final String START_PREFIX = "->";
    private static final String COMPLETE_PREFIX = "<-";
    private static final String EX_PREFIX = "<X-";

    // ThreadLocal 변수들을 TrackedThreadLocal로 교체하여 더 나은 관리 제공
    private final TrackedThreadLocal<TraceId> traceIdHolder = new TrackedThreadLocal<>();
    private final TrackedThreadLocal<List<String>> logBuffer = new TrackedThreadLocal<>();

    /**
     * 모든 메소드 실행을 추적하고 로깅하는 AOP 어드바이스
     */
    @Around("execution(* com.backend..*(..))")
    public Object doTrace(ProceedingJoinPoint joinPoint) throws Throwable {
        TraceStatus status = null;
        boolean hasError = false;

        try {
            String message = joinPoint.getSignature().toShortString().replace("(..)", "");
            status = begin(joinPoint, message);

            Object result = joinPoint.proceed();
            return result;
        } catch (Exception e) {
            hasError = true;
            exception(status, e);
            throw e;
        } finally {
            if (hasError || isDevEnvironment()) {
                flushLogs();
            } else {
                clearLogs();
            }
        }
    }

    private TraceStatus begin(ProceedingJoinPoint joinPoint, String message) {
        syncTraceId();
        TraceId traceId = traceIdHolder.get();
        Long startTimeMs = System.currentTimeMillis();

        String[] additionalInfo = getAdditionalInfo(joinPoint);
        String requestUrl = message.contains("Controller") ? "| " + additionalInfo[1] : "";
        String logMessage = String.format("[%s] %s%s %s",
                traceId.getId(),
                addSpace(START_PREFIX, traceId.getLevel()),
                message + "(" + additionalInfo[0] + " )",
                requestUrl
        );

        if (isDevEnvironment()) {
            log.info(logMessage);
        } else {
            addToLogBuffer(logMessage);
        }

        return new TraceStatus(traceId, startTimeMs, message);
    }

    private void end(TraceStatus status, Object result) {
        complete(status, null, result);
    }

    private void exception(TraceStatus status, Exception e) {
        complete(status, e, null);
    }

    private void complete(TraceStatus status, Exception e, Object result) {
        Long stopTimeMs = System.currentTimeMillis();
        long resultTimeMs = stopTimeMs - status.getStartTimeMs();
        TraceId traceId = status.getTraceId();

        String logMessage = createCompleteLogMessage(status, e, resultTimeMs, traceId);

        releaseTraceId();

        if (isDevEnvironment()) {
            log.info(logMessage);
            if (e != null && traceId.getLevel() == 0)  {
                logFilteredStackTrace(e);
            }
        } else {
            addToLogBuffer(logMessage);
            if (e != null && traceId.getLevel() == 0) {
                addFilteredStackTraceToBuffer(e);
            }
        }
    }

    private String createCompleteLogMessage(TraceStatus status, Exception e, long resultTimeMs, TraceId traceId) {
        if (e != null) {
            return String.format("[%s] %s%s time=%dms ex=%s",
                    traceId.getId(),
                    addSpace(EX_PREFIX, traceId.getLevel()),
                    status.getMessage(),
                    resultTimeMs,
                    e.toString());
        }
        else {
            return String.format("[%s] %s%s time=%dms",
                    traceId.getId(),
                    addSpace(COMPLETE_PREFIX, traceId.getLevel()),
                    status.getMessage(),
                    resultTimeMs);
        }
    }

    private String[] getAdditionalInfo(ProceedingJoinPoint joinPoint) {
        String[] info = new String[6];
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();

        info[0] = getParameterNamesAndValues(joinPoint); // Parameters

        // Request URL
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = (attributes != null) ? attributes.getRequest() : null;
        info[1] = (request != null) ? request.getRequestURL().toString() : "N/A";

        return info;
    }

    private String getParameterNamesAndValues(ProceedingJoinPoint joinPoint) {
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        String[] parameterNames = signature.getParameterNames();
        Object[] args = joinPoint.getArgs();

        if (parameterNames == null || parameterNames.length == 0) {
            return " ";
        }

        Map<String, Object> paramMap = new HashMap<>();
        IntStream.range(0, parameterNames.length)
                .forEach(i -> paramMap.put(parameterNames[i], args[i]));

        return paramMap.toString();
    }

    private void syncTraceId() {
        TraceId traceId = traceIdHolder.get();
        if (traceId == null) {
            traceIdHolder.set(new TraceId());
        } else {
            traceIdHolder.set(traceId.createNextId());
        }
    }

    private void releaseTraceId() {
        TraceId traceId = traceIdHolder.get();
        if (traceId.isFirstLevel()) {
            traceIdHolder.remove(); // destroy
        } else {
            traceIdHolder.set(traceId.createPreviousId());
        }
    }

    private static String addSpace(String prefix, int level) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < level; i++) {
            sb.append((i == level - 1) ? "|" + prefix : "| ");
        }
        return sb.toString();
    }

    private boolean isDevEnvironment() {
        return Arrays.asList(environment.getActiveProfiles()).contains("dev");
    }

    private void addToLogBuffer(String logMessage) {
        List<String> buffer = logBuffer.get();
        if (buffer == null) {
            buffer = new ArrayList<>();
            logBuffer.set(buffer);
        }
        buffer.add(logMessage);
    }

    private void flushLogs() {
        List<String> buffer = logBuffer.get();
        if (buffer != null && !buffer.isEmpty()) {
            buffer.forEach(log::info);
            clearLogs();
        }
    }

    private void clearLogs() {
        logBuffer.remove();
    }

    /**
     * 필터링된 스택 트레이스를 로그로 남기는 메소드
     * 스프링 프레임워크, 스프링 부트, 스프링 AOP, CGLIB 관련 클래스는 제외하고 남긴다.
     * 필터링된 스택 트레이스를 로깅한다.
     * @param e
     */
    private void logFilteredStackTrace(Exception e) {
        StackTraceElement[] stackTrace = e.getStackTrace();
        StringBuilder filteredTrace = new StringBuilder("Filtered stack trace:\n");
        for (StackTraceElement element : stackTrace) {
            String className = element.getClassName();
            if (!className.startsWith("org.springframework.") &&
                    !className.startsWith("jakarta.") &&
                    !className.startsWith("org.apache.") &&
                    !className.contains("Aspect") &&
                    !className.contains("CGLIB"))
                    {
                filteredTrace.append("\tat ").append(element.toString()).append("\n");
            }
        }
        log.warn(filteredTrace.toString());
    }

    private void addFilteredStackTraceToBuffer(Exception e) {
        StackTraceElement[] stackTrace = e.getStackTrace();
        StringBuilder filteredTrace = new StringBuilder("Filtered stack trace:\n");
        for (StackTraceElement element : stackTrace) {
            String className = element.getClassName();
            if (!className.startsWith("org.springframework.") &&
                    !className.startsWith("jakarta.") &&
                    !className.startsWith("org.apache.") &&
                    !className.contains("Aspect") &&
                    !className.contains("CGLIB"))
            {
                filteredTrace.append("\tat ").append(element.toString()).append("\n");
            }
        }
        addToLogBuffer(filteredTrace.toString());
    }

    // TrackedThreadLocal 내부 클래스 정의
    private static class TrackedThreadLocal<T> {
        private final ThreadLocal<T> threadLocal = new ThreadLocal<>();

        public void set(T value) {
            threadLocal.set(value);
        }

        public T get() {
            return threadLocal.get();
        }

        public void remove() {
            threadLocal.remove();
        }
    }
}