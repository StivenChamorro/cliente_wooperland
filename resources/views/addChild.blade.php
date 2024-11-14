@extends('layouts.header1')

@section('custom_css')

    <link rel="stylesheet" href="{{ asset('css/addChild.css')}}">
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">

@endsection

@section('content')

<body>
    <main class="main-container">

            <!-- Formulario -->
            <div class="form-container">
                <h1 class="form-title">Crear Nuevo Perfil</h1>
                <form action="home" class="form">
                    <!-- Foto de perfil con ícono de añadir -->
                    <div class="profile-pic-container">
                        <div class="profile-pic">
                            <img id="profileImage" src="https://via.placeholder.com/150" alt="Foto de Perfil" class="image">
                            <label for="profilePicture" class="upload-icon">
                                <i class="fas fa-plus"></i>
                            </label>
                            <input type="file" id="profilePicture" class="hidden" accept="image/*">
                        </div>
                    </div>

                    <!-- Nombre -->
                    <div class="input-container">
                        <input class="input-field" placeholder="Ingresar Nombre">
                    </div>

                    <!-- Apellido -->
                    <div class="input-container">
                        <input class="input-field" placeholder="Ingresar Apellido">
                    </div>

                    <!-- Edad -->
                    <div class="input-container">
                        <input type="number" class="input-field" placeholder="Ingresar Edad" min="0" max="10">
                    </div>

                    <!-- Relación con el niño -->
                    <div class="input-container">
                        <select class="input-field">
                            <option value="" disabled selected>Relación con el Niño</option>
                            <option>Padre/Madre</option>
                            <option>Tutor</option>
                            <option>Otro</option>
                        </select>
                    </div>

                    <!-- Género -->
                    <div class="input-container">
                        <select class="input-field">
                            <option value="" disabled selected>Seleccionar Género</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                    </div>

                    <!-- Nombre de Usuario -->
                    <div class="input-container">
                        <input class="input-field" placeholder="Ingresar Nombre de Usuario">
                    </div>

                    <!-- Botón Siguiente -->
                    <div class="button-container">
                        <button class="submit-button">Siguiente</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
    @include('layouts.footer')
</body>

@endsection