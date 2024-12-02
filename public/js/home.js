// Referencias a los elementos del carrusel
let slider = document.querySelector('.slider .list');
let dotsContainer = document.querySelector('.slider .dots');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;

// Función para cargar los temas desde el backend
async function loadTopics() {
    try {
        // Obtener el token JWT de localStorage
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No se encontró un token. Inicia sesión para continuar.');
        }       

        // Solicitar los temas al backend
        const response = await fetch('https://backend-production-40d8.up.railway.app/v1/topic/index', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (response.status === 401) {
            alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
            window.location.href = '/login';
            return;
        } 

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error al cargar los temas: ' + response.statusText);
        }

        const topics = await response.json();

        // Renderizar las tarjetas en el carrusel
        topics.forEach((topic, index) => {
            // Crear el HTML de cada tema
            const item = document.createElement('div');
            item.classList.add('item');

            item.innerHTML = `
                <h2 class="title-carrusel">${topic.name.toUpperCase()}</h2>
                <img src="${topic.image}" alt="${topic.name}" class="topic-image">
                <div class="buttons-container">
                    <a href="level_preview/${topic.id}"><button class="button2">JUGAR</button></a>
                </div>
            `;

            slider.appendChild(item);

            // Crear las dots
            const dot = document.createElement('li');
            if (index === 0) dot.classList.add('active'); // La primera dot es activa por defecto
            dotsContainer.appendChild(dot);

            // Añadir evento a las dots
            dot.addEventListener('click', () => {
                active = index;
                reloadSlider();
            });
        });

        // Actualizar las referencias de los ítems del slider
        items = document.querySelectorAll('.slider .list .item');
        dots = document.querySelectorAll('.slider .dots li');
        reloadSlider();

    } catch (error) {
        console.error(error.message);
        alert('Hubo un problema al cargar los temas. Por favor, inténtalo más tarde.');
    }
}

// Función para recargar el slider al moverse
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    // Cambiar la dot activa
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    if (lastActiveDot) lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

// Navegación del carrusel
next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : 0;
    reloadSlider();
};

prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : items.length - 1;
    reloadSlider();
};

// Recargar el slider en caso de cambio de tamaño
window.onresize = function () {
    reloadSlider();
};

// Cargar los temas al cargar la página
window.onload = loadTopics;
