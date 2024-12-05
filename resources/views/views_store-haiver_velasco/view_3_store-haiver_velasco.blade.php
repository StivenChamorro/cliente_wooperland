@extends('layouts.header_tienda')

@section('content')
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>STORE VIEW 1 </title>
    <link rel="stylesheet" href="{{ asset('css/Tienda-haiver_velasco.css/vista_3_tienda-haiver_velasco.css') }}">
    <script src="{{asset('js/script_buscador_tienda.js')}}"></script>
    <script src="{{asset('js/script_escoger-imagen.js')}}"></script>
    <script src="{{asset('js/script_desplegable-perfil.js')}}"></script>
    <script src="{{asset('js/traer_img_tienda.js')}}"></script>
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
</head>

<body>
{{-- Contenido --}}
    <main>
        <div class="contenedor_main">

            <div class="titulo_store">
                <h1 class="titulo">Tienda de Wooper</h1>
            </div>
            <div class="barra_4_main"></div>
            <div class="descripcion_store">
                <h1 class="text_descripcion_store">
                    En esta tienda encontrarás una amplia variedad de avatares para personalizar tu perfil a tu
                    manera.
                    Wooper no es solo un ajolote cualquiera, ¡es todo lo que puedas imaginar! Desde bombero,
                    florista y
                    campeón de trofeos, hasta un samurái maestro en sables o un cyber-wooper llegado del futuro.
                    Explora
                    todas las increíbles versiones de Wooper y lleva tu imaginación al siguiente nivel. ¡Elige tu
                    favorito y destaca con estilo!
                </h1>
            </div>

            <img class="img_store_descripcion" src="{{ asset('imgs/imgs_store-haiver_velasco/img_descripcion.png') }}"
                alt="img referente a la tienda">
            <div class="barra_5_main"></div>
            <div class="contenedor_tus_diamantes">
                <h1 class="texto_tus-diamantes"> Tus Diamantes </h1>
                <div class="diamantes">
                    <h1 class="texto_diamantes_boton" id="tus_diamantes">💎 0</h1>
                </div>
            </div>
            <div class="barra_6_main"></div>

            <div class="contenedor_imgs_store" id="contedido_buscador">
                <!-- Las imágenes se cargarán dinámicamente desde la API -->
            </div>

            {{-- Contenedor Tarjeta de Compra --}}
            <div class="container_tarjeta" id="modal_desplegado">
                <div class="img_BD">
                    <h1 class="titulo_anuncio_compra"> </h1>
                    <p class="texto_anuncio_compra"> </p>
                    <h2 class="costo_anuncio_compra"></h2>
                    <div class="boton_comprar">
                        <button id="a_comprar"> Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    {{-- /Contenido --}}
    @include('layouts.footer')
</body>
</html>
@endsection
