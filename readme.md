docker-compose up -d

docker-compose exec app bash
cd /var/www/app1

composer create-project --prefer-dist "laravel/laravel=8.*" .
npm install

cd /var/www/app2

composer create-project --prefer-dist "laravel/laravel=8.*" .
npm install

vi /etc/hosts

127.0.0.1 project1.local
127.0.0.1 project2.local

http://project1.local/
http://project2.local/
