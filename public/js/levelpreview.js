document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const lockedLevels = document.querySelectorAll('.level-locked');
    const modal = document.getElementById('lockedModal');
    const closeButton = document.querySelector('.level-modal-close');

    // Manejador para niveles bloqueados
    lockedLevels.forEach(level => {
        level.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    });

    // Cerrar modal
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Nivel activo (1)
    const activeLevel = document.querySelector('.level-active');
    activeLevel.addEventListener('click', function() {
        // Aquí puedes agregar la lógica para iniciar el nivel 1
        console.log('Iniciando nivel 1');
    });

    // Función para posición aleatoria de nubes (efecto visual adicional)
    function randomizeCloudPositions() {
        const clouds = document.querySelectorAll('.level-cloud');
        clouds.forEach(cloud => {
            const randomTop = Math.random() * 30;
            const randomLeft = Math.random() * 80;
            cloud.style.top = `${randomTop}%`;
            cloud.style.left = `${randomLeft}%`;
        });
    }

    // Inicializar posiciones de nubes
    randomizeCloudPositions();
    setInterval(randomizeCloudPositions, 10000); // Cambiar posiciones cada 10 segundos
});


async function loadLevels() {
    try {
        // Obtener el ID del tema desde la URL
        const pathSegments = window.location.pathname.split('/');
        const topicId = pathSegments[pathSegments.length - 1];

        if (!topicId) {
            throw new Error('No se encontró el ID del tema en la URL.');
        }

        // Obtener el token JWT
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No se encontró un token. Inicia sesión para continuar.');
        }

        // Solicitar los datos del tema al backend
        const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/topic/levels/${topicId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.status === 401) {
            alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
            window.location.href = '/login';
            return;
        }

        if (!response.ok) {
            throw new Error('Error al cargar los datos del tema: ' + response.statusText);
        }

        const topicData = await response.json();

        // Actualizar el encabezado con la imagen y el nombre del tema
        const header = document.getElementById('level-header-id');
        header.style.backgroundImage = `url(${topicData.image})`;

        const learnButton = document.getElementById('learn-button');
        learnButton.textContent = `Aprende ${topicData.name}`;

        const description = document.getElementById('level-description-id');
        description.textContent = `¿Por que ${topicData.name}?`

        const explanation = document.getElementById('level-explanation');
        explanation.textContent = `${topicData.description}`

        // Renderizar los niveles
        const levels = topicData.levels || [];
        const levelsContainer = document.getElementById('levels-container');
        levelsContainer.innerHTML = '';

        levels.forEach(level => {
            const levelItem = document.createElement('div');
            levelItem.classList.add('level-item');
            levelItem.innerHTML = `
                <h3>${level.name}</h3>
                <p>Recomepensa: ${level.score}</p>
                <button class="start-game-button" data-level-id="${level.id}">Jugar</button>
            `;
            levelsContainer.appendChild(levelItem);
        });
    } catch (error) {
        console.error(error.message);
        alert(error.message || 'Hubo un problema al cargar los datos del tema.');
    }
}

window.onload = loadLevels;
