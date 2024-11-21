<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnswerController extends Controller
{
    // Muestra la lista de topics
    public function index()
    {
        return view('VIEWS_ADMIN.answers.index');
    }

    // Muestra el formulario para crear un topic
    public function create()
    {
        return view('VIEWS_ADMIN.answers.create');
    }

    // Muestra el formulario para editar un topic
    public function edit($id)
    {
        return view('VIEWS_ADMIN.answers.edit', ['id' => $id]);
    }
}
