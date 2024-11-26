document.addEventListener("DOMContentLoaded", async () => {
    const storeSelect = document.getElementById("store_id");

    try {
        const response = await fetch("https://backend-production-40d8.up.railway.app/v1/stores/list");
        
        if (!response.ok) {
            throw new Error("Error al obtener las tiendas");
        }

        const stores = await response.json();

        // Limpia las opciones actuales (si es necesario)
        storeSelect.innerHTML = "";

        // Agrega las opciones dinámicamente
        stores.forEach(store => {
            const option = document.createElement("option");
            option.value = store.id;
            option.textContent = store.name;
            storeSelect.appendChild(option);
        });

    } catch (error) {
        console.error("Error cargando las tiendas:", error);
        alert("Hubo un problema al cargar las tiendas.");
    }
});


document
    .getElementById("create-article-form")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;
        const avatar = document.getElementById("avatar").files[0];
        const type = document.getElementById("type").value;
        const store_id = document.getElementById("store_id").value;
        const token = localStorage.getItem("token");

        if (!token) {
            alert("No estás autenticado. Por favor, inicia sesión.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("avatar", avatar);
        formData.append("type", type);
        formData.append("store_id", store_id);

        try {
            const response = await fetch(
                "https://backend-production-40d8.up.railway.app/v1/articles/create",
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
                alert("Artículo creado exitosamente.");
                console.log(data);
                window.location.href = `/articles`
            } else {
                const error = await response.json();
                alert("Error al crear el artículo: " + (error.message || "Desconocido"));
                console.error(error);
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            alert("Ocurrió un error al crear el artículo.");
        }
    });
