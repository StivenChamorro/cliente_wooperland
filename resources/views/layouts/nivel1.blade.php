@extends('layouts.header')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Press+Start+2P&display=swap" rel="stylesheet">
@vite(['resources/views/layouts/css-layouts/nivel1.css'])

@endsection
   
@section('content')
<body>
    <div class="level-container">
        <div class="level-header" id="level-header-id">
            <!-- Imagen del profesor y pizarra -->
            <div class="level-teacher-container">
                <!-- Aquí va la imagen del profesor: profesor-matematicas.png -->
                <img src="{{asset('img/niveles/woopermatematico.png')}}" alt="Profesor de matemáticas" class="level-teacher-img">
            </div>
            <button class="level-learn-button" id="learn-button">Aprende </button>
        </div>

        <section class="level-why-math">
            <h2 class="level-section-title" id="level-description-id"></h2>
            <p class="level-explanation" id="level-explanation">
            </p>
        </section>

        <section id="nivel" class="nivel">
        <div id="quiz-container" class="quiz-container">
            <header class="header-quiz">
                <div class="question-counter">1 de 10</div>
                <button class="pause-button" aria-label="Pausar">
                    <img src="{{ asset('img/niveles/icon-pause.png') }}" alt="" class="pause-icon" />
                </button>
            </header>
            <main>
                <div class="question-bubble">
                    <p></p>
                </div>
                <div class="level-img">
                    <img src="{{asset('img/niveles/wooperquestion.png')}}" alt="" class="level-wooper">
                </div>
                <div class="equation">
                    <p></p>
                </div>
                <form class="answer-options">
                    <button type="button" class="answer-button"></button>
                    <button type="button" class="answer-button"></button>
                    <button type="button" class="answer-button"></button>
                    <button type="button" class="answer-button"></button>
                </form>
            </main>
            <footer>
                <div class="container-button">
                    <button class="help-button" aria-label="Ayuda">?</button>
                    <button class="audio-button" aria-label="Audio">
                        <img class="audio-img" src="{{asset('img/niveles/audio-icon.png')}}" alt="" />
                    </button>
                </div>
                <div class="timer">Tiempo: 00:00</div>
            </footer>
            <button class="next-button" style="display: none;">Siguiente Pregunta</button>
        </div>
    </div>

    <div class="relleno"></div>

    <script src="{{ asset('js/nivel1.js') }}"></script>



    @include('layouts.footer')

</body>
@endsection