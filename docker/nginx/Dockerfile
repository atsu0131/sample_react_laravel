FROM nginx:1.18

ENV TZ=UTC

# nginx config file
COPY ./nginx/*.conf /etc/nginx/conf.d/

WORKDIR /var/www/html