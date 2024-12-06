<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
    <script src="{{asset('js/Shop/script_escoger-imagen.js')}}"></script>
    <script src="{{asset('js/script_desplegable-perfil.js')}}"></script>
    <script src="{{asset('js/script_buscador_tienda.js')}}"></script>
    @vite(['resources/views/layouts/css-layouts/header_tienda.css',
    'resources/views/layouts/css-layouts/header.css', 
    'resources/views/layouts/js-layouts/header.js', 
    'resources/views/layouts/js-layouts/headerShowDataChildren.js',
    'resources/views/layouts/js-layouts/changeplayer.js',])
    {{-- @vite(['resources/views/layouts/css-layouts/header_tienda.css','resources/css/app.css','resources/js/animate.js']) --}}

    <title>Document</title>
</head>
<body>

    <header>
        <div class="contenedor_header-store" >
            <div class="titulo_wooperland">
                <a href="{{ route('home') }}">
                <img class="logo1" src="{{asset('imgs/imgs_store-haiver_velasco/logo_wooperland.png')}}" alt="logo-wooperland">
                <img class="titulo1" src="{{ asset('imgs/imgs_store-haiver_velasco/wooperland_titulo.png') }}" alt="titulo-wooperland">
               </a>
            </div>
            <div class="input-header">
                <input type="text" placeholder="example: wooper Superheroe" alt="input_header_wooperland" id="buscador" class="search-input">
                {{-- <div class="barra_input_header"></div> --}}
                <img src="{{ asset('imgs/imgs_store-haiver_velasco/lupa_header.png') }}" alt="lupa_header_wooperland" id="search-toggle">
            </div>
            <div class="tienda_avatares">
                <button class="boton-tienda"> <a href="{{route('vista_3_store')}}"> Tienda</a></button>
                <div class="barra_tienda-avatares"></div>
                <button class="boton-avatares" id="mirar_imagenes"> Avatares</button>

                <div class="contenedor_cambiar_imagen" id="cambiar_imagen">
                    <h1 class="titulo_cambiar_imagen">  Cambiar foto de perfil</h1>
                    <img src="{{asset('imgs/imgs_achievements-haiver_velasco/img_escogida_cambiar_foto.png')}}" class="foto_actual">

                    <div class="catalogo_fotos">
                        <img src="{{asset('imgs/imgs_achievements-haiver_velasco/dragon_catagolo_cambiar_foto.png')}}" class="foto_disponible">
                        <img src="{{asset('imgs/imgs_achievements-haiver_velasco/wooperninja_catalogo_cambiar_foto.png')}}" class="foto_disponible">
                        <img src="{{asset('imgs/imgs_achievements-haiver_velasco/woopercibor_catalogo_cambiar_foto.png')}}" class="foto_disponible">
                        <img src="{{asset('imgs/imgs_achievements-haiver_velasco/superwooper_catalogo_cambiar_foto.png')}}" class="foto_disponible">
                        <img src="{{asset('imgs/imgs_achievements-haiver_velasco/ciberwooper_catalogo_cambiar_foto.png')}}" class="foto_disponible">
                        <img src="{{asset('imgs/imgs_achievements-haiver_velasco/woopercopa_catalogo_cambiar_foto.png')}}" class="foto_disponible">
                        <img src="{{asset('imgs/imgs_achievements-haiver_velasco/woopernieve_catalogo_cambiar_foto.png')}}" class="foto_disponible">
                        <img src="{{asset('imgs/imgs_achievements-haiver_velasco/deadpoolwooper_catalogo_cambiar_foto.png')}}" class="foto_disponible active">
                    </div>
                    
                    <button class="boton_aceptar" id="aceptar_cambiar_imagen"> Aceptar </button>
                    <button class="boton_cancelar" id="cancelar_cambiar_imagen"> Cancelar </button>
                </div>
            </div>
            <button class="button-profile">
                <img src="{{ asset('imgs/imagenes_home/image.svg') }}" alt="" class="profile-img" id="img_perfil_actual">
                <span><img src="{{ asset('imgs/imagenes_home/arrow.svg') }}" alt="" class="arrow-profile"></span>
            </button> 

            <section class="modal">
                <div class="modal-container" id="profileModal">
                    <div class="head-modal">
                        <img src="{{ asset('imgs/imagenes_home/profile.svg') }}" alt="" class="img-modal" id="foto_perfil">
                        <span class="head-modal-span"></span>
                    </div>
                    <div class="modal-options">
                        <ul>
                            <li>
                                <a href= "{{ route('Myprofile')}}"> 
                                    <img src="{{ asset('imgs/imagenes_home/profile-icon.svg') }}" alt=""class="profile-icon"> Tu Perfil
                                </a>
                            </li>
                            <li>
                                <a href="#change-player">
                                    <img src="{{ asset('imgs/imagenes_home/change-player.svg') }}" alt="" class="change-player-icon"> Cambiar de jugador
                                </a>
                            </li>
                            <li>
                                <a href="#adult-profile">
                                    <img src="{{ asset('imgs/imagenes_home/adult-profile.svg') }}"alt="" class="adult profile">Perfil Adulto
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="foot-modal">
                            <img src="{{ asset('imgs/imagenes_home/logout.svg') }}" alt="" class="icon-logout">
                            <span id="logout-session">Cerrar sesión</span>
                    </div>
                </div>
                <script src="{{asset('js/logout.js')}}"></script>
            </section>


        </div>
    </header>
    @yield('content') <!-- Aquí se inyectará el contenido de las vistas -->

</body>
</html>