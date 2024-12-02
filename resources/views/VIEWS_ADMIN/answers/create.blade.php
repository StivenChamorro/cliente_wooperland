@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Crear respuestas')

@section('custom_css')
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/answer/create.css') }}">
@endsection

@section('content')
<h1>Create answer</h1>
<br>
<form id="create-answer-form">
  <label for="answer">Answer:</label>
  <input class="input" type="text" id="answer" name="answer" required>

  <label for="option">Option:</label>
  <select class="input" id="option" name="option" required>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
  </select>

  <label for="question_id">Question:</label>
  <select class="input" id="question_id" name="question_id" required>
    <!-- Este select se llenará dinámicamente con las preguntas -->
  </select>

  <button class="button" type="submit">Create Answer</button>
</form>

<script src="{{ asset('js/admin/answers/createanswer.js') }}"></script>
@endsection
