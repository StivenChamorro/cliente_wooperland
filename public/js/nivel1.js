//const imagen = document.getElementById('pixel1');

// Función para cambiar la posición de la imagen
//function cambiarPosicion() {
    //const contenedor = document.getElementById('nivel');

    // Generar nuevas posiciones aleatorias
    // const maxWidth = contenedor.clientWidth - imagen.clientWidth;
    // const maxHeight = contenedor.clientHeight - imagen.clientHeight;

    // const nuevaPosX = Math.floor(Math.random() * maxWidth);
    // const nuevaPosY = Math.floor(Math.random() * maxHeight);

    // Aplicar nuevas posiciones
    // imagen.style.left = `${nuevaPosX}px`;
    // imagen.style.top = `${nuevaPosY}px`;
    //imagen.style.left = `44%`;
    //imagen.style.top = `58%`;
//}

// Asignar la función al evento click de la imagen
//imagen.addEventListener('click', cambiarPosicion);



// Quiz questions
const questions = [
    {
      "id": 1,
      "question": "Si tienes 15 caramelos y los quieres repartir entre 3 amigos, ¿cuántos caramelos le tocan a cada uno?",
      "answers": ["5", "3", "6", "7"],
      "correctAnswer": "5",
      "score": 100,
      "clue": "Divide quince entre tres."
    },
    {
      "id": 2,
      "question": "¿Cuánto es 7 x 8?",
      "answers": ["56", "49", "64", "72"],
      "correctAnswer": "56",
      "score": 100,
      "clue": "Es un número entre 50 y 60."
    },
    {
      "id": 3,
      "question": "En una caja hay 24 lápices y Juan se lleva la cuarta parte. ¿Cuántos lápices toma Juan?",
      "answers": ["6", "8", "12", "18"],
      "correctAnswer": "6",
      "score": 100,
      "clue": "La cuarta parte significa dividir en cuatro partes iguales."
    },
    {
      "id": 4,
      "question": "Si sumas tres docenas de huevos, ¿cuántos huevos tienes en total?",
      "answers": ["36", "24", "48", "30"],
      "correctAnswer": "36",
      "score": 100,
      "clue": "Recuerda que una docena son doce."
    },
    {
      "id": 5,
      "question": "¿Cuál es el resultado de 100 - 37?",
      "answers": ["63", "67", "73", "57"],
      "correctAnswer": "63",
      "score": 100,
      "clue": "Es un poco más de sesenta."
    },
    {
      "id": 6,
      "question": "Si una pizza se divide en 8 partes iguales y comes 3, ¿qué fracción de la pizza has comido?",
      "answers": ["3/8", "1/4", "1/2", "5/8"],
      "correctAnswer": "3/8",
      "score": 100,
      "clue": "Tres de las ocho partes de la pizza."
    },
    {
      "id": 7,
      "question": "¿Cuánto es 45 ÷ 5?",
      "answers": ["9", "10", "8", "7"],
      "correctAnswer": "9",
      "score": 100,
      "clue": "Es un número entre cinco y diez."
    },
    {
      "id": 8,
      "question": "Si tienes un cuadrado de 4 cm de lado, ¿cuál es su área en centímetros cuadrados?",
      "answers": ["16", "8", "12", "20"],
      "correctAnswer": "16",
      "score": 100,
      "clue": "Multiplica cuatro por cuatro."
    },
    {
      "id": 9,
      "question": "Si 3/4 de un grupo de 20 estudiantes usan gafas, ¿cuántos estudiantes usan gafas?",
      "answers": ["15", "10", "5", "12"],
      "correctAnswer": "15",
      "score": 100,
      "clue": "Multiplica veinte por tres cuartos."
    },
    {
      "id": 10,
      "question": "¿Cuál es el valor de 9² (9 al cuadrado)?",
      "answers": ["81", "72", "18", "99"],
      "correctAnswer": "81",
      "score": 100,
      "clue": "Nueve multiplicado por nueve."
    }
];

let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let timerInterval;
let startTime;

let correctAnswersCount = 0;
let incorrectAnswersCount = 0;

// Función para reproducir texto en audio
function playAudio(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES'; // Español (España), ajusta según tu preferencia
    window.speechSynthesis.speak(utterance);
}


// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to update the question and answers
function updateQuestion() {
    const question = questions[currentQuestionIndex];
    document.querySelector('.question-bubble p').textContent = question.question;
    document.querySelector('.equation p').textContent = question.question;
    document.querySelector('.question-counter').textContent = `${currentQuestionIndex + 1} de ${questions.length}`;

    const shuffledAnswers = shuffleArray([...question.answers]);
    const answerButtons = document.querySelectorAll('.answer-button');
    
    shuffledAnswers.forEach((answer, index) => {
        answerButtons[index].textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
        answerButtons[index].classList.remove('bg-green-500', 'bg-red-500');
        answerButtons[index].disabled = false;
    });

    document.querySelector('.question-bubble').classList.remove('bg-green-200', 'bg-red-200');
    selectedAnswer = null;
}

// Function to handle answer selection
function selectAnswer(button) {
    if (selectedAnswer !== null) return;

    selectedAnswer = button.textContent.slice(3); // Remove the "X. " prefix
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correctAnswer;

    // Contar respuestas correctas e incorrectas
    if (isCorrect) {
        correctAnswersCount++;
        score += question.score;
    } else {
        incorrectAnswersCount++;
    }

    // Desactivar los botones de respuesta
    document.querySelectorAll('.answer-button').forEach(btn => btn.disabled = true);

    // Mostrar el botón de siguiente pregunta o finalizar el quiz
    if (currentQuestionIndex < questions.length - 1) {
        document.querySelector('.next-button').style.display = 'block';
    } else {
        endQuiz();
    }
}

//Function to start the time
function startTimer() {
    startTime = Date.now();
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

// Function to update the timer display
function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    document.querySelector('.timer').textContent = `Tiempo: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
}


// Function to end the quiz with correct and incorrect answers count
function endQuiz() {
    stopTimer();
    const quizContainer = document.querySelector('.quiz-container');
    const finalTime = document.querySelector('.timer').textContent.slice(7); // Remove "Tiempo: " prefix
    quizContainer.innerHTML = `
        <div class="quiz-end-screen">
            <h2 class="quiz-end-title">Quiz Terminado</h2>
            <p class="quiz-score">Tu puntuación final es: ${score} / ${questions.length * 100}</p>
            <p class="quiz-time">Tiempo total: ${finalTime}</p>
            <p class="quiz-results">Respuestas correctas: ${correctAnswersCount} | Respuestas incorrectas: ${incorrectAnswersCount}</p>
            <button class="restart-button">Reiniciar Quiz</button>
        </div>`;
    document.querySelector('.restart-button').addEventListener('click', restartQuiz);
}

// Function to restart the quiz and reset counters
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswersCount = 0;
    incorrectAnswersCount = 0;
    shuffleArray(questions);
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `
        <header>
            <div class="question-counter">1 de ${questions.length}</div>
            <button class="pause-button" aria-label="Pausar">
                <img src="/imgs/icon-pause.svg" alt="" class="pause-icon" />
            </button>
        </header>
        <main>
            <div class="question-bubble">
                <p></p>
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
            <button class="help-button" aria-label="Ayuda">?</button>
            <button class="audio-button" aria-label="Audio">
                <img class="audio-img" src="/imgs/audio-icon.svg" alt="" />
            </button>
            <div class="timer">Tiempo: 00:00</div>
        </footer>
        <button class="next-button" style="display: none;">Siguiente Pregunta</button>
    `;
    initializeQuiz();
}


// Function to initialize the quiz
function initializeQuiz() {
    updateQuestion();
    startTimer();
    
    document.querySelectorAll('.answer-button').forEach(button => {
        button.addEventListener('click', () => selectAnswer(button));
    });

    document.querySelector('.pause-button').addEventListener('click', () => {
        alert('Juego pausado');
        stopTimer();
    });

    document.querySelector('.help-button').addEventListener('click', () => {
        alert(questions[currentQuestionIndex].clue);
    });

    document.querySelector('.audio-button').addEventListener('click', () => {
        const question = questions[currentQuestionIndex];
        const answers = question.answers.join(', '); // Combina las respuestas en una sola cadena
        playAudio(`Pregunta: ${question.question}. Respuestas: ${answers}`);
    });
    
    document.querySelector('.next-button').addEventListener('click', () => {
        currentQuestionIndex++;
        updateQuestion();
        document.querySelector('.next-button').style.display = 'none';
    });
}

// Initialize the quiz when the page loads
window.addEventListener('load', () => {
    shuffleArray(questions);
    initializeQuiz();
});


