<?php

use App\Models\ArchiveItem;
use Illuminate\Support\Facades\Route;

Route::view('/', 'pages.home')->name('home');
Route::view('/about', 'pages.about')->name('about');
Route::get('/archive', function () {
	return view('pages.archive', [
		'items' => ArchiveItem::query()->orderBy('sort_order')->get(),
	]);
})->name('archive');
Route::view('/hunger-in-texas', 'pages.hunger-in-texas')->name('hunger-in-texas');
Route::view('/hamro-foolbari', 'pages.hamro-foolbari')->name('hamro-foolbari');
Route::view('/intuit-tutor', 'pages.intuit-tutor')->name('intuit-tutor');
