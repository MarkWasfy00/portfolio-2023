<?php

use App\Http\Controllers\AboutMeController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
// require __DIR__.'/auth.php'; // --> auth routes


Route::get('/',[PortfolioController::class, 'index']);
Route::post('/',[ContactController::class, 'save']);

// Route::post('/profile/about-me',[AboutMeController::class,'update'])->middleware(['auth']);

// Route::get('/{username}' , [PortfolioController::class, 'index'])->middleware(['auth', 'verified']);