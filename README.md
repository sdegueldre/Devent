# Jepsen-Brite

## Install the dependencies :

  * `composer install`
  * `npm install`


## settings :

  * create .env file, copy the inside of the .env.example and change your settings.
  * `php artisan key:generate`
  * `php artisan jwt:secret`
  * `php artisan migrate`
  * `php artisan db:seed`

## Launch :
  * `php artisan serve`
  * `docker-compose up`
  * `npm run watch`
