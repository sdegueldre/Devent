# Jepsen-Brite

You can access to the website [on heroku](https://jepsen-brite-jnsnc.herokuapp.com/)

## Install the dependencies :

  * `composer install`
  * `npm install`


## Settings :

  * create .env file, copy the inside of the .env.example and change your settings (database and/or email).
  * `php artisan key:generate`
  * `php artisan jwt:secret`

### Launch de database :

  * `docker-compose up`
  * `php artisan migrate`
  * `php artisan db:seed`

## Launch :

  * `php artisan serve`
  * `docker-compose up`
  * `npm run watch`

## Launch on Heroku :

  * `npm run prod`
  * `git push heroku master`
