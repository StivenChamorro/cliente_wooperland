@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Editar Nivel')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/levels/edit.css') }}">

@endsection

@section('content')
<h1>Edit Level</h1>
<form id="edit-level-form" class="form" enctype="multipart/form-data">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="score">Score:</label>
    <input type="number" id="score" name="score" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="topic_id">Tema:</label>
    <select id="topic_id" name="topic_id" class="form-control" required>
        <option value="">Seleccione un tema</option>
        <!-- Las opciones se cargarán dinámicamente -->
    </select>
</div>
  <button type="submit" class="btn btn-submit">Update</button>
</form>

<script src="{{ asset('js/admin/levels/editlevel.js') }}"></script>
@endsection
