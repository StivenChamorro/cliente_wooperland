@extends('layouts.header1')
@section('content')

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://kit.fontawesome.com/58965c32f8.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/perfil_padre/perfil_padre.css') }}">

</head>
<body>
    <main>
    <div class="vistas">
        <h3>John Smith</h3>
            <input type="file" id="inputFoto" accept="image/*" />
            <button class="camara" onclick="cargarFoto()">
                <img src="{{ asset('img/perfil_padre/camara.png') }}" alt="camara">
            </button>
            <img src="{{ asset('img/perfil_padre/foto_usuario.png') }}"  alt="avatar" id="avatar">
            <div class="menu">
                <div class="item" id="perfil">
                    <a href="{{route('profile_father')}}">
                        <div class="img">
                    <img src="{{ asset('img/vista_jugadores/persona.png') }}" alt="persona">
                        </div>
                    <p>perfil</p>
                    </a>
                </div>

                <div class="item" id="jugador">
                    <a href="{{route('father_users')}}">
                    <div class="img">
                    <img src="{{ asset('img/vista_jugadores/jugador.png') }}" alt="jugador">
                    </div>
                    <p>jugadores</p>
                </a>
                </div>

                <div class="item" id="home"><a href="{{route('home')}}">
                    <div class="img">
                    <img src="{{ asset('img/vista_jugadores/home.png') }}" alt="home">
                    </div>
                    <p>home</p>
                </a>
                </div>

                <div class="item">
                    <a href="{{route('welcome')}}">
                        <div class="img">
                    <img src="{{ asset('img/perfil_padre/cerrar.png') }}" alt="cerrar">
                        </div>
                    <p>cerrar sesion</p>
                </a>
                </div>

            </div>
    </div>
    <aside>
        <h2>Mi cuenta</h2>
        <hr>
        <button class="switch" id="switch">
            <span><img src="{{ asset('img/perfil_padre/sol.png') }}" alt="sol"></span>
            <span><img src="{{ asset('img/perfil_padre/luna.png') }}" alt="luna"></span>
        </button>
        <section>
            <div class="perfil" id="perfil">
                <div class="informacion" id="informacion">
                    <h3>Información Personal</h3>
                    <div class="usuario">
                        <img src="{{ asset('img/perfil_padre/foto_usuario.png') }}" alt="foto usuario">
                        <h2 id="nombreUsuario"></h2> <!-- Correcto ID -->
                    </div>
                    <h4>Nombre</h4>
                    <p class="editable" id="nombres"></p> <!-- Correcto ID -->
                    <hr>
                    <h4>Apellido</h4>
                    <p class="editable" id="apellidos"></p> <!-- Correcto ID -->
                    <hr>
                    <h4>Fecha Nacimiento</h4>
                    <p class="editable" id="fechaNacimiento"></p> <!-- Correcto ID -->
                    <hr>
                    <h4>Correo Electrónico</h4>
                    <p class="editable" id="correo"></p> <!-- Correcto ID -->
                    <hr>

                    <button id="cambiar"><p>Editar</p></button>
                </div>



            </div>

            <!-- Modal para editar perfil -->
<div id="editProfileModal" class="modal" style="display:none;">
    <div class="modal-content">
        <div class="contenido">
        <span class="close" id="closeModal">&times;</span>
        <h2>Editar Perfil</h2>
        <div>
            <h4>Usuario:</h4>
            <input type="text" id="ediUsuario" placeholder="Ingrese su nombre de usuario">
            <hr>
        </div>
        <div>
            <h4>Nombre:</h4>
            <input type="text" id="editNombre" placeholder="Ingrese su nombre">
            <hr>
        </div>
        <div>
            <h4>Apellidos:</h4>
            <input type="text" id="editApellidos" placeholder="Ingrese sus apellidos">
            <hr>
        </div>
        <div>
            <h4>Fecha Nacimiento:</h4>
            <input type="date" id="editFechaNacimiento" placeholder="Ingrese su fecha de nacimiento">
            <hr>
        </div>
        <div>
            <h4>Correo Electrónico:</h4>
            <input type="email" id="editCorreo" placeholder="Ingrese su correo electrónico">
            <hr>
        </div>
    </div>
        <br>
        <button id="saveChanges">Guardar</button>

    </div>
</div>

    </section>
    </aside>

</main>

</body>
<script src="{{ asset('js/perfil_padre/perfil_padre_oscuro.js') }}"></script>
<script src="{{asset('js/perfil_padre/todo.js')}}"></script>
{{-- <script src="{{asset('js/perfil_padre/foto_perfil.js')}}"></script> --}}

@include('layouts.footer')
</html>

@endsection
