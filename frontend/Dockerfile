# 빌드 스테이지
FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
#RUN npm run build:prod

# 프로덕션 스테이지
FROM nginx:stable-alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /dist /etc/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 1542
CMD ["nginx", "-g", "daemon off;"]

