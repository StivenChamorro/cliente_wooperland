document.addEventListener('DOMContentLoaded', function() {
    // Verificar que los elementos existen antes de usarlos
    const mirar_imagenes = document.getElementById("mirar_imagenes");
    const cambiar_imagen = document.getElementById("cambiar_imagen");
    const cancelar_cambiar_imagen = document.getElementById("cancelar_cambiar_imagen");
    const aceptar_cambiar_imagen = document.getElementById("aceptar_cambiar_imagen");
    const img_perfil_actual = document.getElementById("img_perfil_actual"); // Imagen de perfil actual
    const foto_perfil = document.getElementById("foto_perfil");
    const foto_actual = document.querySelector('.foto_actual'); // Elemento que muestra la foto actual en la lista
    const foto_disponible = document.querySelectorAll('.foto_disponible'); // Lista de imágenes disponibles

    // Validar que los elementos existen antes de agregar eventos
    if (mirar_imagenes && cambiar_imagen) {
        // Abrir el menú para cambiar la imagen
        mirar_imagenes.addEventListener('click', function() {
            cambiar_imagen.classList.toggle("open-menu");
        });
    }

    if (cancelar_cambiar_imagen && cambiar_imagen) {
        // Cancelar el cambio de imagen
        cancelar_cambiar_imagen.addEventListener('click', function() {
            cambiar_imagen.classList.remove("open-menu");
        });
    }

    if (aceptar_cambiar_imagen && img_perfil_actual && foto_perfil && cambiar_imagen) {
        // Aceptar el cambio de imagen
        aceptar_cambiar_imagen.addEventListener('click', function() {
            const active = document.querySelector('.foto_disponible.active');
            if (active) {
                // Cambiar la imagen de perfil actual
                img_perfil_actual.src = active.src;
                foto_perfil.src = active.src;
            }
            cambiar_imagen.classList.remove("open-menu");
        });
    }

    if (foto_disponible.length > 0 && foto_actual) {
        // Seleccionar imagen disponible
        foto_disponible.forEach(disponible => {
            disponible.addEventListener('click', function() {
                const active = document.querySelector('.foto_disponible.active');
                if (active) {
                    active.classList.remove('active'); // Remover la clase active de la imagen actual
                }
                this.classList.add('active'); // Añadir la clase active a la nueva imagen seleccionada
                foto_actual.src = this.src; // Mostrar temporalmente la nueva imagen seleccionada
            });
        });
    }
});
