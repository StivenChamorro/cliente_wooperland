document.addEventListener("DOMContentLoaded", async () => {
    const questionSelect = document.getElementById("question_id");

    try {
        const response = await fetch("https://backend-production-40d8.up.railway.app/v1/question/index");

        if (!response.ok) {
            throw new Error("Error al obtener las preguntas");
        }

        const questions = await response.json();

        // Limpia las opciones actuales
        questionSelect.innerHTML = "";

        // Agrega las preguntas dinámicamente
        questions.forEach(question => {
            const option = document.createElement("option");
            option.value = question.id;
            option.textContent = question.question; // Asumiendo que el campo se llama "question"
            questionSelect.appendChild(option);
        });

    } catch (error) {
        console.error("Error cargando las preguntas:", error);
        alert("Hubo un problema al cargar las preguntas.");
    }
});

document
    .getElementById("create-answer-form")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        // Obtener valores del formulario
        const answer = document.getElementById("answer").value;
        const option = document.getElementById("option").value;
        const question_id = document.getElementById("question_id").value; // Asegúrate de tener un campo de selección para esta relación
        const token = localStorage.getItem("token");

        if (!token) {
            alert("No estás autenticado. Por favor, inicia sesión.");
            return;
        }

        try {
            const response = await fetch(
                "https://backend-production-40d8.up.railway.app/v1/answer/store", // Ruta para crear respuestas
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({ answer, option, question_id }),
                }
            );

            if (response.ok) {
                const data = await response.json();
                alert("Respuesta creada exitosamente.");
                console.log(data);
                // Redirigir o realizar una acción específica tras la creación
                window.location.href = `/answers`;
            } else {
                const error = await response.json();
                alert("Error al crear la respuesta: " + (error.message || "Desconocido"));
                console.error(error);
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            alert("Ocurrió un error al crear la respuesta.");
        }
    });
