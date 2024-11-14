// Crear elementos de audio
const bgMusic = new Audio("/sound/sound_gamedino/Cubik.mp3");
bgMusic.loop = true;

const scoreSound = new Audio(
    "data:audio/wav;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAA5TEFNRTMuOTlyAc0AAAAAAAAAABSAJAOkQgAAgAAABobXt9CWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
);

const crashSound = new Audio(
    "data:audio/wav;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAA5TEFNRTMuOTlyAc0AAAAAAAAAABSAJAOkQgAAgAAABobXyW9yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
);

let isMusicPlaying = true;

function toggleMusic() {
    const musicButton = document.querySelector(".audioButton");
    if (isMusicPlaying) {
        bgMusic.pause();
        musicButton.textContent = "MUSIC: OFF";
    } else {
        bgMusic.play();
        musicButton.textContent = "MUSIC: ON";
    }
    isMusicPlaying = !isMusicPlaying;
}

const gameContainer = document.getElementById("gameContainer");
const ship = document.getElementById("ship");
const scoreElement = document.getElementById("score");
const startScreen = document.getElementById("startScreen");
const gameOverScreen = document.getElementById("gameOverScreen");
const finalScoreElement = document.getElementById("finalScore");

let gameRunning = false;
let score = 0;
let shipY = 300;
let obstacles = [];
let obstacleSpeed = 4;
let obstacleInterval = 1500;
let gameLoop;
let obstacleGenerator;

gameContainer.addEventListener("mousemove", (e) => {
    if (gameRunning) {
        const rect = gameContainer.getBoundingClientRect();
        const y = e.clientY - rect.top;
        shipY = Math.max(15, Math.min(570, y));
        ship.style.top = shipY - 15 + "px";
    }
});

function startGame() {
    if (isMusicPlaying) {
        bgMusic.currentTime = 0;
        bgMusic.play();
    }

    gameRunning = true;
    score = 0;
    shipY = 300;
    obstacles = [];
    obstacleSpeed = 4;
    obstacleInterval = 1500;

    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    scoreElement.textContent = "0";
    ship.style.top = "280px";
    ship.style.left = "50px";

    document.querySelectorAll(".obstacle").forEach((obs) => obs.remove());

    gameLoop = setInterval(updateGame, 16);
    obstacleGenerator = setInterval(createObstacle, obstacleInterval);
}

function createObstacle() {
    const createDouble = Math.random() < 0.3;

    function createSingleObstacle() {
        const obstacle = document.createElement("div");
        obstacle.className = "obstacle";
        obstacle.style.left = "800px";
        obstacle.style.top = Math.random() * 570 + "px";
        obstacle.style.backgroundImage = "url('/img/imagenes_game/obstacule.png')"; // Asegúrate que la ruta sea correcta
        obstacle.style.backgroundSize = "cover"; // Ajusta el tamaño de la imagen
        obstacle.style.width = "50px"; // Ajusta el tamaño del obstáculo
        obstacle.style.height = "50px"; // Ajusta el tamaño del obstáculo
        gameContainer.appendChild(obstacle);
        obstacles.push(obstacle);
    }
    createSingleObstacle();
    if (createDouble) {
        setTimeout(() => createSingleObstacle(), obstacleInterval / 3);
    }

    if (score > 0 && score % 10 === 0) {
        obstacleSpeed += 0.7;
        if (obstacleInterval > 800) {
            clearInterval(obstacleGenerator);
            obstacleInterval -= 150;
            obstacleGenerator = setInterval(createObstacle, obstacleInterval);
        }
    }
}

function updateGame() {
    if (!gameRunning) return;

    obstacles.forEach((obstacle, index) => {
        const x = obstacle.offsetLeft - obstacleSpeed;
        obstacle.style.left = x + "px";

        if (checkCollision(obstacle)) {
            crashSound.play();
            gameOver();
            return;
        }

        if (x < -30) {
            obstacle.remove();
            obstacles.splice(index, 1);
            score++;
            scoreElement.textContent = score;
            scoreSound.currentTime = 0;
            scoreSound.play();
        }
    });
}

function checkCollision(obstacle) {
    const shipRect = ship.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    return !(
        shipRect.right < obstacleRect.left ||
        shipRect.left > obstacleRect.right ||
        shipRect.bottom < obstacleRect.top ||
        shipRect.top > obstacleRect.bottom
    );
}

function gameOver() {
    gameRunning = false;
    clearInterval(gameLoop);
    clearInterval(obstacleGenerator);
    gameOverScreen.style.display = "flex";
    finalScoreElement.textContent = score;
    bgMusic.pause();
    bgMusic.currentTime = 0;
}

function restartGame() {
    startGame();
}
