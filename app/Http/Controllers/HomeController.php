<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    function Home(){
        return view('home');
    }

    function Header(){
        return view('layouts.header');
    }

    function Footer(){
        return view('layouts.footer');
    }

    public function nivel1($id_tema, $id_nivel){
    return view('layouts.nivel1', [
        'topicId' => $id_tema,
        'levelId' => $id_nivel,
    ]);
    }


    public function levelpreview($id){
        return view('levelpreview', ['topicId' => $id]);    
    }
}


