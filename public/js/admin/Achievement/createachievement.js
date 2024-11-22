document.addEventListener("DOMContentLoaded", async () => {
    const levelSelect = document.getElementById("level_id");

    try {
        const response = await fetch("https://backend-production-40d8.up.railway.app/v1/levels/index");

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
    .getElementById("create-achievement-form")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const reward = document.getElementById("reward").value;
        const level_id = document.getElementById("level_id").value;
        const status = document.getElementById("status").value;
        const token = localStorage.getItem("token");

        if (!token) {
            alert("No estás autenticado. Por favor, inicia sesión.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("reward", reward);
        formData.append("level_id", level_id);
        formData.append("status", status);

        try {
            const response = await fetch(
                "https://backend-production-40d8.up.railway.app/v1/achievement/store",
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
                alert("logro creado exitosamente.");
                console.log(data);
            } else {
                const error = await response.json();
                alert("Error al crear el logro: " + (error.message || "Desconocido"));
                console.error(error);
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            alert("Ocurrió un error al crear el logro.");
        }
    });
