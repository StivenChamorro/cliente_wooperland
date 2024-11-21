@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Editar Nivel')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/levels/edit.css') }}">

@endsection

@section('content')
<h1>Edit Level</h1>
<form id="edit-question-form" class="form" enctype="multipart/form-data">
  <div class="form-group">
    <label for="question">Question:</label>
    <input type="text" id="question" name="question" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="score">Score:</label>
    <input type="number" id="score" name="score" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="correct_answer">Correct answer:</label>
    <input type="text" id="correct_answer" name="correct_answer" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="clue">Clue:</label>
    <input type="text" id="clue" name="clue" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="level_id">Level:</label>
    <select id="level_id" name="level_id" class="form-control" required>
        <option value="">Seleccione un nivel</option>
        <!-- Las opciones se cargarán dinámicamente -->
    </select>
</div>
  <button type="submit" class="btn btn-submit">Update</button>
</form>

<script src="{{ asset('js/admin/questions/editquestion.js') }}"></script>
@endsection
