FROM nginx:latest
COPY build/ usr/share/nginx/html
COPY config/default.conf /etc/nginx/conf.d/default.conf
