document.addEventListener('DOMContentLoaded', () => {
    const childId = localStorage.getItem('selectedChildId'); // Obtener el ID del niño desde localStorage
    const catalogoFotos = document.getElementById('catalogo_fotos'); // Contenedor de las imágenes
    const contenedorCambiarImagen = document.getElementById('cambiar_imagen'); // Modal de cambio de imagen
    const botonMirarImagenes = document.getElementById('mirar_imagenes'); // Botón "Avatares"
    const botonAceptar = document.getElementById('aceptar_cambiar_imagen'); // Botón "Aceptar"
    const botonCancelar = document.getElementById('cancelar_cambiar_imagen'); // Botón "Cancelar"

    // Función para mostrar el modal
    function mostrarModal() {
        contenedorCambiarImagen.style.display = 'block';
    }

    // Función para ocultar el modal
    function ocultarModal() {
        contenedorCambiarImagen.style.display = 'none';
    }
    
    // Función para cargar las imágenes compradas
    async function cargarImagenesCompradas() {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No se encontró el token en localStorage.");
            alert("Por favor, inicia sesión nuevamente.");
            return;
        }
    
        try {
            const response = await fetch(`https://backend-production-40d8.up.railway.app/imageUsers/image_users/${childId}`, {
                method: "GET", 
                headers: {
                    'Authorization': `Bearer ${token}`, 
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error al cargar imágenes: ${response.status} ${response.statusText}`);
            }
    
            const imagenes = await response.json(); 
    
            if (imagenes.length === 0) {
                catalogoFotos.innerHTML = '<p>No se encontraron imágenes compradas.</p>';
                return;
            }
    
            catalogoFotos.innerHTML = ''; // Limpiar el contenedor
            imagenes.forEach(imagen => {
                const imgElement = document.createElement('img');
                imgElement.src = imagen.url_imagen;
                imgElement.alt = 'Imagen comprada';
                imgElement.className = 'imagen_comprada';
                imgElement.dataset.imageId = imagen.id; // Guardar el ID de la imagen como atributo
                imgElement.addEventListener('click', seleccionarImagen); // Agregar evento de selección
                catalogoFotos.appendChild(imgElement);
            });
        } catch (error) {
            console.error('Error al cargar las imágenes compradas:', error);
            catalogoFotos.innerHTML = '<p>Error al cargar las imágenes. Inténtalo de nuevo más tarde.</p>';
        }
    }
    

    // Función para manejar la selección de una imagen
    function seleccionarImagen(event) {
        const imagenSeleccionada = document.querySelector('.imagen_comprada.seleccionada');
        if (imagenSeleccionada) {
            imagenSeleccionada.classList.remove('seleccionada'); // Desmarcar la imagen seleccionada previamente
        }
        event.target.classList.add('seleccionada'); // Marcar la nueva imagen seleccionada
    }

    // Función para confirmar la selección
    botonAceptar.addEventListener('click', () => {
        const imagenSeleccionada = document.querySelector('.imagen_comprada.seleccionada');
        if (!imagenSeleccionada) {
            alert('Por favor, selecciona una imagen antes de confirmar.');
            return;
        }

        const imagenId = imagenSeleccionada.dataset.imageId;
        console.log(`Imagen seleccionada con ID: ${imagenId}`);
        alert(`Has cambiado tu foto de perfil con la imagen ID: ${imagenId}`);
        ocultarModal();
    });

    // Función para cancelar la selección
    botonCancelar.addEventListener('click', () => {
        ocultarModal();
    });

    // Mostrar el modal al hacer clic en "Avatares"
    botonMirarImagenes.addEventListener('click', () => {
        mostrarModal();
        cargarImagenesCompradas();
    });

    // Ocultar el modal inicialmente
    ocultarModal();
});
