// Variables globales
let questions = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let timerInterval;
let startTime;

let correctAnswersCount = 0;
let incorrectAnswersCount = 0;

// Obtener el token JWT de localStorage
const jwtToken = localStorage.getItem('token');
const childId = localStorage.getItem('selectedChildId'); 

const pathSegments = window.location.pathname.split('/');
const levelId = pathSegments[pathSegments.length - 1];


// Función para cargar las preguntas del backend
async function loadQuestions() {
    try {
        const pathSegments = window.location.pathname.split('/');
        const topicId = pathSegments[pathSegments.length - 2];
        const levelId = pathSegments[pathSegments.length - 1];

        if (!topicId || !levelId) {
            throw new Error('No se encontró el ID del tema o nivel en la URL.');
        }

        if (!jwtToken) {
            throw new Error('No se encontró un token. Por favor, inicia sesión.');
        }

        const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/topic/${topicId}/level/${levelId}/${childId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Error en la respuesta: ${response.status} ${response.statusText}`);
            console.error('Detalles del error:', errorText);
            throw new Error(`Error al cargar las preguntas: ${response.status} ${response.statusText}`);
        }

        const responseJson = await response.json();
        console.log(responseJson);

        // Extraer preguntas del nivel
        if (!responseJson || !responseJson.level || !Array.isArray(responseJson.level.question) || responseJson.level.question.length === 0) {
            throw new Error('No se encontraron preguntas en el servidor.');
        }

        // Asignar las preguntas desde `responseJson.level.question`
        questions = responseJson.level.question;
        console.log('Preguntas cargadas:', questions);

        shuffleArray(questions); // Barajar preguntas
        initializeQuiz(); // Iniciar el quiz
    } catch (error) {
        alert(`Error al cargar preguntas: ${error.message}`);
        console.error(error);
    }

    getDataLEvel()
}



async function getDataLEvel(){
    const pathSegments = window.location.pathname.split('/');
    const topicId = pathSegments[pathSegments.length - 2];


    // Solicitar los datos del tema al backend
    const response = await fetch(
        `https://backend-production-40d8.up.railway.app/v1/topic/levels/${topicId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwtToken}`,
            },
        }
    );

    if (response.status === 401) {
        alert(
            "Tu sesión ha expirado. Por favor, inicia sesión nuevamente."
        );
        window.location.href = "/login";
        return;
    }

    if (!response.ok) {
        throw new Error(
            "Error al cargar los datos del tema: " + response.statusText
        );
    }

    const topicData = await response.json();

    // Actualizar el encabezado con la imagen y el nombre del tema
    const header = document.getElementById("level-header-id");
    header.style.backgroundImage = `url(${topicData.image})`;

    const learnButton = document.getElementById("learn-button");
    learnButton.textContent = `Aprende ${topicData.name}`;

    const description = document.getElementById("level-description-id");
    description.textContent = `¿Por que ${topicData.name}?`;

    const explanation = document.getElementById("level-explanation");
    explanation.textContent = `${topicData.description}`;
}


// Función para reproducir texto en audio
function playAudio() {
    if (!questions[currentQuestionIndex]) {
        console.error('No hay preguntas disponibles para reproducir.');
        return;
    }

    const question = questions[currentQuestionIndex];
    const answersText = question.answers
        .map((answer, index) => `${String.fromCharCode(65 + index)}: ${answer.answer}`)
        .join('. ');

    const textToRead = `Pregunta: ${question.question}. Respuestas: ${answersText}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'es-ES';

    window.speechSynthesis.cancel(); // Detener cualquier reproducción en curso
    window.speechSynthesis.speak(utterance);
}

// Función para barajar un array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para actualizar la pregunta
function updateQuestion() {
    if (!questions[currentQuestionIndex]) {
        console.error('Índice de pregunta fuera de rango.');
        return;
    }

    const question = questions[currentQuestionIndex];
    document.querySelector('.question-bubble p').textContent = question.question;
    document.querySelector('.equation p').textContent = question.equation || '';
    document.querySelector('.question-counter').textContent = `${currentQuestionIndex + 1} de ${questions.length}`;

    const shuffledAnswers = shuffleArray([...question.answers]);
    const answerButtons = document.querySelectorAll('.answer-button');

    shuffledAnswers.forEach((answer, index) => {
        // Extraer el texto de la respuesta del objeto
        answerButtons[index].textContent = `${String.fromCharCode(65 + index)}. ${answer.answer}`;
        answerButtons[index].classList.remove('bg-green-500', 'bg-red-500');
        answerButtons[index].disabled = false;

        // Asocia las respuestas barajadas al botón
        answerButtons[index].dataset.answer = answer.answer;
    });

    document.querySelector('.question-bubble').classList.remove('bg-green-200', 'bg-red-200');
    selectedAnswer = null;

    
}


// Función para seleccionar una respuesta
function selectAnswer(button) {
    if (selectedAnswer !== null) return;

    selectedAnswer = button.textContent.slice(3); // Remover prefijo "X. "
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct_answer;

    if (isCorrect) {
        correctAnswersCount++;
        score += question.score;
        button.classList.add('bg-green-500');
    } else {
        incorrectAnswersCount++;
        button.classList.add('bg-red-500');
    }

    document.querySelectorAll('.answer-button').forEach(btn => btn.disabled = true);

    if (currentQuestionIndex < questions.length - 1) {
        document.querySelector('.next-button').style.display = 'block';
    } else {
        endQuiz();
    }
}

// Función para iniciar el temporizador
function startTimer() {
    startTime = Date.now();
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

// Función para actualizar el temporizador
function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    document.querySelector('.timer').textContent = `Tiempo: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Función para finalizar el quiz
function endQuiz() {
    clearInterval(timerInterval);
    const quizContainer = document.querySelector('.quiz-container');
    const finalTime = document.querySelector('.timer').textContent.slice(7);

    quizContainer.innerHTML = `
        <div class="quiz-end-screen">
            <h2 class="quiz-end-title">Quiz Terminado</h2>
            <p class="quiz-score">Puntuación final: ${questions.length * 100}</p>
            <p class="quiz-time">Tiempo total: ${finalTime}</p>
            <p class="quiz-results">Correctas: ${correctAnswersCount} | Incorrectas: ${incorrectAnswersCount}</p>
            <button class="restart-button">Reiniciar Quiz</button>
        </div>`;
    document.querySelector('.restart-button').addEventListener('click', restartQuiz);

    completeLevel(childId, levelId);
}

// Función para reiniciar el quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswersCount = 0;
    incorrectAnswersCount = 0;
    shuffleArray(questions);
    initializeQuiz();
}

// Función para inicializar el quiz
function initializeQuiz() {
    updateQuestion();
    startTimer();

    document.querySelectorAll('.answer-button').forEach(button => {
        button.addEventListener('click', () => selectAnswer(button));
    });

    document.querySelector('.pause-button').addEventListener('click', () => {
        alert('Juego pausado');
        clearInterval(timerInterval);
    });

    document.querySelector('.help-button').addEventListener('click', () => {
        alert(questions[currentQuestionIndex].clue || 'Sin pista disponible.');
    });

    document.querySelector('.audio-button').addEventListener('click', () => {
        const question = questions[currentQuestionIndex];
        playAudio(`Pregunta: ${question.question}. Respuestas: ${question.answers.join(', ')}`);
    });

    document.querySelector('.next-button').addEventListener('click', () => {
        currentQuestionIndex++;
        updateQuestion();
        document.querySelector('.next-button').style.display = 'none';
    });
}

//funcion para diamantes
async function completeLevel() {
    const token = localStorage.getItem('token');
    const childId = localStorage.getItem('selectedChildId'); 

    const pathSegments = window.location.pathname.split('/');
    const levelId = pathSegments[pathSegments.length - 1];
    const topicId = pathSegments[pathSegments.length - 2];

    try {
        const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/topic/children/${childId}/levels/${levelId}/complete`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Nivel completado:', data);
            alert(`¡Nivel completado! Diamantes: ${data.diamonds}`);
            window.location.href = `/level_preview/${topicId}`
        } else {
            const errorText = await response.text();
            console.error('Error en la respuesta:', errorText);
            alert(`Error al completar el nivel: ${errorText}`);
        }
    } catch (error) {
        console.error('Error al completar el nivel:', error);
        alert('Ocurrió un error al completar el nivel. Por favor, inténtalo nuevamente.');
    }
}

// Cargar preguntas al inicio
window.addEventListener('load', () => {
    if (!jwtToken) {
        alert('No estás autenticado. Por favor, inicia sesión.');
        window.location.href = '/login';
        return;
    }
    loadQuestions();
});


