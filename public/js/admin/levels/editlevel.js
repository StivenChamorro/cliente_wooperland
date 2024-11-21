// Cargar datos del artículo al cargar la página
window.onload = async function () {
    const token = localStorage.getItem("token");
    const id = getLevelIdFromUrl();

    if (!id) {
        alert("ID del nivel no encontrado en la URL.");
        return;
    }

    try {
        // Cargar las tiendas
        await loadTopics(token);

        // Cargar los datos del artículo
        const response = await fetch(
            `https://backend-production-40d8.up.railway.app/v1/levels/show/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            console.log(data); // Verifica la estructura de los datos
            const level = data.level;

            document.getElementById("name").value = level.name;
            document.getElementById("score").value = level.score;
            document.getElementById("topic_id").value = level.topic_id; // Seleccionar el tema

        } else {
            const errorText = await response.text();
            console.error("Error al cargar el nivel:", errorText);
            alert("No se pudieron cargar los datos del nivel.");
        }
    } catch (error) {
        console.error("Error de Fetch:", error);
        alert("Ocurrió un error al cargar los datos del nivel.");
    }
};

// Cargar la lista de tiendas desde el backend
async function loadTopics(token) {
    try {
        const response = await fetch(
            "https://backend-production-40d8.up.railway.app/v1/topic/index",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error("No se pudieron cargar los temas.");
        }

        const topics = await response.json();
        const topicSelect = document.getElementById("topic_id");

        topics.forEach((topic) => {
            const option = document.createElement("option");
            option.value = topic.id;
            option.textContent = topic.name;
            topicSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error al cargar los temas:", error);
        alert("No se pudieron cargar los temas.");
    }
}

// Manejar la sumisión del formulario de actualización
document.getElementById("edit-level-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const score = document.getElementById("score").value.trim();
    const topic_id = document.getElementById("topic_id").value; // Obtener el topic_id
    const token = localStorage.getItem("token");
    const id = getLevelIdFromUrl();

    if (!id) {
        alert("ID del nivel no encontrado en la URL.");
        return;
    }

    try {
        // Configurar la solicitud

        const response = await fetch(
            `https://backend-production-40d8.up.railway.app/v1/levels/update/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ name, score, topic_id }),
            }
        );

        if (response.ok) {
            alert("Nivel actualizado exitosamente");
            window.location.href = "/levels"; // Redirigir después de la actualización
        } else {
            const errorData = await response.json();
            console.error("Error al actualizar el nivel:", errorData);
            alert(`Error al actualizar el nivel: ${errorData.message}`);
        }
    } catch (error) {
        console.error("Error de Fetch:", error);
        alert("Ocurrió un error al actualizar el nivel.");
    }
});

// Función para obtener el ID desde la URL
function getLevelIdFromUrl() {
    const urlParts = window.location.pathname.split("/");
    return urlParts[urlParts.length - 2]; // Suponiendo formato /articles/{id}/edit
}
