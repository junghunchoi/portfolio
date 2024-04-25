# 빌드 스테이지
FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 프로덕션 스테이지
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 1542
CMD ["nginx", "-g", "daemon off;"]


#FROM node as build-stage
#WORKDIR /app
#COPY package*.json ./
#ADD . .
#RUN npm install
#RUN npm run build
#
## production stage
#FROM nginx:stable-alpine as production-stage
#COPY  ./nginx.conf /etc/nginx/conf.d/default.conf
#
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#EXPOSE 1542
#CMD ["nginx", "-g", "daemon off;"]