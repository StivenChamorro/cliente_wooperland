@extends('layouts.header')

@section('custom_css')

<title>Aprende Matemáticas</title>
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&family=Press+Start+2P&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{asset('css/levelpreview.css')}}">

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
            <button class="level-learn-button" id="learn-button">Aprende Tema</button>
        </div>

        <section class="level-why-math">
            <h2 class="level-section-title" id="level-description-id"></h2>
            <p class="level-explanation" id="level-explanation">
                Las matemáticas son importantes para los niños porque les ayudan a desarrollar habilidades de pensamiento lógico y resolución de problemas. A través de las matemáticas, los niños aprenden a analizar situaciones, identificar patrones y tomar decisiones basadas en la lógica. Estas habilidades son fundamentales en la vida cotidiana, como cuando tienen que realizar compras, medir objetos o manejar el dinero. Además, las matemáticas fomentan la creatividad al encontrar soluciones innovadoras a problemas complejos.
            </p>
        </section>

        <main class="level-game-container">
            <!-- Fondo del juego con nubes y sol -->
            <div class="level-game-background">
                <!-- Aquí va la imagen del sol: sol.png -->
                <img src="{{asset('img/niveles/levelpreview.png')}}" alt="Sol" class="level-sun">
            </div>

            <div class="level-numbers-container" id="levels-container">
                <!-- Los niveles se generarán aquí dinámicamente -->
            </div>

            <!-- Aquí va la imagen del ajolote: ajolote.png -->
            <img src="{{asset('img/niveles/pixel1.png')}}" alt="Ajolote" class="level-axolotl">
        </main>
    </div>

    <!-- Modal para niveles bloqueados -->
    <div class="level-modal" id="lockedModal">
        <div class="level-modal-content">
            <h2>Nivel Bloqueado</h2>
            <p>Este nivel aún no está disponible</p>
            <button class="level-modal-close">Cerrar</button>
        </div>
    </div>

    <script src="{{asset('js/levelpreview.js')}}"></script>

    @include('layouts.footer')
    
</body>

@endsection