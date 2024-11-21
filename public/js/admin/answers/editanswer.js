// Cargar datos de la respuesta al cargar la página
window.onload = async function () {
    const token = localStorage.getItem("token");
    const id = getAnswerIdFromUrl();

    if (!id) {
        alert("ID de la respuesta no encontrado en la URL.");
        return;
    }

    try {
        // Cargar las preguntas
        await loadQuestions(token);

        // Cargar los datos de la respuesta
        const response = await fetch(
            `https://backend-production-40d8.up.railway.app/v1/answer/show/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            console.log(data); // Verifica la estructura de los datos
            const answer = data.answer;

            document.getElementById("answer").value = answer.answer;
            document.getElementById("option").value = answer.option;
            document.getElementById("question_id").value = answer.question_id; // Seleccionar la pregunta
        } else {
            const errorText = await response.text();
            console.error("Error al cargar la respuesta:", errorText);
            alert("No se pudieron cargar los datos de la respuesta.");
        }
    } catch (error) {
        console.error("Error de Fetch:", error);
        alert("Ocurrió un error al cargar los datos de la respuesta.");
    }
};

// Cargar la lista de preguntas desde el backend
async function loadQuestions(token) {
    try {
        const response = await fetch(
            "https://backend-production-40d8.up.railway.app/v1/question/index",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error("No se pudieron cargar las preguntas.");
        }

        const questions = await response.json();
        const questionSelect = document.getElementById("question_id");

        questions.forEach((question) => {
            const option = document.createElement("option");
            option.value = question.id;
            option.textContent = question.question;
            questionSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error al cargar las preguntas:", error);
        alert("No se pudieron cargar las preguntas.");
    }
}

// Manejar la sumisión del formulario de actualización
document.getElementById("edit-answer-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const answer = document.getElementById("answer").value.trim();
    const option = document.getElementById("option").value.trim();
    const question_id = document.getElementById("question_id").value; // Obtener el question_id
    const token = localStorage.getItem("token");
    const id = getAnswerIdFromUrl();

    if (!id) {
        alert("ID de la respuesta no encontrado en la URL.");
        return;
    }

    try {
        // Configurar la solicitud
        const response = await fetch(
            `https://backend-production-40d8.up.railway.app/v1/answer/update/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ answer, option, question_id }),
            }
        );

        if (response.ok) {
            alert("Respuesta actualizada exitosamente");
            window.location.href = "/answers"; // Redirigir después de la actualización
        } else {
            const errorData = await response.json();
            console.error("Error al actualizar la respuesta:", errorData);
            alert(`Error al actualizar la respuesta: ${errorData.message}`);
        }
    } catch (error) {
        console.error("Error de Fetch:", error);
        alert("Ocurrió un error al actualizar la respuesta.");
    }
});

// Función para obtener el ID desde la URL
function getAnswerIdFromUrl() {
    const urlParts = window.location.pathname.split("/");
    return urlParts[urlParts.length - 2]; // Suponiendo formato /answers/{id}/edit
}
