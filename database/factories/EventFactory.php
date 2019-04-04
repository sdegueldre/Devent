<?php

use App\User;
use Faker\Generator as Faker;



$factory->define(App\Event::class, function (Faker $faker) {
    $authors = User::all()->pluck('id')->toArray();

    return [
        'event_title' => $faker->sentence($nbWords = 3, $variableNbWords = true),
        'event_time' => $faker->dateTime($min = 'now'),
        'event_description' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'event_city' => $faker->city(),
        'event_location' => $faker->address(),
        'event_image' => $faker->imageUrl($width = 600, $height = 250, 'nature'),
        'event_author' => $faker->randomElement($authors),
        'reminder' => $faker->dateTimeBetween('+0 days', '+5 month')
    ];
});
