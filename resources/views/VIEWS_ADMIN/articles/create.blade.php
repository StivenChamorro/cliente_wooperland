@extends('layouts.admin-layouts.dashboard-layout')

@section('title','Crear Tema')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/articles/create.css')}}">

@endsection

@section('content')
<!-- stores/create.blade.php -->
<div class="container">
<h1>Create Article</h1>
<br>
<form id="create-article-form" enctype="multipart/form-data">
  <label for="name">Name:</label>
  <input class="input" type="text" id="name" name="name" required>

  <label for="description">Description:</label>
  <textarea class="input" id="description" name="description"></textarea>

  <label for="name">Price:</label>
  <input class="input" type="number" id="price" name="price" required>
  
  <label for="name">Type:</label>
  <input class="input" type="text" id="type" name="type" required>

  <label for="store_id">Store:</label>
<select class="input" id="store_id" name="store_id" required>
    <option value="" disabled selected>Selecciona una tienda</option>
</select>

  <label for="image">Avatar:</label>
  <input type="file" name="avatar" id="avatar" class="input-image" placeholder="image">
  <br>
  <a href="{{route('articles.index')}}"><button class="button" type="submit">Create</button></a>
</form>

</div>
<script src="{{asset('js/admin/articles/createarticle.js')}}"></script>
@endsection