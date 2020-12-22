FROM node:latest as build-stage
COPY . /app
WORKDIR /app
RUN yarn install && yarn build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY .docker/nginx.conf /etc/nginx/nginx.conf