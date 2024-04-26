FROM adoptopenjdk:14-jdk-hotspot AS build

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트의 필요한 파일들을 이미지에 복사
COPY src ./src
COPY build.gradle ./
COPY settings.gradle ./

# 프로젝트 빌드
RUN ./gradlew clean build

# 새로운 베이스 이미지로 AdoptOpenJDK 14 사용
FROM adoptopenjdk:14-jre-hotspot

# 작업 디렉토리 설정
WORKDIR /app

# 빌드 단계에서 생성된 JAR 파일을 새로운 이미지에 복사
COPY --from=build /app/build/libs/*.jar /app/app.jar

# 애플리케이션 실행 명령
CMD ["java", "-jar", "app.jar", "-Pspring.profile=prod"]

## 베이스 이미지로 AdoptOpenJDK 14 사용
#FROM adoptopenjdk:14-jdk-hotspot
#
## 작업 디렉토리 설정
#WORKDIR /app
#
## 프로젝트의 JAR 파일을 이미지에 복사
#COPY build/libs/*.jar /app/app.jar
#
## 애플리케이션 실행 명령
#CMD ["java", "-jar", "app.jar", "-Pspring.profile=prod"]