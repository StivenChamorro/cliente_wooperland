<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return view('VIEWS_ADMIN.stores.index');
    }

    // Muestra el formulario para crear un store
    public function create()
    {
        return view('VIEWS_ADMIN.articles.create');
    }

}
