@extends('layouts.header')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/home.css')}}">

@endsection

@section('content')
<body>

    <section class="hero">
        <div class="hero-content">
            <img src="{{ asset('imgs/imagenes_home/hero.svg')  }}" alt="Wooper Character" class="img-hero">
            <div class="cta-title-content"><h2 class="cta-title">Bienvenidos a Wooperland!!</h2></div>
        </div>
    </section>

    <main>
        <section>
            <div class="wpland-content">
                <h2>¿Qué encontrarás en Wooperland?</h2>
                <div class="line">
                    <p>En este espacio encontrarás divertidos test y minijuegos en los que aprenderás y te divertirás al mismo tiempo, adéntrate y explora los diferentes temas de aprendizaje que tenemos para ti :)</p>
                </div>
            </div>
        </section>

        {{-- carrusel --}}
        <div class="slider">
            <div class="list">
                <!-- Aquí se renderizarán dinámicamente los temas -->
                
            </div>
            <div class="buttons">
                <button id="prev"><</button>
                <button id="next">></button>
            </div>
            <ul class="dots">
                <!-- Las dots también se generarán dinámicamente -->
            </ul>
        </div>
        

        <script src="{{asset('js/home.js')}}"></script>
        {{-- carrusel --}}

        <div class="description-container">
            <div class="description">
                <div class="text-container">
                    <h2>Beneficios de aprender jugando</h2>
                    <p>Aprender jugando es una forma divertida y efectiva de educación. A través del juego, los pequeños desarrollan habilidades cognitivas, sociales y emocionales. Les ayuda a resolver problemas, trabajar en equipo y potenciar su creatividad. Además, los juegos educativos refuerzan el aprendizaje de manera natural, lo que aumenta la retención y el entusiasmo por descubrir cosas nuevas. ¡Es la forma ideal de aprender mientras se divierten!</p>
                </div>
                <div class="img-container">
                    <img src="{{ asset('imgs/imagenes_home/kids.svg') }}" alt="Kids learning through play" class="kids-learning">
                </div>
            </div>

            <div class="description">
                <div class="img-container">
                    <img src="{{ asset('imgs/imagenes_home/minigame.svg') }}" alt="Minigame screenshot" class="kids-learning">
                </div>
                <div class="text-minigames">
                    <h2>Prueba nuestro minijuego</h2>
                    <p>¡No todo es tarea! A veces también hay que relajarse y divertirse. Dedicar tiempo a los juegos no solo es entretenido, sino que también puede ayudarte a mejorar la concentración. Equilibrar el trabajo con un buen rato de diversión es clave para sentirse bien y rendir mejor. Es por esa razón que Wooperland cuenta con un propio minijuego, nunca copiado.</p>
                </div>
            </div>
        </div>
    </main> 

    @include('layouts.footer')

</body>

@endsection

