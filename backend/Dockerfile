# 베이스 이미지로 AdoptOpenJDK 14 사용
FROM adoptopenjdk:14-jdk-hotspot

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트의 JAR 파일을 이미지에 복사
COPY build/libs/backend.jar /app/app.jar
COPY src/main/resources-prod/application-prod.properties /app/config/application-prod.properties
ENV SPRING_PROFILES_ACTIVE=prod
# 애플리케이션 실행 명령
CMD ["java", "-jar", "app.jar", "-Pspring.profile=prod", "-Dspring.profiles.active=prod"]