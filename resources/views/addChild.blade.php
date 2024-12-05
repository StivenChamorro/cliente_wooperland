@extends('layouts.header1')

@section('custom_css')
    <link rel="stylesheet" href="{{ asset('css/addChild.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
@endsection

@section('content')
<body>
    <main class="add-child-main-container">
        <div class="add-child-container">
            <div class="image-container">
                <img src="{{asset('img/login_image.png')}}" class="image" alt="Imagen de inicio de sesión">
            </div>
            
            <div class="add-child-form-container">
                <h1 class="add-child-form-title">Crear Nuevo Perfil</h1>
                <form id="add-child-form" class="add-child-form" enctype="multipart/form-data">
                    <div class="add-child-profile-pic-container">
                        <div class="add-child-profile-pic">
                            <img id="add-child-profile-image" src="{{asset('img/imagen-default.png')}}" alt="Foto de Perfil" class="add-child-profile-image">
                        </div>
                        <label for="add-child-avatar" class="add-child-upload-icon">
                            <i class="fas fa-camera"></i>
                        </label>
                        <input type="file" id="add-child-avatar" name="avatar" class="add-child-hidden" accept="image/*">
                    </div>

                    <div class="add-child-input-container">
                        <input id="add-child-name" name="name" class="add-child-input-field" placeholder="Ingresar Nombre" required>
                    </div>

                    <div class="add-child-input-container">
                        <input id="add-child-lastname" name="lastname" class="add-child-input-field" placeholder="Ingresar Apellido" required>
                    </div>

                    <div class="add-child-input-container">
                        <input type="date" id="add-child-birthdate" name="birthdate" class="add-child-input-field" required>
                    </div>

                    <div class="add-child-input-container">
                        <select id="add-child-relation" name="relation" class="add-child-input-field" required>
                            <option value="" disabled selected>Relación con el Niño</option>
                            <option value="Padre/Madre">Padre/Madre</option>
                            <option value="Tutor">Tutor</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                    <div class="add-child-input-container">
                        <select id="add-child-gender" name="gender" class="add-child-input-field" required>
                            <option value="" disabled selected>Seleccionar Género</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>

                    <div class="add-child-input-container">
                        <input id="add-child-nickname" name="nickname" class="add-child-input-field" placeholder="Ingresar Nombre de Usuario" required>
                    </div>

                    <div class="add-child-button-container">
                        <button type="submit" class="add-child-submit-button">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
    @include('layouts.footer')
</body>
<script src="{{ asset('js/addchild.js') }}"></script>
@endsection
