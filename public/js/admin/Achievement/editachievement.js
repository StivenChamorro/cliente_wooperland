// Cargar datos de la respuesta al cargar la página
window.onload = async function () {
    const token = localStorage.getItem("token");
    const id = getAchievementIdFromUrl();

    if (!id) {
        alert("ID de nivel no encontrado en la URL.");
        return;
    }

    try {
        // Cargar las preguntas
        await loadLevels(token);

        // Cargar los datos de la respuesta
        const response = await fetch(
            `https://backend-production-40d8.up.railway.app/v1/achievement/show/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            console.log(data); // Verifica la estructura de los datos

            // Verificar si `achievement` existe en la respuesta
            if (data.achievement) {
                const achievement = data.achievement;

                // Solo acceder a las propiedades si `achievement` es válido
                document.getElementById("name").value = achievement.name || '';
                document.getElementById("description").value = achievement.description || '';
                document.getElementById("reward").value = achievement.reward || '';
                document.getElementById("level_id").value = achievement.level_id || ''; // Seleccionar el nivel
                document.getElementById("status").value = achievement.status || '';
            } else {
                console.error("No se encontró el logro en la respuesta.");
                alert("No se encontraron los datos del logro.");
            }
        } else {
            const errorText = await response.text();
            console.error("Error al cargar el logro:", errorText);
            alert("No se pudieron cargar los datos del logro.");
        }
    } catch (error) {
        console.error("Error de Fetch:", error);
        alert("Ocurrió un error al cargar los datos del logro.");
    }
};

// Cargar la lista de preguntas desde el backend
async function loadLevels(token) {
    try {
        const response = await fetch(
            "https://backend-production-40d8.up.railway.app/v1/levels/index",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error("No se pudieron cargar los niveles.");
        }

        const levels = await response.json();
        const levelSelect = document.getElementById("level_id");

        levels.forEach((level) => {
            const option = document.createElement("option");
            option.value = level.id;
            option.textContent = level.name;
            levelSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error al cargar los niveles:", error);
        alert("No se pudieron cargar los niveles.");
    }
}

// Manejar la sumisión del formulario de actualización
document.getElementById("edit-achievement-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const description = document.getElementById("description").value.trim();
    const reward = document.getElementById("reward").value.trim();
    const level_id = document.getElementById("level_id").value;
    const status = document.getElementById("status").value; // Obtener el level_id
    const token = localStorage.getItem("token");
    const id = getAchievementIdFromUrl();

    if (!id) {
        alert("ID de la respuesta no encontrado en la URL.");
        return;
    }

    try {
        // Configurar la solicitud
        const response = await fetch(
            `https://backend-production-40d8.up.railway.app/v1/achievement/update/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ name, description, reward, level_id, status }),
            }
        );

        if (response.ok) {
            alert("Logro actualizada exitosamente");
            window.location.href = "/achievements"; // Redirigir después de la actualización
        } else {
            const errorData = await response.json();
            console.error("Error al actualizar los logros:", errorData);
            alert(`Error al actualizar el logro: ${errorData.message}`);
        }
    } catch (error) {
        console.error("Error de Fetch:", error);
        alert("Ocurrió un error al actualizar el logro.");
    }
});

// Función para obtener el ID desde la URL
function getAchievementIdFromUrl() {
    const urlParts = window.location.pathname.split("/");
    return urlParts[urlParts.length - 2]; // Suponiendo formato /achievement/{id}/edit
}
