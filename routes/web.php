<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;


use App\Http\Controllers\AddChildController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\TermsController;

use App\Http\Controllers\AchievementController;
use App\Http\Controllers\LevelController;
use App\Http\Controllers\StoreController;

use App\Http\Controllers\ProfileFatherController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::get('home',[HomeController::class,'Home'])->name('home');
Route::get('header',[HomeController::class,'Header']);
Route::get('listgames',[LevelController::class, 'Listgames'])->name('listgames');
Route::get('woopergames',[LevelController::class, 'WoopergameDino'])->name('woopergamedino');
Route::get('woopergames2',[LevelController::class, 'SpaceRuner'])->name('woopergamespacerunner');
Route::get('login',[LoginController::class,'store'])->name('login');
Route::get('register',[RegisterController::class,'store'])->name('register');
Route::get('add_child',[AddChildController::class,'store'])->name('add_child');
Route::get('terms',[TermsController::class,'store'])->name('terms');
Route::get('profilechildren',[ProfileController::class,'store'])->name('Myprofile');

//Rutas Tienda (HAIVE VELASCO)
Route::get('vista_3_store',[StoreController::class,'store_view_3'])->name('vista_3_store');

//Ruta Logros (HAIVE VELASCO)
Route::get('vista_1_achievement',[AchievementController::class,'achievement_view_1'])->name('vista_1_achievement');

//main
//Ruta perfil padre(BRAYAN SOLARTE)
Route::get('perfil_padre',[ProfileFatherController::class,'index'])->name('profile_father');
//Ruta usuarios registrados(BRAYAN SOLARTE)
Route::get('vista_usuarios',[ProfileFatherController::class,'index2'])->name('father_users');
//Ruta plantilla del nivel de matematicas(BRAYAN SOLARTE)
Route::get('vista_niveles',[HomeController::class,'nivel1'])->name('view_lelvel');

Route::get('question', function () {
    return view('VIEWS_ADMIN.questions.create');
});

Route::get('dashboard', function () {
    return view('VIEWS_ADMIN.dashboard.dashboard');
});