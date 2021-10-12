FROM php:7.4.1-fpm

# php.iniをコピー
COPY ./php/php.ini /usr/local/etc/php/php.ini

#必要なパッケージ
RUN apt-get update && apt-get -y upgrade \

#zipを入れるための部分
&& apt-get install -y zlib1g-dev && apt-get install -y libzip-dev \
&& docker-php-ext-install pdo_mysql zip


#Composer install
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
&& curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
&& php composer-setup.php \
&& php -r "unlink('composer-setup.php');" \
&& mv composer.phar /usr/local/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER 1

ENV COMPOSER_HOME /composer

ENV PATH $PATH:/composer/vendor/bin

# nodejs install
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

WORKDIR /var/www/html