<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return view('VIEWS_ADMIN.articles.index');
    }

    // Muestra el formulario para crear un store
    public function create()
    {
        return view('VIEWS_ADMIN.articles.create');
    }

    public function edit($id)
    {
        return view('VIEWS_ADMIN.articles.edit', ['id' => $id]);
    }

}
