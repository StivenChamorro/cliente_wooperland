<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
    {{-- <script src="{{asset('js/script_escoger-imagen.js')}}"></script>
    <script src="{{asset('js/script_desplegable-perfil.js')}}"></script>
    <script src="{{asset('js/script_buscador_tienda.js')}}"></script>
    <script src="{{asset('js/script_input_responsive.js')}}"></script> --}}
    <script src="{{asset('js/traer_img_tienda.js')}}"></script>
    @vite(['resources/views/layouts/css-layouts/header_tienda.css'])
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
                    <h1 class="titulo_cambiar_imagen"> Cambiar foto de perfil</h1>
                    <img src="{{asset('imgs/imgs_achievements-haiver_velasco/img_escogida_cambiar_foto.png')}}" class="foto_actual">

                    
                    <div class="catalogo_fotos" id="catalogo_fotos">
                        <!-- Las imágenes se cargarán dinámicamente desde la API -->
                    </div>
                    <button class="boton_aceptar" id="aceptar_cambiar_imagen"> Aceptar </button>
                    <button class="boton_cancelar" id="cancelar_cambiar_imagen"> Cancelar </button>
                </div>
            </div>
            
            <div class="contenedor_desplegable_header">
                <div class="img_perfil_header">
                    <img src="{{ asset('imgs/imgs_store-haiver_velasco/wooper_header.png') }}" id="img_perfil_actual">
                </div>
                
                <div class="menu_perfil_desplegable" id="menu_desplegado_header">
                    <div class="nombre_usuario_desplegable">
                        <img src="{{asset('imgs/imgs_store-haiver_velasco/wooper_header.png')}}" class="img_perfil_desplegable" id="foto_perfil">
                        <h1 class="texto_nombre_usuario_desplegable"> Nick</h1>
                    </div>
                    <div class="barra_1_desplegable"></div>
                    <div class="container_perfil_desplegable_li">
                        <ol>
                            <li> <img src="{{asset('imgs/imgs_achievements-haiver_velasco/img_perfil.png')}}" alt=""> Tu Perfil</li>
                            <li> <img src="{{asset('imgs/imgs_achievements-haiver_velasco/img_cambiar_jugador.png')}}" alt=""> Cambiar de Jugador</li>
                            <li> <img src="{{asset('imgs/imgs_achievements-haiver_velasco/img_perfil_adulto.png')}}" alt=""> Perfil Adulto</li>
                        </ol>
                    </div>
                    <div class="barra_2_desplegable"></div>
                    <div class="cerrar_sesion_desplegable">
                        <img src="{{asset('imgs/imgs_achievements-haiver_velasco/img_cerrar_sesion.png')}}" alt="" class="img_cerrar_sesion_despleglable">
                        <h1 class="texto_cerrar_sesion_desplegable">Cerrar Sessión</h1>
                    </div>
                    </div>

                <div class="flecha_header"></div>
            </div>
        </div>
    </header>
    @yield('content') <!-- Aquí se inyectará el contenido de las vistas -->

</body>
</html>