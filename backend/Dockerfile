# 베이스 이미지로 AdoptOpenJDK 14 사용
FROM adoptopenjdk:14-jdk-hotspot

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트의 JAR 파일을 이미지에 복사
COPY build/libs/*.jar /app/app.jar

# 애플리케이션 실행 명령
CMD ["java", "-jar", "app.jar", "-Pspring.profile=prod"]