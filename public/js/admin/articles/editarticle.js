// Cargar datos del artículo al cargar la página
window.onload = async function () {
    const token = localStorage.getItem("token");
    const id = getArticleIdFromUrl();

    if (!id) {
        alert("ID del artículo no encontrado en la URL.");
        return;
    }

    try {
        // Cargar las tiendas
        await loadStores(token);

        // Cargar los datos del artículo
        const response = await fetch(
            `https://backend-production-40d8.up.railway.app/v1/articles/show/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            const article = data.article;

            document.getElementById("name").value = article.name;
            document.getElementById("description").value = article.description;
            document.getElementById("price").value = article.price;
            document.getElementById("type").value = article.type;
            document.getElementById("store_id").value = article.store_id; // Seleccionar la tienda

            // Mostrar la imagen actual
            const currentImageContainer = document.getElementById("current-image-container");
            if (article.image) {
                currentImageContainer.innerHTML = `
                    <img src="${article.image}" alt="${article.name}" style="max-width: 200px; height: auto;">
                `;
            } else {
                currentImageContainer.innerHTML = "<p>No hay imagen disponible.</p>";
            }
        } else {
            const errorText = await response.text();
            console.error("Error al cargar el artículo:", errorText);
            alert("No se pudieron cargar los datos del artículo.");
        }
    } catch (error) {
        console.error("Error de Fetch:", error);
        alert("Ocurrió un error al cargar los datos del artículo.");
    }
};

// Cargar la lista de tiendas desde el backend
async function loadStores(token) {
    try {
        const response = await fetch(
            "https://backend-production-40d8.up.railway.app/v1/stores/list",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error("No se pudieron cargar las tiendas.");
        }

        const stores = await response.json();
        const storeSelect = document.getElementById("store_id");

        stores.forEach((store) => {
            const option = document.createElement("option");
            option.value = store.id;
            option.textContent = store.name;
            storeSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error al cargar las tiendas:", error);
        alert("No se pudieron cargar las tiendas.");
    }
}

// Manejar la sumisión del formulario de actualización
document.getElementById("edit-article-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const description = document.getElementById("description").value.trim();
    const price = document.getElementById("price").value.trim();
    const type = document.getElementById("type").value.trim();
    const store_id = document.getElementById("store_id").value; // Obtener el store_id
    const image = document.getElementById("image").files[0];
    const token = localStorage.getItem("token");
    const id = getArticleIdFromUrl();

    if (!id) {
        alert("ID del artículo no encontrado en la URL.");
        return;
    }

    try {
        // Configurar la solicitud
        let formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("type", type);
        formData.append("store_id", store_id); // Añadir el store_id
        if (image) {
            formData.append("image", image);
        }

        const response = await fetch(
            `https://backend-production-40d8.up.railway.app/v1/articles/update/${id}`,
            {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            }
        );

        if (response.ok) {
            alert("Artículo actualizado exitosamente");
            window.location.href = "/articles"; // Redirigir después de la actualización
        } else {
            const errorData = await response.json();
            console.error("Error al actualizar el artículo:", errorData);
            alert(`Error al actualizar el artículo: ${errorData.message}`);
        }
    } catch (error) {
        console.error("Error de Fetch:", error);
        alert("Ocurrió un error al actualizar el artículo.");
    }
});

// Función para obtener el ID desde la URL
function getArticleIdFromUrl() {
    const urlParts = window.location.pathname.split("/");
    return urlParts[urlParts.length - 2]; // Suponiendo formato /articles/{id}/edit
}
