let tarjetas = JSON.parse(localStorage.getItem('tarjetas')) || [];


// Cargar tarjetas al iniciar

window.onload = mostrarTarjetas;


function mostrarTarjetas() {
    const galeria = document.getElementById('agregados');
    galeria.innerHTML = '';
    tarjetas.forEach((tarjeta, index) => {
        galeria.innerHTML += `
            <div class="card">
                <img src="${tarjeta.imagen}" alt="${tarjeta.titulo}" />
                <h3>${tarjeta.titulo}</h3>
                <p>${tarjeta.contexto}</p>
                <button class="editar" onclick="editarTarjeta(${index})">Editar</button>
                <button class="eliminar" onclick="eliminarTarjeta(${index})">
                <img class="basura" src="../../img/vista_jugadores/eliminar1.png">
                </button>
            </div>
        `;
    });
}

function agregarTarjeta() {
    const titulo = document.getElementById('titulo').value;
    const contexto = document.getElementById('contexto').value;
    const inputImagen = document.getElementById('inputImagen');



    if (titulo && inputImagen.files && inputImagen.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagenUrl = e.target.result;
            tarjetas.push({ titulo,contexto, imagen: imagenUrl });
            localStorage.setItem('tarjetas', JSON.stringify(tarjetas)); // Guardar en localStorage
            mostrarTarjetas();
            document.getElementById('titulo').value = '';
            inputImagen.value = ''; // Limpiar entrada de archivo
            document.getElementById('contexto').value = '';
        };
        reader.readAsDataURL(inputImagen.files[0]); // Leer la imagen y convertir a Data URL
    } else {
        alert("Por favor, completa ambos campos.");
    }
}

function editarTarjeta(index) {
    const tarjeta = tarjetas[index];
    const nuevoTitulo = prompt("Introduce el nuevo título", tarjeta.titulo);
    const nuevoContexto = prompt("Introduce el nuevo contexto", tarjeta.contexto);
    const inputImagen = document.createElement('input');
    inputImagen.type = 'file';
    inputImagen.accept = 'image/*';

    if (nuevoTitulo !== null) { // Solo actúo si el título no es cancelado
        inputImagen.onchange = function() {
            if (inputImagen.files && inputImagen.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    tarjeta.titulo = nuevoTitulo; // Actualizar el título
                    tarjeta.imagen = e.target.result; // Actualizar la imagen
                    tarjeta.contexto = nuevoContexto; // Actualizar el título
                    localStorage.setItem('tarjetas', JSON.stringify(tarjetas)); // Guardar cambios en localStorage
                    mostrarTarjetas(); // Mostrar las tarjetas actualizadas
                };
                reader.readAsDataURL(inputImagen.files[0]); // Leer la nueva imagen
            } else {
                tarjeta.titulo = nuevoTitulo; // Actualizar solo el título si no hay imagen
                localStorage.setItem('tarjetas', JSON.stringify(tarjetas)); // Guardar cambios en localStorage
                mostrarTarjetas(); // Mostrar las tarjetas actualizadas
            }
        };
        inputImagen.click(); // Simular un clic en el input para abrir el selector de archivos
    }
}

function eliminarTarjeta(index) {
    if (confirm("¿Estás seguro de que deseas eliminar esta tarjeta?")) {
        tarjetas.splice(index, 1);
        localStorage.setItem('tarjetas', JSON.stringify(tarjetas)); // Actualizar localStorage
        mostrarTarjetas();
    }
}
