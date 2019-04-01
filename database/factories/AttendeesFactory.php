<?php

use App\Event;
use App\User;
use Faker\Generator as Faker;



$factory->define(App\Attendees::class, function (Faker $faker) {
    $eventIDs = Event::all()->pluck('id')->toArray();
    $userIDs =  User::all()->pluck('id')->toArray();
    
    return [
        'event_id' => $faker->randomElement($eventIDs),
        'user_id' => $faker->randomElement($userIDs)
    ];
});
