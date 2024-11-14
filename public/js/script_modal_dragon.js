document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById('modal');
    let modalDesplegado = document.getElementById('modal_desplegado');
    let botonComprar = document.getElementById('a_comprar');
    let candado = modal.querySelector('.candado');
    let costoImagen = modal.querySelector('.costo_imagen');
    let tusDiamantes = document.getElementById('tus_diamantes');

    // Crear y agregar el overlay al body
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);

    // Función para mostrar el modal y overlay
    function mostrarModal() {
        modalDesplegado.style.display = 'block';
        overlay.style.display = 'block';
    }

    // Función para ocultar el modal y overlay
    function ocultarModal() {
        modalDesplegado.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Convertimos el texto inicial de diamantes a número
    let cantidadDiamantes = 1000; // Cantidad inicial de diamantes
    const costoPorCompra = 300;

    // Mostrar el modal al hacer clic en la imagen
    modal.addEventListener('click', function(e) {
        e.preventDefault(); 
        mostrarModal();
    });

    // Cerrar al hacer click en el overlay
    overlay.addEventListener('click', function() {
        ocultarModal();
    });

    // Ocultar el modal y actualizar la imagen al hacer clic en "Comprar"
    botonComprar.addEventListener('click', function(e) {
        e.preventDefault(); 

        // Verificar si hay suficientes diamantes
        if(cantidadDiamantes >= costoPorCompra) {
            // Restar diamantes
            cantidadDiamantes -= costoPorCompra;

            // Actualizar el texto de los diamantes
            tusDiamantes.textContent = cantidadDiamantes.toLocaleString() + ' 💎';

            // Ocultar elementos
            ocultarModal();
            candado.style.display = 'none';
            costoImagen.style.display = 'none';

            // Mostrar alerta de compra exitosa
            alert('¡Gracias por tu compra! Se han descontado ' + costoPorCompra + ' diamantes de tu cuenta.');
        } else {
            alert('No tienes suficientes diamantes para realizar esta compra.');
        }
    });

    // Prevenir que los clicks dentro del modal cierren el modal
    modalDesplegado.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});