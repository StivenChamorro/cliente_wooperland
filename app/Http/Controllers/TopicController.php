<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TopicController extends Controller
{
    // Muestra la lista de topics
    public function index()
    {
        return view('VIEWS_ADMIN.topics.index');
    }

    // Muestra el formulario para crear un topic
    public function create()
    {
        return view('VIEWS_ADMIN.topics.create');
    }

    // Muestra el formulario para editar un topic
    public function edit($id)
    {
        return view('VIEWS_ADMIN.topics.edit', ['id' => $id]);
    }
}
