// Cargar datos de la pregunta al cargar la página
window.onload = async function () {
    const token = localStorage.getItem("token");
    const id = getQuestionIdFromUrl();

    if (!id) {
        alert("ID de la pregunta no encontrado en la URL.");
        return;
    }

    try {
        // Cargar los niveles
        await loadLevels(token);

        // Cargar los datos de la pregunta
        const response = await fetch(
            `https://backend-production-40d8.up.railway.app/v1/question/show/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            console.log(data); // Verifica la estructura de los datos
            const question = data.question;

            document.getElementById("question").value = question.question;
            document.getElementById("score").value = question.score;
            document.getElementById("correct_answer").value = question.correct_answer;
            document.getElementById("clue").value = question.clue;
            document.getElementById("level_id").value = question.level_id; // Seleccionar el nivel
        } else {
            const errorText = await response.text();
            console.error("Error al cargar la pregunta:", errorText);
            alert("No se pudieron cargar los datos de la pregunta.");
        }
    } catch (error) {
        console.error("Error de Fetch:", error);
        alert("Ocurrió un error al cargar los datos de la pregunta.");
    }
};

// Cargar la lista de niveles desde el backend
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
document.getElementById("edit-question-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const question = document.getElementById("question").value.trim();
    const score = document.getElementById("score").value.trim();
    const correct_answer = document.getElementById("correct_answer").value.trim();
    const clue = document.getElementById("clue").value.trim();
    const level_id = document.getElementById("level_id").value; // Obtener el level_id
    const token = localStorage.getItem("token");
    const id = getQuestionIdFromUrl();

    if (!id) {
        alert("ID de la pregunta no encontrado en la URL.");
        return;
    }

    try {
        // Configurar la solicitud
        const response = await fetch(
            `https://backend-production-40d8.up.railway.app/v1/question/update/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ question, score, correct_answer, clue, level_id }),
            }
        );

        if (response.ok) {
            alert("Pregunta actualizada exitosamente");
            window.location.href = "/questions"; // Redirigir después de la actualización
        } else {
            const errorData = await response.json();
            console.error("Error al actualizar la pregunta:", errorData);
            alert(`Error al actualizar la pregunta: ${errorData.message}`);
        }
    } catch (error) {
        console.error("Error de Fetch:", error);
        alert("Ocurrió un error al actualizar la pregunta.");
    }
});

// Función para obtener el ID desde la URL
function getQuestionIdFromUrl() {
    const urlParts = window.location.pathname.split("/");
    return urlParts[urlParts.length - 2]; // Suponiendo formato /questions/{id}/edit
}
