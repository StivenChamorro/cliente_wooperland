@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Editar Artículo')

@section('custom_css')
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/articles/edit.css') }}">
@endsection

@section('content')
<div class="container">
    <h1>Editar Artículo</h1>
    <form id="edit-article-form" enctype="multipart/form-data">
        <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="description">Descripción:</label>
            <textarea id="description" name="description" class="form-control" required></textarea>
        </div>
        <div class="form-group">
            <label for="price">Precio:</label>
            <input type="number" step="0.01" id="price" name="price" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="type">Tipo:</label>
            <input type="text" id="type" name="type" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="store_id">Tienda:</label>
            <select id="store_id" name="store_id" class="form-control" required>
                <option value="">Seleccione una tienda</option>
                <!-- Las opciones se cargarán dinámicamente -->
            </select>
        </div>
        <div class="form-group">
            <label for="current-image">Imagen Actual:</label>
            <div id="current-image-container">
                <!-- La imagen actual se mostrará aquí -->
            </div>
            <br>
            <label for="image">Cambiar Imagen:</label>
            <input type="file" id="image" name="image" class="form-control">
        </div>
        <button type="submit" class="btn btn-submit">Actualizar</button>
    </form>
</div>

<script src="{{ asset('js/admin/articles/editarticle.js') }}"></script>
@endsection
