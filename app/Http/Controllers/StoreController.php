<?php

namespace App\Http\Controllers;

use App\Services\ApiService;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    protected $apiService;

    public function store_view_3()
    {
        // Obtiene las tiendas de la API y las pasa a la vista
        $stores = $this->apiService->getData('/stores');
        return view('views_store-haiver_velasco.view_3_store-haiver_velasco', compact('stores'));
    }

}
