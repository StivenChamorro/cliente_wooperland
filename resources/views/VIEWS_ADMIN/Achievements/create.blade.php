@extends('layouts.admin-layouts.dashboard-layout')

@section('title','Crear tienda')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/create.css')}}">

@endsection

@section('content')
<!-- stores/create.blade.php -->
<h1>Create Store</h1>
<form id="create-store-form">
  <label for="name">Name:</label>
  <input class="input" type="text" id="name" name="name" required>
  <label for="description">Description:</label>
  <textarea class="input" id="description" name="description"></textarea>
  <label for="reward">reward:</label>
  <textarea class="input" id="reward" name="reward"></textarea>
  <label for="level_id">level_id:</label>
  <textarea class="input" id="level_id" name="level_id"></textarea>
  <label for="status">status:</label>
  <textarea class="input" id="status" name="status"></textarea>
  <a href="{{route('achievements.index')}}"><button class="button" type="submit">Create</button></a>
</form>
<script src="{{asset('js/admin/Achievements/createachievement.js')}}"></script>
@endsection

