@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Crear tienda')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/index.css') }}">

@endsection

@section('content')
<h1>Achievement List</h1>
<br>
<div class="container">
<button onclick="loadStores()" class="btn">Load Achievement</button>
<a href="{{route('achievements.create')}}"><button class="create-store">Create Achievement</button></a>
</div>

<table class="store-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Description</th>
      <th>Reward</th>
      <th>Level_id</th>
      <th>Status</th>
      <th>Actions</th>

    </tr>
  </thead>
  <tbody id="achievement-list">
    <!-- The rows will be populated dynamically -->
  </tbody>
</table>
<script src="{{asset('js/admin/Achievement/indexachievement.js')}}"></script>
@endsection
