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

Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'AuthController@login');

Route::get('/homepage', 'EventController@homepage')->name('events.homepage');
Route::get('/events', 'EventController@index')->name('events.index');
Route::get('/pastevents', 'EventController@past')->name('events.past');
Route::get('/event/{event}', 'EventController@show')->name('events.show');
Route::get('/confirm/{token}', 'AuthController@confirm');
Route::get('/sendreminders', 'AttendeesController@sendReminders');
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
    Route::post('/events/{event}/invitations', 'EventController@sendInvitations')->name('events.invite');
    Route::put('/events/{event}', 'EventController@update')->name('events.update');
    Route::delete('/events/{event}', 'EventController@destroy')->name('events.destroy');
    // route that deal with attending or not
    Route::post('/attend/{event}', 'AttendeesController@store')->name('attendees.store');
    Route::delete('/attend/{event}', 'AttendeesController@destroy')->name('attendees.destroy');

});
