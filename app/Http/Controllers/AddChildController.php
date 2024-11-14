<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AddChildController extends Controller
{
    public function store()
    {
        return view('addChild');
    }
}
