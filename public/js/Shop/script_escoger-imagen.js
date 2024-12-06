document.addEventListener('DOMContentLoaded', function() {
    let mirar_imagenes = document.getElementById("mirar_imagenes");
    let cambiar_imagen = document.getElementById("cambiar_imagen");
    let cancelar_cambiar_imagen = document.getElementById("cancelar_cambiar_imagen")
    let aceptar_cambiar_imagen = document.getElementById("aceptar_cambiar_imagen")
    let img_perfil_actual = document.getElementById("img_perfil_actual") // Imagen de perfil actual
    let foto_perfil = document.getElementById("foto_perfil")
    const foto_actual = document.querySelector('.foto_actual') // Elemento que muestra la foto actual en la lista
    const foto_disponible = document.querySelectorAll('.foto_disponible') // Lista de imágenes disponibles

    // Abrir el menú para cambiar la imagen
    mirar_imagenes.addEventListener('click', function() {
        cambiar_imagen.classList.toggle("open-menu");
    });

    // Cancelar el cambio de imagen
    cancelar_cambiar_imagen.addEventListener('click', function() {
        cambiar_imagen.classList.remove("open-menu");
    });

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

    
});
