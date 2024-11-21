@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Topics')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/articles/index.css') }}">

@endsection

@section('content')

<div class="container">
  <h1 class="page-title">Articles List</h1>
  
  <div class="button-group">
    <!-- Botón para cargar los topics -->
    <button onclick="loadArticles()" class="btn">Load Topics</button>

    <!-- Botón para crear un nuevo topic -->
    <a href="{{ route('articles.create') }}" class="btn create-topic">Create Article</a>
  </div>

  <table class="article-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Avatar</th>
        <th>Type</th>
        <th>Store_id</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody id="article-list">
      <!-- Las filas se llenarán dinámicamente con JavaScript -->
    </tbody>
  </table>
</div>

<!-- Archivo de JavaScript que gestiona la interacción -->
<script src="{{ asset('js/admin/articles/indexarticle.js') }}"></script>

@endsection
