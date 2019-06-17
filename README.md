# Devent

> Devent is an Eventbrite-like website for creating and managing local events, letting people register to them and be reminded of them by email a few days before it takes place.

You can access the website [on heroku](https://becode-devent.herokuapp.com/)  

You can find the backend API documentation [here](https://github.com/sdegueldre/Devent/blob/master/event-API.md)

## Installation

### Install the dependencies

  * `composer install`
  * `npm install`

### Setting

  * Make a copy of `.env.example` and rename it `.env`, adjust the database and SMTP credentials.
  * `php artisan key:generate`
  * `php artisan jwt:secret`

### Initialize the database

  * `docker-compose up`
  * `php artisan migrate`
  * `php artisan db:seed`

### Start the watcher and serve the files

  * `npm run watch`
  * `php artisan serve`

### Deploy on Heroku

  * `npm run prod`
  * `git push heroku master`
