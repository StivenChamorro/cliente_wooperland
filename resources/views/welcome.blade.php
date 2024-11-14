<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wooperland</title>
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/js/app.js']) <!-- Referencia correcta a los archivos -->    

</head>
<body>
    <header>
        <div class="logo">
            <img class="img-logo" src="{{asset('imgs/imagenes_home/logo.png')}}" alt="Wooperland Logo">
            <h1>Wooperland</h1>
        </div>
        <ul class="menu">
            <li><a href="{{route('login')}}">Iniciar Sesión</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Ayuda</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Terminos y condiciones</a></li>
            <li><a href="#">Política de privacidad</a></li>
        </ul>
    </header>

    <div class="slider">
        <div class="list">
            <div class="item active">
                <img src="{{asset('imagenes_index/image.png')}}">
                <div class="content">
                    <p>Wooperland</p>
                    <h2>Astronomia</h2>
                    <p>Junto a wooper viaja a través del espacio, mientras conoces a nuestros planetas y estrellas vecinos</p>
                </div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/image copy.png')}}">
                <div class="content">
                    <p>Wooperland</p>
                    <h2>Arte</h2>
                    <p>Conoce a los artistas mas grandes de la historia, mientras aprendes de sus obras</p>
                </div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/image copy 2.png')}}">
                <div class="content">
                    <p>Wooperland</p>
                    <h2>Español</h2>
                    <p>Aprende español junto a wooper, descubriendo nuevas palabras y su significado</p>
                </div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/image copy 3.png')}}">
                <div class="content">
                    <p>Wooperland</p>
                    <h2>Ciencias Sociales</h2>
                    <p>Descubre, historias y datos que no conocías sobre el mundo, te deslumbrarás</p>
                </div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/image copy 4.png')}}">
                <div class="content">
                    <p>Wooperland</p>
                    <h2>Matemáticas</h2>
                    <p>Aprende sobre matemáticas de manera divertida, mientras ganas premios por completar cada nivel</p>
                </div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/image copy 5.png')}}">
                <div class="content">
                    <p>Wooperland</p>
                    <h2>Ciencias Naturales</h2>
                    <p>Adéntrate en la selva y conoce sobre los animales salvajes. Pero ten cuidado en tu viaje</p>
                </div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/image copy 6.png')}}">
                <div class="content">
                    <p>Wooperland</p>
                    <h2>Inglés</h2>
                    <p>Aprende inglés junto a wooper, algún día conocerás personas que hablen inglés. see you later</p>
                </div>
            </div>
            <div class="item">
                <video src="{{asset('imagenes_index/woopergame.mp4')}}" controls autoplay muted loop></video>
                <div class="content">
                    <p>Wooperland</p>
                    <h2>Minijuego</h2>
                    <p>Prueba nuestro minijuego, te será muy familiar pero es impresión tuya nada mas</p>
                </div>
            </div>
        </div>
        <div class="arrows">
            <button id="prev"><</button>
            <button id="next">></button>
        </div>
        <div class="thumbnail">
            <div class="item active">
                <img src="{{asset('imagenes_index/astronomia.png')}}">
                <div class="content">Astronomia</div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/arte.png')}}">
                <div class="content">Arte</div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/español.png')}}">
                <div class="content">Español</div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/sociales.png')}}">
                <div class="content">Ciencias Sociales</div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/matematicas.png')}}">
                <div class="content">Matemáticas</div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/naturales.png')}}">
                <div class="content">Ciencias Naturales</div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/ingles.png')}}">
                <div class="content">Inglés</div>
            </div>
            <div class="item">
                <img src="{{asset('imagenes_index/minijuego.png')}}">
                <div class="content">Minijuego</div>
            </div>
        </div>
    </div>

    <script>
        // JavaScript will be added here
    </script>
</body>
</html>