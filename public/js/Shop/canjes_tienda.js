document.addEventListener('DOMContentLoaded', () => {
    const childId = localStorage.getItem('selectedChildId');
    const article = JSON.parse(localStorage.getItem('selectedArticle'));

    if (!childId || !article || !article.id || !article.price) {
        console.error('Datos faltantes o inválidos:', { childId, article });
        alert('Error: No se pueden cargar los datos necesarios. Verifica que seleccionaste un niño y un artículo válido.');
        return;
    }

    const buttonComprar = document.getElementById('a_comprar');
    if (buttonComprar) {
        buttonComprar.addEventListener('click', () => {
            realizarCompra(childId, article);
        });
    } else {
        console.error('El botón "a_comprar" no se encuentra en el DOM.');
    }
});

// Función para obtener los diamantes desde la API
async function obtenerDiamantes() {
    const token = localStorage.getItem("token");
    const childId = localStorage.getItem('selectedChildId');
    if (!token) {
        alert("No se encontró un token. Por favor, inicia sesión nuevamente.");
        return;
    }

    try {
        const response = await fetch(
            `https://backend-production-40d8.up.railway.app/v1/children/show/${childId}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();
        console.log(data);
        document.getElementById("tus_diamantes").textContent = `💎 ${data.children.diamonds}`;

        if (response.status === 404) {
            throw new Error("API endpoint not found (404). Please check the URL.");
        }

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch diamonds: ${errorText}`);
        }

        diamantes = data.diamonds; 

    } catch (error) {
        console.error("Error fetching diamonds:", error.message);
        alert("No se pudieron obtener los diamantes. Por favor, inténtalo de nuevo.");
    }
}

    async function realizarCompra(childId, article) {
        if (!article || !article.id || !article.price) {
            console.error('El artículo no tiene datos válidos:', article);
            alert('Error: No se puede realizar la compra. Datos del artículo no válidos.');
            return;
        }
    
        try {
            const response = await fetch('https://backend-production-40d8.up.railway.app/v1/exchanges/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({
                    children_id: childId,
                    article_id: article.id,
                    description: `Compra del artículo ${article.name}`,
                }),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                alert(result.success || 'Compra realizada con éxito');
                obtenerDiamantes(); // Obtiene los diamantes desde la API
                obtenerImagenesCompradas(); // Actualizar las tarjetas compradas
            } else {
                throw new Error(result.error || 'Error desconocido en el servidor.');
            }
        } catch (error) {
            console.error('Error al realizar la compra:', error);
            alert(`Error al realizar la compra: ${error.message}`);
        }
    }
    
    async function obtenerImagenesCompradas() {
        const token = localStorage.getItem("token");
        const childId = localStorage.getItem('selectedChildId');
        

        try {
            const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/imageUsers/image_users/${childId}`, {
                method: 'GET',
                headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
            });
            const imagenesCompradas = await response.json();
            console.log('Imágenes compradas:', imagenesCompradas);
    
            // Actualiza las tarjetas de los artículos comprados
            imagenesCompradas.forEach(imagen => {
                const card = document.querySelector(`.article-card[data-id="${imagen.article_id}"]`);
                if (card) {
                    card.querySelector('.overlay').style.display = 'none'; // Oculta el fondo oscuro
                    card.querySelector('.candado').style.display = 'none'; // Oculta el candado
                }
            });
        } catch (error) {
            console.error('Error al obtener las imágenes compradas:', error);
        }
    }

function actualizarGemasEnFrontend(price) {
    const diamond = document.querySelector('#gemas_disponibles');
    if (diamond) {
        const gemasActuales = parseInt(diamond.textContent) || 0;
        diamond.textContent = gemasActuales - price;
    }
}

function mostrarImagenes(avatar) {
    const container = document.querySelector('#imagenes_compradas');
    if (!avatar || avatar.length === 0) {
        container.innerHTML = '<p>No hay imágenes compradas aún.</p>';
        return;
    }
    container.innerHTML = '';
    avatar.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url_imagen;
        imgElement.alt = 'Imagen adquirida';
        container.appendChild(imgElement);
    });
}
