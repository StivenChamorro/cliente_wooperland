<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LevelController extends Controller
{

    public function Listgames(){
        return view('game.listgames');
    }

    public function WoopergameDino(){
        return view('game.game');
    }

    public function SpaceRuner(){
        return view('game.spacewooperruner');
    }

    public function index()
    {
        return view('VIEWS_ADMIN.levels.index');
    }

    // Muestra el formulario para crear un store
    public function create()
    {
        return view('VIEWS_ADMIN.levels.create');
    }

    // Muestra el formulario para editar un store
    public function edit($id)
    {
        return view('VIEWS_ADMIN.levels.edit', ['id' => $id]);
    }

}
