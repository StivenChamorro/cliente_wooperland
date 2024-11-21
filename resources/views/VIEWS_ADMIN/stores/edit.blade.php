@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Editar Tienda')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/edit.css') }}">

@endsection

@section('content')
<h1>Edit Store</h1>
<form id="edit-store-form" class="form">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="description">Description:</label>
    <textarea id="description" name="description" class="form-control"></textarea>
  </div>
  <a href="{{route('stores.index')}}"><button type="submit" class="btn btn-submit">Update</button></a>
</form>

<script src="{{ asset('js/admin/store/editstore.js') }}"></script>
@endsection
