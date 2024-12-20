document.addEventListener("DOMContentLoaded", () => {
    const childId = localStorage.getItem("selectedChildId"); // Obtener el ID del niño desde localStorage
    const catalogoFotos = document.getElementById("catalogo_fotos"); // Contenedor de las imágenes
    const contenedorCambiarImagen = document.getElementById("cambiar_imagen"); // Modal de cambio de imagen
    const botonMirarImagenes = document.getElementById("mirar_imagenes"); // Botón "Avatares"
    const botonAceptar = document.getElementById("aceptar_cambiar_imagen"); // Botón "Aceptar"
    const botonCancelar = document.getElementById("cancelar_cambiar_imagen"); // Botón "Cancelar"

    // Función para alternar el modal
    function toggleModal() {
        const isActive = contenedorCambiarImagen.classList.toggle("activo"); // Alternar la clase "activo"

        if (isActive) {
            cargarImagenesCompradas(); // Cargar las imágenes solo si el modal se despliega
        }
    }

    // Función para cargar las imágenes compradas
    async function cargarImagenesCompradas() {
        botonMirarImagenes.disabled = true; // Deshabilitar botón

        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No se encontró el token en localStorage.");
            alert("Por favor, inicia sesión nuevamente.");
            botonMirarImagenes.disabled = false; // Habilitar el botón si falla
            return;
        }

        try {
            const response = await fetch(
                `https://backend-production-40d8.up.railway.app/v1/imageUsers/image_users/${childId}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Error al cargar imágenes: ${response.status} ${response.statusText}`
                );
            }

            const imagenes = await response.json();
            catalogoFotos.innerHTML = ""; // Limpia el contenedor

            if (imagenes.length === 0) {
                catalogoFotos.innerHTML =
                    "<p>No se encontraron imágenes compradas.</p>";
            } else {
                imagenes.forEach((imagen) => {
                    const imgElement = document.createElement("img");
                    imgElement.src = imagen.url_imagen;
                    imgElement.alt = "Imagen comprada";
                    imgElement.className = "imagen_comprada";
                    imgElement.dataset.imageId = imagen.id;
                    imgElement.addEventListener("click", seleccionarImagen);
                    catalogoFotos.appendChild(imgElement);
                });
            }
        } catch (error) {
            console.error("Error al cargar las imágenes compradas:", error);
            catalogoFotos.innerHTML =
                "<p>Error al cargar las imágenes. Inténtalo de nuevo más tarde.</p>";
        } finally {
            botonMirarImagenes.disabled = false; // Habilitar el botón al terminar
        }
    }

    // Función para manejar la selección de una imagen
    function seleccionarImagen(event) {
        const imagenSeleccionada = document.querySelector(
            ".imagen_comprada.seleccionada"
        );
        if (imagenSeleccionada) {
            imagenSeleccionada.classList.remove("seleccionada"); // Desmarcar la imagen seleccionada previamente
        }
        event.target.classList.add("seleccionada"); // Marcar la nueva imagen seleccionada
    }

    // Actualiza las imágenes tras la confirmación de cambio
    botonAceptar.addEventListener('click', async () => {
        const imagenSeleccionada = document.querySelector('.imagen_comprada.seleccionada');
        if (!imagenSeleccionada) {
            alert('Por favor, selecciona una imagen antes de confirmar.');
            return;
        }
    
        // const imagenId = imagenSeleccionada.dataset.imageId;
    
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/children/update/${childId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ avatar: imagenId }),
            });
    
            if (!response.ok) {
                throw new Error('Error al actualizar la imagen de perfil');
            }
    
            const updatedChild = await response.json();
    
            // Depuración de la URL recibida
            console.log('URL de la nueva imagen:', updatedChild.children.avatar);
    
            const fotoPerfilModal = document.getElementById('foto_perfil');
            
            if (updatedChild.children.avatar) {
                // Actualiza con la URL del avatar desde el backend
                fotoPerfilModal.src = `${updatedChild.children.avatar}?t=${new Date().getTime()}`;
            } else {
                // Usa una imagen predeterminada si no hay avatar
                fotoPerfilModal.src = 'imgs/imgs_store-haiver_velasco/wooper_header.png';
            }
    
            alert('Imagen de perfil actualizada con éxito.');
            toggleModal();
        } catch (error) {
            console.error('Error al actualizar la imagen de perfil:', error);
            alert('No se pudo actualizar la imagen. Inténtalo nuevamente.');
        }
    });
    


    
    // Función para cancelar la selección
    botonCancelar.addEventListener("click", () => {
        toggleModal(); // Cerrar el modal
    });

    // Mostrar/Ocultar el modal al hacer clic en "Avatares"
    botonMirarImagenes.addEventListener("click", toggleModal);

    // Asegurarse de que el modal esté cerrado inicialmente
    contenedorCambiarImagen.classList.remove("activo");
});
