@extends('layouts.header1')

@section('custom_css')
    <link rel="stylesheet" href="{{ asset('css/register.css')}}">
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
@endsection

@section('content')
<body>
    <main class="main-container">
        <div class="content-container">
            <div class="form-container">
                <h1 class="title">Regístrate</h1>
                <form action="#" class="form" onsubmit="register(event)">
                    <div class="input-row">
                        <div class="input-container2">
                            <label class="input-label">Nombres</label>
                            <input name="name" class="input-field2" placeholder="Ingresar Nombres">
                        </div>
                        <div class="input-container2">
                            <label class="input-label">Apellidos</label>
                            <input name="last_name" class="input-field2" placeholder="Ingresar Apellidos">
                        </div>
                    </div>
                
                    <div class="input-container">
                        <label class="input-label">Fecha de Nacimiento</label>
                        <input name="birthdate" type="date" class="input-field" placeholder="Seleccionar Fecha de Nacimiento">
                    </div>
                
                    <div class="input-container">
                        <label class="input-label">Correo Electrónico</label>
                        <input name="email" type="email" class="input-field" placeholder="Ingresar Correo Electrónico">
                    </div>
                
                    <div class="input-container">
                        <label class="input-label">Usuario</label>
                        <input name="user" class="input-field" placeholder="Ingresar Usuario">
                    </div>
                
                    <div class="input-container">
                        <label class="input-label">Contraseña</label>
                        <input name="password" type="password" class="input-field" placeholder="Ingresar Contraseña">
                    </div>
                
                    <div class="input-container">
                        <label class="input-label">Confirmar Contraseña</label>
                        <input name="password_confirmation" type="password" class="input-field" placeholder="Confirmar Contraseña">
                    </div>
                
                    <div class="button-container">
                        <button type="submit" class="register-button">Registrarme</button>
                    </div>

                    <script src="{{asset('js/register.js')}}"></script>
                </form>
            </div>

            <div class="image-container">
                <img src="img/register_image.png" alt="Registro" class="register-image">
            </div>
        </div>
    </main>

    @include('layouts.footer')
</body>
@endsection