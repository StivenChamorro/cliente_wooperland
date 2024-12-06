// Función para obtener los diamantes desde la API
async function obtenerDiamantes() {
    const token = localStorage.getItem("token");
    const childId = localStorage.getItem('selectedChildId');
    if (!token) {
        alert("No se encontró un token. Por favor, inicia sesión nuevamente.");
        return;
    }

    try {
        const response = await fetch(
            `https://backend-production-40d8.up.railway.app/v1/children/show/${childId}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();
        console.log(data);
        document.getElementById("tus_diamantes").textContent = `💎 ${data.children.diamonds}`;

        if (response.status === 404) {
            throw new Error("API endpoint not found (404). Please check the URL.");
        }

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch diamonds: ${errorText}`);
        }

        diamantes = data.diamonds; 

    } catch (error) {
        console.error("Error fetching diamonds:", error.message);
        alert("No se pudieron obtener los diamantes. Por favor, inténtalo de nuevo.");
    }
}

obtenerDiamantes(); // Obtiene los diamantes desde la API