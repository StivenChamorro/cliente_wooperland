@extends('layouts.header')

@section('custom_css')
    <link rel="stylesheet" href="{{ asset('css/profilechildren.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
@endsection

@section('content')

<div class="profile-children">
    <div class="profile-container">
        <div class="profile-header">
            <img src="{{ asset('img/bg_child.png') }}" alt="Background">
            <h1>¡Hola! Nick</h1>
        </div>

        <div class="profile-content">
            <div class="profile-card">
                <div class="profile-picture">
                    <img id="profileImage" src="{{ asset('img/perfil_padre/camara.png') }}" alt="Profile Picture">
                    <div class="edit-icon" onclick="document.getElementById('fileInput').click()">
                        📷
                    </div>
                    <input type="file" id="fileInput" accept="image/*">
                </div>

                <div class="user-info">
                    <h2>Nick <button class="edit-button" onclick="openModal('usernameModal')">✏️</button></h2>
                    <p>Nicolas Smith Pines</p>
                    <p>8 años</p>
                    <p>Eres hijo de John Smith</p>
                    <button class="save-btn">Guardar información</button>
                </div>
            </div>

            <div class="right-content">
                <div class="about-section">
                    <div class="section-header">
                        <h3>Escribe sobre ti</h3>
                        <button class="edit-button" onclick="openModal('aboutModal')">✏️</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>

                <div class="topics-section">
                    <h3>Tus temas de estudio</h3>
                    <div class="topic-item">
                        <img class="topic-icon" src="{{ asset('imgs/imagenes_home/images_carrusel/image.svg') }}" alt="Icono de Matemáticas">
                        <p>Matemáticas</p>
                    </div>
                    <div class="topic-item">
                        <img class="topic-icon" src="{{ asset('imgs/imagenes_home/images_carrusel/image.svg') }}" alt="Icono de Español">
                        <p>Español</p>
                    </div>
                    <div class="topic-item">
                        <img class="topic-icon" src="{{ asset('imgs/imagenes_home/images_carrusel/image.svg') }}" alt="Icono de Ciencias Sociales">
                        <p>Ciencias Sociales</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</div>


@endsection
