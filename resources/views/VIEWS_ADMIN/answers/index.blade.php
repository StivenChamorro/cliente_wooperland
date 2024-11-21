@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Respuestas')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/answer/index.css') }}">

@endsection

@section('content')
<h1>Lista de Respuestas</h1>
<br>
<div class="container">
  <button onclick="loadAnswers()" class="btn">Load answers</button>
  <a href="{{route('answers.create')}}"><button class="create-answer">Create answer</button></a>
</div>
<br>
<table class="answer-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Answer</th>
      <th>Option</th>
      <th>Question ID</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody id="answer-list">
    <!-- Las filas se agregarán dinámicamente -->
  </tbody>
</table>


<script src="{{ asset('js/admin/answers/indexanswer.js') }}"></script>
@endsection
