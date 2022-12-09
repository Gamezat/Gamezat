<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


use App\Http\Controllers\PostController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\FavoriteController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/reviews/{guid}', [ReviewController::class, 'getReviews']);
Route::resource('/posts', PostController::class);
Route::post('/googleLogin', [AuthController::class, 'googleLogin']);
Route::post('/facebookLogin', [AuthController::class, 'facebookLogin']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
// Protected routes---------------------------------------
Route::group(['middleware' => ['auth:sanctum']], function () {
    // Endpoint for logout api
    Route::get('/logout', [AuthController::class, 'logout']);
    // Endpoint for getting user
    Route::get('/user', [AuthController::class, 'user']);
    // Endpoint for editing the user info
    Route::put('/user/update', [AuthController::class, 'updateData']);
    // Endpoints for reviews
    Route::resource('/reviews', ReviewController::class);
    // Endpoints for reports
    Route::resource('/reports', ReportController::class);
    // Endpoints for favorites
    Route::resource('/favorites', FavoriteController::class);
});
