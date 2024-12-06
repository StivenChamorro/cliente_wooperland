<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        return view('VIEWS_ADMIN.users.index');
    }

    public function adminprofile(){
        return view('VIEWS_ADMIN.dashboard.adminprofile');
    }
}
