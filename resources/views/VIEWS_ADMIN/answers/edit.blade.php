@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Editar Respuesta')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/answer/edit.css') }}">

@endsection

@section('content')
<h1>Edit Answer</h1>
<form id="edit-answer-form" class="form" enctype="multipart/form-data">
  <div class="form-group">
    <label for="answer">Answer:</label>
    <input type="text" id="answer" name="answer" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="option">Option:</label>
    <select id="option" name="option" class="form-control" required>
        <option value="">Seleccione una opción</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
    </select>
  </div>
  <div class="form-group">
    <label for="question_id">Question:</label>
    <select id="question_id" name="question_id" class="form-control" required>
        <option value="">Seleccione una pregunta</option>
        <!-- Las opciones se cargarán dinámicamente -->
    </select>
  </div>
  <button type="submit" class="btn btn-submit">Update</button>
</form>

<script src="{{ asset('js/admin/answers/editanswer.js') }}"></script>
@endsection
