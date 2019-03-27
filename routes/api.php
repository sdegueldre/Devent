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


//if authenticated
Route::middleware('auth:api')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    Route::get('/events', 'EventController@index')->name('events.index');
    Route::post('/events', 'EventController@store')->name('events.store');
    Route::get('/events/{event}', 'EventController@show')->name('events.show');
    Route::put('/events/{event}', 'EventController@update')->name('events.update');
    Route::delete('/events/{event}', 'EventController@destroy')->name('events.destroy');
});
