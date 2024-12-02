document.addEventListener("DOMContentLoaded", async () => {
    const levelSelect = document.getElementById("level_id");
    const token = localStorage.getItem("token");

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
            throw new Error("Error al obtener los niveles");
        }

        const levels = await response.json();

        // Limpia las opciones actuales (si es necesario)
        levelSelect.innerHTML = "";

        // Agrega las opciones dinámicamente
        levels.forEach(level => {
            const option = document.createElement("option");
            option.value = level.id;
            option.textContent = level.name;
            levelSelect.appendChild(option);
        });

    } catch (error) {
        console.error("Error cargando los niveles:", error);
        alert("Hubo un problema al cargar los niveles.");
    }
});


document
    .getElementById("create-question-form")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const question = document.getElementById("question").value;
        const score = document.getElementById("score").value;
        const correct_answer = document.getElementById("correct_answer").value;
        const clue = document.getElementById("clue").value;
        const level_id = document.getElementById("level_id").value;
        const token = localStorage.getItem("token");

        if (!token) {
            alert("No estás autenticado. Por favor, inicia sesión.");
            return;
        }

        try {
            const response = await fetch(
                "https://backend-production-40d8.up.railway.app/v1/question/store",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({ question, score, correct_answer, clue, level_id}),
                });

            if (response.ok) {
                const data = await response.json();
                alert("Pregunta creada exitosamente.");
                console.log(data);
                window.location.href = `/questions`;
            } else {
                const error = await response.json();
                alert("Error al crear la pregunta: " + (error.message || "Desconocido"));
                console.error(error);
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            alert("Ocurrió un error al crear la pregunta.");
        }
    });
