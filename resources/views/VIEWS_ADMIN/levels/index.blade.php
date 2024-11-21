@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Niveles')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/levels/index.css') }}">

@endsection

@section('content')
<h1>Levels List</h1>
<br>
<div class="container">
<button onclick="loadLevels()" class="btn">Load Levels</button>
<a href="{{route('levels.create')}}"><button class="create-level">Create Level</button></a>
</div>
<br>
<table class="level-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Score</th>
      <th>Topic_id</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody id="level-list">
    <!-- The rows will be populated dynamically -->
  </tbody>
</table>
<script src="{{asset('js/admin/levels/indexlevel.js')}}"></script>
@endsection
