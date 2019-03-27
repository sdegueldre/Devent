# Jepsen-Brite

## Install the dependencies :
  1. `composer install`
  2. `npm install`


## settings
  * create .env file
  * `php artisan key:generate`
  * ``` composer require tymon/jwt-auth "1.0.*"
        php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
        php artisan jwt:secret

      ```
