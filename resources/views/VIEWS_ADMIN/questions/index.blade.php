@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Preguntas')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/questions/index.css') }}">

@endsection

@section('content')
<h1>Questions List</h1>
<br>
<div class="container">
<button onclick="loadQuestions()" class="btn">Load questions</button>
<a href="{{route('questions.create')}}"><button class="create-level">Create question</button></a>
</div>
<br>
<table class="question-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Question</th>
      <th>Score</th>
      <th>Correct_answer</th>
      <th>Clue</th>
      <th>Level_id</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody id="question-list">
    <!-- The rows will be populated dynamically -->
  </tbody>
</table>
<script src="{{asset('js/admin/questions/indexquestion.js')}}"></script>
@endsection
