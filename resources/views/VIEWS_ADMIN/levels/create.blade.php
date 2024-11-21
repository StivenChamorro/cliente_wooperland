@extends('layouts.admin-layouts.dashboard-layout')

@section('title','Crear nivel')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/levels/create.css')}}">

@endsection

@section('content')
<!-- stores/create.blade.php -->
<h1>Create Level</h1>
<br>
<form id="create-level-form">
  <label for="name">Name:</label>
  <input class="input" type="text" id="name" name="name">

  <label for="score">Score:</label>
  <input type="number" class="input" id="score" name="score">

  <label for="topic_id">Topic:</label>
  <select class="input" id="topic_id" name="topic_id" required>
      <option value="" disabled selected>Selecciona un tema</option>
  </select>

  <a href="{{route('levels.index')}}"><button class="button" type="submit">Create</button></a>
</form>
<script src="{{asset('js/admin/levels/createlevel.js')}}"></script>
@endsection