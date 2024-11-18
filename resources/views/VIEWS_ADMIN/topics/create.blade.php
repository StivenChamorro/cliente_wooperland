@extends('layouts.admin-layouts.dashboard-layout')

@section('title','Crear Tema')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/topics/create.css')}}">

@endsection

@section('content')
<!-- stores/create.blade.php -->
<div class="container">
<h1>Create Topic</h1>
<br>
<form id="create-topic-form" enctype="multipart/form-data">
  <label for="name">Name:</label>
  <input class="input" type="text" id="name" name="name" required>
  
  <label for="image">Image:</label>
  <input type="file" name="image" id="image" class="input-image" placeholder="image">
  
  <label for="description">Description:</label>
  <textarea class="input" id="description" name="description"></textarea>
  
  <br>
  <button class="button" type="submit">Create</button>
</form>

</div>
<script src="{{asset('js/admin/topic/createtopic.js')}}"></script>
@endsection