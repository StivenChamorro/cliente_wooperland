@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Editar Logro')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/edit.css') }}">

@endsection

@section('content')
<h1>Edit Achievement</h1>
<form id="edit-achievement-form" class="form">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="description">Description:</label>
    <textarea id="description" name="description" class="form-control"></textarea>
  </div>
  <div class="form-group">
    <label for="reward">reward:</label>
    <input type="integer" id="reward" name="reward" class="form-control"></input>
  </div>
  <div class="form-group">
    <label for="level_id">level_id:</label>
    <input id="level_id" name="level_id" class="form-control"></input>
  </div>
  <div class="form-group">
    <label for="status">status:</label>
    <input type="text" id="status" name="status" class="form-control"></input>
  </div>
  <button type="submit" class="btn btn-submit">Update</button>
</form>

<script src="{{ asset('js/admin/Achievement/editachievement.js') }}"></script>
@endsection
