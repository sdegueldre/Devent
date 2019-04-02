<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', 'AuthController@register');
Route::post('/login', 'AuthController@login');

Route::get('/homepage', 'EventController@homepage')->name('events.homepage');
Route::get('/events', 'EventController@index')->name('events.index');
Route::get('/pastevents', 'EventController@past')->name('events.past');
Route::get('/events/{event}', 'EventController@show')->name('events.show');

//if authenticated
Route::middleware('auth:api')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    //Authentication routes
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    // routes related to events
    Route::post('/events', 'EventController@store')->name('events.store');
    Route::put('/events/{event}', 'EventController@update')->name('events.update');
    Route::delete('/events/{event}', 'EventController@destroy')->name('events.destroy');
    // route that deal with attending or not
    Route::post('/attend/{event}', 'AttendeesController@store')->name('attendees.store');
    Route::delete('/attend/{event}', 'AttendeesController@destroy')->name('attendees.destroy');

});
