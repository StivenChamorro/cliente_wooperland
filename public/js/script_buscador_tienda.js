document.addEventListener('DOMContentLoaded', function() {
    // const searchInput = document.getElementById('buscador');
    // const searchToggle = document.getElementById('search-toggle');
    const contenedorImgs = document.getElementById('contedido_buscador');
    const imgStores = contenedorImgs.getElementsByClassName('IMG_STORE');

    // Función para realizar la búsqueda (la que ya tenías)
    function buscar() {
        const searchTerm = searchInput.value.toLowerCase();

        // Itera sobre cada elemento IMG_STORE
        Array.from(imgStores).forEach(function(imgStore) {
            const nombreImagen = imgStore.querySelector('.Nombre_Imagen').textContent.toLowerCase();
            const costoImagen = imgStore.querySelector('.costo_imagen').textContent.toLowerCase();
            
            // Comprueba si el término de búsqueda está en el nombre o en el costo
            if (nombreImagen.includes(searchTerm) || costoImagen.includes(searchTerm)) {
                imgStore.style.display = ''; // Muestra el elemento
            } else {
                imgStore.style.display = 'none'; // Oculta el elemento
            }
        });
    }

    // Añade el evento 'input' al campo de búsqueda
    searchInput.addEventListener('input', buscar);

    // Función para mostrar/ocultar el input de búsqueda
    /*  function toggleSearchInput() {
        searchInput.classList.toggle('show-input');
        if (searchInput.classList.contains('show-input')) {
            searchInput.focus();
        }
    }

    // Evento para el botón de búsqueda (lupa)
    searchToggle.addEventListener('click', toggleSearchInput);

    // Evento para el input de búsqueda
    searchInput.addEventListener('input', buscar);

    // Cerrar el input si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchToggle.contains(event.target)) {
            searchInput.classList.remove('show-input');
        }
    }); */
    
});