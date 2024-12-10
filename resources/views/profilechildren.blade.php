@extends('layouts.header')

@section('custom_css')
    <link rel="stylesheet" href="{{ asset('css/profile-children.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
@endsection

@section('content')
    <div class="child-profile">
        <div class="child-profile-container">
            <div class="child-profile-header">
                <img src="{{ asset('img/bg_child.png') }}" alt="Background">
                <h1></h1>
            </div>

            <div class="child-profile-content">
                <div class="child-profile-card">
                    <div class="child-profile-picture">
                        <img id="childProfileImage" src="" alt="Profile Picture">
                        <div class="child-edit-icon" onclick="document.getElementById('childFileInput').click()">
                            📷
                        </div>
                        <input type="file" id="childFileInput" accept="image/*" style="display: none;">
                    </div>

                    <div class="child-user-info">
                        <h2>
                            <button class="child-edit-button" onclick="openChildModal('childUsernameModal')">✏️</button>
                        </h2>
                        <p></p>
                        <p></p>
                        <p> </p>
                    </div>
                </div>

                <div class="child-right-content">
                    <div class="child-about-section">
                        <div class="child-section-header">
                            <h3>Escribe sobre ti</h3>
                            <button class="child-edit-button" onclick="openChildModal('childAboutModal')">✏️</button>
                        </div>
                        <p id="childAboutText"></p>
                    </div>

                    <div class="child-topics-section">
                        <h3>Tus temas de estudio</h3>
                        <div class="child-topic-item">
                            <img class="child-topic-icon" src="{{ asset('imgs/imagenes_home/images_carrusel/image.svg') }}"
                                alt="Icono de Matemáticas">
                            <p>Matemáticas</p>
                        </div>
                        <div class="child-topic-item">
                            <img class="child-topic-icon" src="{{ asset('imgs/imagenes_home/images_carrusel/image.svg') }}"
                                alt="Icono de Español">
                            <p>Español</p>
                        </div>
                        <div class="child-topic-item">
                            <img class="child-topic-icon" src="{{ asset('imgs/imagenes_home/images_carrusel/image.svg') }}"
                                alt="Icono de Ciencias Sociales">
                            <p>Ciencias Sociales</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modales -->
    <div id="childUsernameModal" class="child-modal">
        <div class="child-modal-content">
            <h3>Edita tu nombre</h3>
            <input type="text" id="childUsernameInput" maxlength="25">
            <br>
            <span class="child-character-count">0/25</span>
            <div class="child-modal-content">
                <button onclick="saveChildUsername()">Guardar</button>
                <button onclick="closeChildModal('childUsernameModal')">Cancelar</button>
            </div>
        </div>
    </div>

    <div id="childAboutModal" class="child-modal">
        <div class="child-modal-content">
            <h3>Edita tu descripción</h3>
            <textarea id="childAboutInput" maxlength="200"></textarea>
            <br>
            <span class="child-character-count">0/200</span>
            <div class="child-modal-content">
                <button onclick="saveChildAbout()">Guardar</button>
                <button onclick="closeChildModal('childAboutModal')">Cancelar</button>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/profile-children.js') }}"></script>
@endsection
