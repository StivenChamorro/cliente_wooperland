<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class StoreController extends Controller
{
    // Muestra la lista de stores
    public function index()
    {
        return view('VIEWS_ADMIN.stores.index');
    }

    // Muestra el formulario para crear un store
    public function create()
    {
        return view('VIEWS_ADMIN.stores.create');
    }

    // Muestra el formulario para editar un store
    public function edit($id)
    {
        return view('VIEWS_ADMIN.stores.edit', ['id' => $id]);
    }

    public function store_view_3(){
        return view('views_store-haiver_velasco.view_3_store-haiver_velasco');
    }

}