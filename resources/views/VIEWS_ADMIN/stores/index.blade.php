@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Crear tienda')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/index.css') }}">

@endsection

@section('content')
<h1>Stores List</h1>
<br>
<div class="container">
<button onclick="loadStores()" class="btn">Load Stores</button>
<a href="{{route('stores.create')}}"><button class="create-store">Create Store</button></a>
</div>

<table class="store-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody id="store-list">
    <!-- The rows will be populated dynamically -->
  </tbody>
</table>
<script src="{{asset('js/admin/store/indexsore.js')}}"></script>
@endsection
