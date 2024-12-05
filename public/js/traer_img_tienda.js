async function loadArticles() { 
    const token = localStorage.getItem("token"); 

    if (!token) {
        alert("No se encontró un token. Por favor, inicia sesión nuevamente.");
        return;
    }

    try {
        const response = await fetch(
            "https://backend-production-40d8.up.railway.app/v1/articles/list",
            {
                headers: {
                    Authorization: `Bearer ${token}`, 
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch articles: ${errorText}`);
        }

        const articles = await response.json();
        renderArticles(articles);

    } catch (error) {
        console.error("Error loading articles:", error.message);
        alert("No se pudieron cargar los artículos. Por favor, inténtalo de nuevo.");
    }
}

function renderArticles(articles) {
    const articleList = document.getElementById("contedido_buscador");
    articleList.innerHTML = ""; 

    articles.forEach((article) => {
        const card = createArticleCard(article);
        articleList.appendChild(card);
    });
}

function createArticleCard(article) {
    const card = document.createElement("div");
    card.className = "article-card";
    card.innerHTML = `
        <div class="card-image">
            <img src="${article.avatar}" alt="${article.name}">
            <div class="overlay"></div>
            <img src="imgs/imgs_store-haiver_velasco/img_candado.png" alt="Candado" class="candado">
        </div>
        <div class="card-content">
            <h3>${article.name}</h3>
            <p>Price: ${article.price}</p>
        </div>
    `;
    card.onclick = () => mostrarModal(article);
    return card;
}

// Función para mostrar el modal con la información del artículo
function mostrarModal(article) {
    const modal = document.getElementById("modal_desplegado");      
    modal.querySelector(".titulo_anuncio_compra").innerText = article.name;
    modal.querySelector(".texto_anuncio_compra").innerText = article.description;
    modal.querySelector(".costo_anuncio_compra").innerText = `Coste: ${article.price} 💎`;
    modal.querySelector(".img_BD").style.backgroundImage = `url(${article.avatar})`;
    modal.style.display = "block";
}

// Cierra el modal cuando se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("modal_desplegado");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Llama a la función para cargar los artículos y obtener los diamantes al iniciar
window.onload = function() {
    loadArticles();
};
