@extends('layouts.header')

@section('custom_css') 
<style> 
    /* Centrado vertical y horizontal de todo el contenido */
    body {
        height: 90vh; 
        font-family: 'Happy Monkey', cursive;
        background-color: #FFD166;
    }

    /* Contenedor principal del formulario */
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    /* Tarjeta que contiene el formulario */
    .card {
        border-radius: 16px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        background-color: white;
        padding: 2rem;
        width: 100%;
        max-width: 600px;
        box-sizing: border-box;
        text-align: center;
    }

    /* Título de la tarjeta */
    .card-title {
        color: #EF476F;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    /* Estilo del formulario y los campos de entrada */
    .form-control {
        border: none;
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        background-color: #f1f1f1;
        transition: background-color 0.3s ease;
    }

    .form-control:focus {
        background-color: #ffd166;
        box-shadow: 0 0 5px rgba(239, 71, 111, 0.5);
        outline: none;
    }

    .form-label {
        color: #333;
        font-weight: bold;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }

    /* Estilo del botón */
    .btn-primary {
        background-color: #EF476F;
        border: none;
        border-radius: 10px;
        padding: 1rem 2rem;
        font-size: 1.2rem;
        font-family: 'Happy Monkey', cursive;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .btn-primary:hover {
        background-color: #d63e63;
        transform: translateY(-2px);
    }

    /* Estilo de la alerta de éxito */
    .alert {
        border-radius: 10px;
        margin-bottom: 1rem;
        display: none;
        font-size: 1.1rem;
    }
    
</style>
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet"> 
@endsection

@section('content') 
<div class="container"> 
    <div class="card"> 
        <h2 class="card-title">Crear Nueva Pregunta</h2> 
        <div class="alert alert-success" id="successMessage" role="alert"> 
            ¡Registro Creado Exitosamente! 
        </div> 
        <form id="questionForm" method="POST" action=""> 
            @csrf 
            <div class="row">
                <div class="col-12 mb-3">
                    <label for="question" class="form-label">Pregunta</label>
                    <input type="text" class="form-control" id="question" name="question" required maxlength="200">
                </div>
                <div class="col-12 mb-3">
                    <label for="answer" class="form-label">Respuesta</label>
                    <input type="text" class="form-control" id="answer" name="answer" required maxlength="200">
                </div>
                <div class="col-md-4 mb-3">
                    <label for="score" class="form-label">Puntuación</label>
                    <input type="number" class="form-control" id="score" name="score" required max="100">
                </div>
                <div class="col-md-8 mb-3">
                    <label for="clue" class="form-label">Pista</label>
                    <input type="text" class="form-control" id="clue" name="clue" required maxlength="200">
                </div>
                <div class="col-12 mb-3">
                    <label for="correct_answer" class="form-label">Respuesta Correcta</label>
                    <input type="text" class="form-control" id="correct_answer" name="correct_answer" required maxlength="100">
                </div>
                <div class="col-12 text-center">
                    <button type="submit" class="btn btn-primary">Guardar Pregunta</button>
                </div>
            </div> 
        </form> 
    </div> 
</div> 
@include('layouts.footer') 
@endsection


{{-- @section('custom_js')
<script>
document.getElementById('questionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    fetch("{{ route('questions.store') }}", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify({
            question: document.getElementById('question').value,
            answer: document.getElementById('answer').value,
            score: document.getElementById('score').value,
            clue: document.getElementById('clue').value,
            correct_answer: document.getElementById('correct_answer').value
        })
    })
    .then(response => response.json())
    .then(data => {
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        
        // Limpiar el formulario
        document.getElementById('questionForm').reset();
        
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
</script> --}}
{{-- @endsection --}}