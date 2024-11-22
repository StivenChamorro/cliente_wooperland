@extends('layouts.admin-layouts.dashboard-layout')

@section('title','Crear Logro')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/achievement/create.css')}}">

@endsection

@section('content')
<!-- stores/create.blade.php -->
<h1>Create Achievement</h1>
<form id="create-achievement-form">
  <label for="name">Name:</label>
  <input class="input" type="text" id="name" name="name" required>

  <label for="description">Description:</label>
  <textarea class="input" id="description" name="description"></textarea>

  <label for="reward">reward:</label>
  <input class="input" id="reward" name="reward" required>

  <label for="level_id">level_id:</label>
  <select class="input" id="level_id" name="level_id">
    <option value="" disabled selected>Selecciona un nivel</option>
  </select>

  <label for="status">status:</label>
  <input class="input" id="status" name="status">
  <br>
  <a href="{{route('achievements.index')}}"><button class="button" type="submit">Create</button></a>
</form>
<script src="{{asset('js/admin/Achievement/createachievement.js')}}"></script>
@endsection

