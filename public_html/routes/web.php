<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{uri?}', 'Detect')->where('uri', '(.*)');

// //Для кросс доменных запросов (лишним думаю не будет)
// Route::group([ 'middleware' => ['api', 'cors'],'prefix' => 'api',], function ($router) {
//     Route::options('/{any}', function(){ return ''; })->where('any', '.*');
// });