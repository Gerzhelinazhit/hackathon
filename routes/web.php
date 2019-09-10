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

//Route::get('/', function () {
//    return view('welcome');
//});


use Illuminate\Support\Facades\Route;

Route::view('/','home');
Route::view('about','about')->name('about');

Route::get('contact', 'ContactFormController@create')->name('contact.create');
Route::post('contact', 'ContactFormController@store')->name('contact.store');


//Route::get('customers', 'CustomerController@index');
//Route::get('customers/create', 'CustomerController@create');
//Route::post('customers', 'CustomerController@store');
//Route::get('customers/{customer}','CustomerController@show');
//Route::get('customers/{customer}/edit','CustomerController@edit');
//Route::patch('customers/{customer}','CustomerController@update');
//Route::delete('customers/{customer}','CustomerController@destroy');
Route::resource('customers', 'CustomerController')->middleware('auth');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
