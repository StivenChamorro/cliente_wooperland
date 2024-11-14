<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Space Runner</title>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/game/spacerunner.css')}}">
</head>
<body>
    <div id="gameContainer">
        <a href="{{route('listgames')}}" class="return-icon">
            <img src="{{asset('img/imagenes_game/flecha-izquierda.png')}}" alt="Return" width="32" height="32">
        </a>
        <div id="startScreen">
            <h1>SPACE RUNNER</h1>
            <button class="button" onclick="startGame()">JUGAR</button>
        </div>
        <div id="gameOverScreen">
            <h1>GAME OVER</h1>
            <div class="score-text">SCORE: <span id="finalScore">0</span></div>
            <button class="button" onclick="restartGame()">REINTENTAR</button>
        </div>
        <div id="score">0</div>
        <div id="ship"></div>
        <div id="audioControls">
            <button class="audioButton" onclick="toggleMusic()">MUSIC: ON</button>
        </div>
    </div>
    <script src="{{asset('js/spacerunner.js')}}"></script>
</body>
</html>