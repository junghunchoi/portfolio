FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트 파일 복사
COPY . .

# 의존성 설치
RUN npm install

# 빌드
RUN npm run build

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Nginx 이미지 사용
FROM nginx:stable-alpine

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 빌드된 Vue 앱 복사
COPY --from=0 /app/dist /usr/share/nginx/html

# 80 포트 노출
EXPOSE 80

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]