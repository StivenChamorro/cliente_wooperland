<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>WooperDino</title>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/game/game.css')}}">
</head>
<body>
    <div class="container1">
        <a href="{{route('listgames')}}" class="return-icon">
            <img src="{{asset('img/imagenes_game/flecha-izquierda.png')}}" alt="Return" width="32" height="32">
        </a>
        
        <div class="contenedor">
            <div id="startScreen" class="screen">
                <h1>WOOPERDINO</h1>
                <button class="start-button" onclick="startGame()">COMENZAR</button>
            </div>

            <div class="game-screen">
                <div class="suelo"></div>
                <div class="dino dino-corriendo"></div>
                <div class="score">0</div>
            </div>

            <div class="game-over screen">
                <h2>GAME OVER</h2>
                <div class="final-score">SCORE: <span>0</span></div>
                <button class="retry-button" onclick="restartGame()">REINTENTAR</button>
            </div>
        </div>
    </div>
    
    <audio src="{{asset('sound/sound_gamedino/salto.mp3')}}" class="audio-salto"></audio>
    <audio src="{{asset('sound/sound_gamedino/gameOver.mp3')}}" class="audio-gameOver"></audio>
    <script src="{{asset('js/script_game.js')}}"></script>
</body>
</html>