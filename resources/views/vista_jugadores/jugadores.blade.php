@extends('layouts.header1')

@section('title', 'Lista de jugadores')

@section('content')

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://kit.fontawesome.com/58965c32f8.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/vista_jugadores/jugadores.css') }}">


</head> 
<body>
    <main id="principal">
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
        <div class="decoracion">
        </div>
        <h2>Mis jugadores</h2>
        <hr>
        <button class="switch" id="switch">
            <span><img src="{{ asset('img/vista_jugadores/sol.png') }}" alt="sol"></span>
            <span><img src="{{ asset('img/vista_jugadores/luna.png') }}" alt="luna"></span>
        </button>

        <a href="{{route('add_child')}}"><button id="agregar" class="agregar">Agregar Jugador</button></a>
        {{-- <button id="eliminarSeleccionadosBtn" class="eliminar" onclick="loadChildrens()">Eliminar Jugador</button> --}}
        <section>

    <div id="agregados" style="margin-top: 20px;" class="agregados">

    </div>

    <div class="modal" id="childModal" style="display: none;">
        <div class="modal-content">
            <span class="close" id="closeModal">&times;</span>
            <div class="modal-header">
                <h2>Información del Niño</h2>
            </div>
            <div class="information">
                <div class="columna1">
                    <p><strong>Nombres:</strong> <span id="modalChildName"></span></p>
                    <p><strong>Apellidos:</strong> <span id="modalChildLastname"></span></p>
                    <p><strong>Edad:</strong> <span id="modalChildBirthdate"></span></p>
                    <p><strong>Relación:</strong> <span id="modalChildRelation"></span></p>
                </div>
                <div class="columna2">
                    <p><strong>Género:</strong> <span id="modalChildGender"></span></p>
                    <p><strong>Diamantes:</strong> <span id="modalChildDiamonds"></span></p>
                    <p><strong>Nickname:</strong> <span id="modalChildNickname"></span></p>
                </div>
            </div>
            <br>
            <br>
            <div class="botonera">
            <button id="editButton" class="edit-button">Editar</button>
            <button id="deleteChildButton" class="delete-button">Eliminar</button>
        </div>
        </div>
    </div>
    {{-- modal para implementar edicion del niño --}}
    <div class="modal" id="editChildModal" style="display: none;">
        <div class="modal-content">
            <span class="close" id="closeEditModal">&times;</span>
            <div class="modal-header">
                <h2>Editar Información Niño</h2>
            </div>
            <div class="information">
                <div class="columna1">
                    <p><strong>Nombres:</strong> <input type="text" id="editModalChildName" /></p>
                    <p><strong>Apellidos:</strong> <input type="text" id="editModalChildLastname" /></p>
                    <p><strong>Edad:</strong> <input type="text" id="editModalChildBirthdate" /></p>
                </div>
                <div class="columna2">
                    <p><strong>Relación:</strong> <input type="text" id="editModalChildRelation" /></p>
                    <p><strong>Género:</strong> <input type="text" id="editModalChildGender" /></p>
                    <p><strong>Diamantes:</strong> <input type="text" id="editModalChildDiamonds" /></p>
                    <p><strong>Nickname:</strong> <input type="text" id="editModalChildNickname" /></p>
                </div>
            </div>
            <br>
            <br>
            <button id="saveButton" class="save-button">Guardar</button>
        </div>
    </div>
    

    </section>
    </aside>
    <script src="{{asset('js/perfil_padre/perfil_padre_oscuro.js')}}"></script>
    <script src="{{asset('js/vista_jugadores/mostrar_jugador.js')}}"></script>
    {{-- <script src="{{asset('js/vista_jugadores/editar_jugadores.js')}}"></script> --}}
    {{-- <script src="{{asset('js/perfil_padre/todo.js')}}"></script> 
    <script src="{{asset('js/perfil_padre/foto_perfil.js')}}"></script>  --}}
    </main>
</body>
@include('layouts.footer')
</html>
@endsection






