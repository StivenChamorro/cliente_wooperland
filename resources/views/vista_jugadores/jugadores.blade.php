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
    <div class="agregara" id="agregara">
        <h1>Administrar Tarjetas</h1>
        <input type="file" id="inputImagen" accept="image/*" />
        <img src="{{ asset('img/perfil_padre/foto_usuario.png') }}"  alt="avatar" id="avatar">
        <input type="text" id="campo1" placeholder="Campo 1" />
        <input type="text" id="campo2" placeholder="Campo 2" />
        <input type="text" id="campo3" placeholder="Campo 3" />
        <input type="text" id="campo4" placeholder="Campo 4" />
        <input type="text" id="campo5" placeholder="Campo 5" />
        <input type="text" id="campo6" placeholder="Campo 6" />
        <button id="botonagregar" onclick="agregarTarjeta()">Agregar Tarjeta</button>

        <button id="cerrar" onclick="ocultarformulario()" class="back2" aria-label="Cerrar">×</button>
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

        <button id="agregar" class="agregar">Agregar Jugador</button>
        <button id="eliminarSeleccionadosBtn" class="eliminar" onclick="activarModoEliminar()">Eliminar Jugador</button>
        <section>

    <div id="agregados" style="margin-top: 20px;" class="agregados"></div>

    </section>
    </aside>
    <script src="{{asset('js/perfil_padre/perfil_padre_oscuro.js')}}"></script>
    <script src="{{asset('js/vista_jugadores/crear_jugadores.js')}}"></script>
    <script src="{{asset('js/vista_jugadores/visualizar.js')}}"></script>
    <script src="{{asset('js/perfil_padre/todo.js')}}"></script>
    {{-- <script src="{{asset('js/perfil_padre/foto_perfil.js')}}"></script>  --}}
    </main>
</body>
@include('layouts.footer')
</html>
@endsection
