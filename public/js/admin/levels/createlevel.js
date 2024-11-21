document.addEventListener("DOMContentLoaded", async () => {
    const topicSelect = document.getElementById("topic_id");

    try {
        const response = await fetch("https://backend-production-40d8.up.railway.app/v1/topic/index");
        
        if (!response.ok) {
            throw new Error("Error al obtener los niveles");
        }

        const topics = await response.json();

        // Limpia las opciones actuales (si es necesario)
        topicSelect.innerHTML = "";

        // Agrega las opciones dinámicamente
        topics.forEach(topic => {
            const option = document.createElement("option");
            option.value = topic.id;
            option.textContent = topic.name;
            topicSelect.appendChild(option);
        });

    } catch (error) {
        console.error("Error cargando los niveles:", error);
        alert("Hubo un problema al cargar los niveles.");
    }
});


document
    .getElementById("create-level-form")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const score = document.getElementById("score").value;
        const topic_id = document.getElementById("topic_id").value;
        const token = localStorage.getItem("token");

        if (!token) {
            alert("No estás autenticado. Por favor, inicia sesión.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("score", score);
        formData.append("topic_id", topic_id);

        try {
            const response = await fetch(
                "https://backend-production-40d8.up.railway.app/v1/levels/store",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                }
            );

            if (response.ok) {
                const data = await response.json();
                alert("Nivel creado exitosamente.");
                console.log(data);
            } else {
                const error = await response.json();
                alert("Error al crear el nivel: " + (error.message || "Desconocido"));
                console.error(error);
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            alert("Ocurrió un error al crear el nivel.");
        }
    });
