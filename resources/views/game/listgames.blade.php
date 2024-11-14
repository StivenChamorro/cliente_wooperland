@extends('layouts.header')

@section('custom_css')
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/game/listgames.css') }}">
@endsection

@section('content')

    <body>
        <div class="games-container">
            <div class="game-card">
                <h2 class="game-title"> WooperDino</h2>
                <img src="{{ asset('img/imagenes_game/gamedinopreview.png') }}" alt="Game 1" class="game-image">
                <p class="game-description">Divertido juego de wooper corre tan rapido como puedas</p>
                <a href="{{route('woopergamedino')}}"><button class="play-button">Play Now</button></a>
            </div>
            <div class="game-card">
                <h2 class="game-title">Space Runner</h2>
                <img src="{{ asset('img/imagenes_game/spacerunnerpreview.png') }}" alt="Game 2" class="game-image">
                <p class="game-description">Wooper en el espacio debe evitar estrellarse con meteoritos</p>
                <a href="{{route('woopergamespacerunner')}}"><button class="play-button">Play Now</button></a>
            </div>
        </div>
        
    </body>
    @include('layouts.footer')
@endsection
