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

}
