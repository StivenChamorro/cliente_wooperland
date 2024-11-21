@extends('layouts.header1')

@section('custom_css')
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
@endsection
    
@section('content')
<body style="font-family: 'Happy Monkey', sans-serif;">
    <main class="main-background">
        <div class="container">
            <!-- Imagen solo visible en pantallas grandes -->
            <div class="image-container">
                <img src="{{ asset('img/login_image.png') }}" class="image" alt="Imagen de inicio de sesión">
            </div>
            <!-- Formulario centrado en todas las pantallas -->
            <div class="form-container">
                <h1 class="form-title">INICIAR SESIÓN</h1>
                
                <form id="loginForm" action="javascript:void(0);" class="form-grid">
                    <div class="input-group">
                        <label for="email" class="label">Nombre de Usuario</label>
                        <input id="email" name="email" type="email" class="input" placeholder="Usuario">
                    </div>

                    <div class="input-group">
                        <label for="password" class="label">Contraseña</label>
                        <input id="password" name="password" type="password" class="input" placeholder="Contraseña">
                    </div>

                    <div class="button-container">
                        <button type="button" class="submit-button" id="loginButton">Iniciar Sesión</button> 
                    </div>
                </form>

                <div>
                    <p class="register-text">¿No tienes cuenta?
                        <a href="{{ route('register') }}" class="register-link">Regístrate</a>
                    </p>
                </div>

                {{-- <div class="google-button-container">
                    <button class="google-button">
                        <img src="{{ asset('img/img-google.png') }}" alt="Google Icon" class="google-icon">
                        Continuar con Google
                    </button>
                </div> --}}
            </div>
        </div>
    </main>
    @include('layouts.footer')
    <script src="{{ asset('js/login.js') }}"></script>
</body>
@endsection
