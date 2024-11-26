@extends('layouts.header1')

@section('custom_css')
    <link rel="stylesheet" href="{{ asset('css/addChild.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
@endsection

@section('content')
<body>
    <main class="main-container">
        <div class="form-container">
            <h1 class="form-title">Crear Nuevo Perfil</h1>
            <form id="childForm" class="form" enctype="multipart/form-data">
                <!-- Foto de perfil -->
                <div class="profile-pic-container">
                    <div class="profile-pic">
                        <img id="profileImage" src="https://via.placeholder.com/150" alt="Foto de Perfil" class="image">
                        <label for="avatar" class="upload-icon">
                            <i class="fas fa-plus"></i>
                        </label>
                        <input type="file" id="avatar" name="avatar" class="hidden" accept="image/*">
                    </div>
                </div>

                <!-- Nombre -->
                <div class="input-container">
                    <input id="name" name="name" class="input-field" placeholder="Ingresar Nombre" required>
                </div>

                <!-- Apellido -->
                <div class="input-container">
                    <input id="lastname" name="lastname" class="input-field" placeholder="Ingresar Apellido" required>
                </div>

                <!-- Fecha de nacimiento -->
                <div class="input-container">
                    <input type="date" id="birthdate" name="birthdate" class="input-field" required>
                </div>

                <!-- Relación con el niño -->
                <div class="input-container">
                    <select id="relation" name="relation" class="input-field" required>
                        <option value="" disabled selected>Relación con el Niño</option>
                        <option value="Padre/Madre">Padre/Madre</option>
                        <option value="Tutor">Tutor</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <!-- Género -->
                <div class="input-container">
                    <select id="gender" name="gender" class="input-field" required>
                        <option value="" disabled selected>Seleccionar Género</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>

                <!-- Nombre de Usuario -->
                <div class="input-container">
                    <input id="nickname" name="nickname" class="input-field" placeholder="Ingresar Nombre de Usuario" required>
                </div>

                <!-- Botón Siguiente -->
                <div class="button-container">
                    <button type="submit" class="submit-button">Registrar</button>
                </div>
            </form>
        </div>
    </main>
    @include('layouts.footer')
</body>
<script src="{{ asset('js/addchild.js') }}"></script>
@endsection
