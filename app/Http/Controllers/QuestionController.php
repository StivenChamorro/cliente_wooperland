<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuestionController extends Controller
{
    // Muestra la lista de topics
    public function index()
    {
        return view('VIEWS_ADMIN.questions.index');
    }

    // Muestra el formulario para crear un topic
    public function create()
    {
        return view('VIEWS_ADMIN.questions.create');
    }

    // Muestra el formulario para editar un topic
    public function edit($id)
    {
        return view('VIEWS_ADMIN.questions.edit', ['id' => $id]);
    }
}
