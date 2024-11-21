@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Editar Tema')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/topics/edit.css') }}">

@endsection

@section('content')
<div class="container">
    <h1>Editar Tema</h1>
    <form id="edit-topic-form" enctype="multipart/form-data">
        <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="image">Actual image:</label>
            <div id="current-image-container">
                <!-- La imagen actual se mostrará aquí -->
            </div>
            <br>
            <label for="image">Change image:</label>
            <input type="file" name="image" id="image" class="form-control">
        </div>
        <div class="form-group">
            <label for="description">Description:</label>
            <textarea id="description" name="description" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn btn-submit">Update</button>
    </form>
</div>

<script src="{{ asset('js/admin/topic/editopic.js') }}"></script>
@endsection
