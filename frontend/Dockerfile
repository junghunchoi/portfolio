# 빌드 스테이지
FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod

# 프로덕션 스테이지
FROM nginx:stable-alpine as production-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 1542
CMD ["nginx", "-g", "daemon off;"]

