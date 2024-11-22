<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AchievementController extends Controller
{
    public function achievement_view_1 (){
        return view('views_achievements-haiver_velasco.view_1_achievements-haiver_velasco');
    }

    public function index()
    {
        return view('VIEWS_ADMIN.Achievements.index');
    }

    // Muestra el formulario para crear un store
    public function create()
    {
        return view('VIEWS_ADMIN.Achievements.create');
    }

    // Muestra el formulario para editar un store
    public function update($id)
    {
        return view('VIEWS_ADMIN.Achievements.edit', ['id' => $id]);
    }

}
