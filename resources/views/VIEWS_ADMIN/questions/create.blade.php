@extends('layouts.admin-layouts.dashboard-layout')

@section('title','Crear preguntas')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/questions/create.css')}}">

@endsection

@section('content')
<!-- stores/create.blade.php -->
<h1>Create question</h1>
<br>
<form id="create-question-form">
  <label for="question">Question:</label>
  <input class="input" type="text" id="question" name="question">

  <label for="score">Score:</label>
  <input type="number" class="input" id="score" name="score">

  <label for="correct_answer">Correct_answer:</label>
  <input class="input" type="text" id="correct_answer" name="correct_answer">

  <label for="clue">Clue:</label>
  <input class="input" type="text" id="clue" name="clue">

  <label for="level_id">Level:</label>
  <select class="input" id="level_id" name="level_id" required>
      <option value="" disabled selected>Selecciona un nivel</option>
  </select>

  <a href="{{route('questions.index')}}"><button class="button" type="submit">Create</button></a>
</form>
<script src="{{asset('js/admin/questions/createquestion.js')}}"></script>
@endsection