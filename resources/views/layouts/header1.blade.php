<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    @yield('custom_css')

    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Press+Start+2P&display=swap" rel="stylesheet">
    
    <script src="{{asset('js/script_escoger-imagen.js')}}"></script>
    <script src="{{asset('js/script_desplegable-perfil.js')}}"></script>
    @vite(['resources/views/layouts/css-layouts/headersimple.css'])
    <title>Document</title>
</head>
<body>
    <header>
        <div class="logo-container">
            <img class="img-logo" src="{{asset('imgs/imagenes_home/logo.png')}}" alt="">
            <div class="logo">WOOPERLAND</div>
        </div>
    </header>

    @yield('content') <!-- Aquí se inyectará el contenido de las vistas -->

</body>
</html>