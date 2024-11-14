@extends('layouts.header1')

@section('custom_css')
    <link rel="stylesheet" href="{{ asset('css/profilechildren.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
@endsection

@section('content')
<div class="profile-container">
    <div class="profile-header">
        <img src="{{ asset('img/bg_child.png') }}" alt="Background">
        <h1>¡Hola! Nick</h1>
    </div>

    <div class="profile-content">
        <div class="profile-card">
            <div class="profile-picture">
                <img id="profileImage" src="{{ asset('images/profile-avatar.png') }}" alt="Profile Picture">
                <div class="edit-icon" onclick="document.getElementById('fileInput').click()">
                    📷
                </div>
                <input type="file" id="fileInput" accept="image/*">
            </div>

            <div class="user-info">
                <h2>Nick <button class="edit-button" onclick="openModal('usernameModal')">✏️mod</button></h2>
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
                <p id="aboutText">Lorem ipsum dolor sit amet consectetur...</p>
                <div class="character-count">0/200</div>
            </div>

            <div class="topics-section">
                <h3>Temas recientes</h3>
                <div class="topic-item">
                    <img src="{{ asset('images/math-icon.png') }}" class="topic-icon" alt="Matemáticas">
                    <span>Matemáticas</span>
                </div>
                <div class="topic-item">
                    <img src="{{ asset('images/social-icon.png') }}" class="topic-icon" alt="Ciencias sociales">
                    <span>Ciencias sociales</span>
                </div>
                <div class="topic-item">
                    <img src="{{ asset('images/astronomy-icon.png') }}" class="topic-icon" alt="Astronomía">
                    <span>Astronomía</span>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{asset('js/profilechildren.js')}}"></script>
<!-- Modales -->
<div id="usernameModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h3>Cambio tu nickname</h3>
        </div>
        <input type="text" id="usernameInput" maxlength="25" placeholder="Nuevo nickname">
        <div class="character-count">0/25</div>
        <div class="modal-buttons">
            <button class="modal-btn secondary" onclick="closeModal('usernameModal')">Cancelar</button>
            <button class="modal-btn primary" onclick="saveUsername()">Guardar</button>
        </div>
    </div>
</div>

<div id="aboutModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h3>Escribe sobre ti</h3>
        </div>
        <textarea id="aboutInput" maxlength="200" rows="5" placeholder="Cuéntanos sobre ti..."></textarea>
        <div class="character-count">0/200</div>
        <div class="modal-buttons">
            <button class="modal-btn secondary" onclick="closeModal('aboutModal')">Cancelar</button>
            <button class="modal-btn primary" onclick="saveAbout()">Guardar</button>
        </div>
    </div>
</div>
@endsection