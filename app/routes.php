<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'HomeController@index');
Route::get('create', 'HomeController@create');
Route::post('create', 'HomeController@doCreate');
Route::get('execute/{id}', 'HomeController@execute');
Route::get('rule/{id}', 'HomeController@getRule');
