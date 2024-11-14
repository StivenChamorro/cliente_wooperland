let tarjetas = JSON.parse(localStorage.getItem('tarjetas')) || [];

// Cargar tarjetas al iniciar
window.onload = mostrarTarjetas;

function mostrarTarjetas() {
    const galeria = document.getElementById('agregados');
    galeria.innerHTML = '';
    tarjetas.forEach((tarjeta, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => mostrarDetalles(index);
        card.innerHTML = `
            <img src="${tarjeta.imagen}" alt="${tarjeta.titulo}" />
            <h3>${tarjeta.campo1}</h3>
            <p>${tarjeta.campo2}</p>
        `;
        galeria.appendChild(card);
    });
}

function agregarTarjeta() {
    const campo1 = document.getElementById('campo1').value;
    const campo2 = document.getElementById('campo2').value;
    const campo3 = document.getElementById('campo3').value;
    const campo4 = document.getElementById('campo4').value;
    const campo5 = document.getElementById('campo5').value;
    const campo6 = document.getElementById('campo6').value;
    const inputImagen = document.getElementById('inputImagen');

    if (campo1 && campo2 && campo3 && campo4 && campo5 && campo6 && inputImagen.files && inputImagen.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagenUrl = e.target.result;
            tarjetas.push({
                imagen: imagenUrl,
                campo1,
                campo2,
                campo3,
                campo4,
                campo5,
                campo6
            });
            localStorage.setItem('tarjetas', JSON.stringify(tarjetas)); // Guardar en localStorage
            mostrarTarjetas();
            // Limpiar campos después de agregar la tarjeta

            document.getElementById('campo1').value = '';
            document.getElementById('campo2').value = '';
            document.getElementById('campo3').value = '';
            document.getElementById('campo4').value = '';
            document.getElementById('campo5').value = '';
            document.getElementById('campo6').value = '';

            inputImagen.value = ''; // Limpiar entrada de archivo
        };
        reader.readAsDataURL(inputImagen.files[0]); // Leer la imagen y convertir a Data URL
    } else {
        alert("Por favor, completa todos los campos.");
    }
}
function mostrarDetalles(index) {
    const tarjeta = tarjetas[index];
    let detallesHtml = `
    <div class="nino">
       <div class="img">
        <img src="${tarjeta.imagen}" alt="${tarjeta.titulo}" />
           </div>
           <div class="informtion">
        <p>Nombres : ${tarjeta.campo1}</p>
        <p>Apellidos : ${tarjeta.campo2}</p>
        <p>Edad : ${tarjeta.campo3}</p>
        <p>Relacion : ${tarjeta.campo4}</p>
        <p>Genero : ${tarjeta.campo5}</p>
        <p>Nickname : ${tarjeta.campo6}</p>
           </div>
           </div>
           <div class="grafico">
            <img src="img/vista_jugadores/grafica.png" alt="grafica">
            <p>promedio de horas 1.98 horas</p>
           </div>
        <button onclick="editarTarjeta(${index})">Editar</button>
        <button onclick="eliminarTarjeta(${index})">Eliminar</button>
        <button onclick="ocultarDetalles()">Cerrar</button>

    `;
    const detallesDiv = document.createElement('div');
    detallesDiv.className = 'details';
    detallesDiv.innerHTML = detallesHtml;
    document.body.appendChild(detallesDiv);
    detallesDiv.style.display = 'block'; // Mostrar detalles
}

function ocultarDetalles() {
    const detalles = document.querySelector('.details');
    if (detalles) {
        detalles.remove();
    }
}

function editarTarjeta(index) {
    const tarjeta = tarjetas[index];

    const nuevoCampo1 = prompt("Introduce el nuevo Campo 1", tarjeta.campo1);
    const nuevoCampo2 = prompt("Introduce el nuevo Campo 2", tarjeta.campo2);
    const nuevoCampo3 = prompt("Introduce el nuevo Campo 3", tarjeta.campo3);
    const nuevoCampo4 = prompt("Introduce el nuevo Campo 4", tarjeta.campo4);
    const nuevoCampo5 = prompt("Introduce el nuevo Campo 5", tarjeta.campo5);
    const nuevoCampo6 = prompt("Introduce el nuevo Campo 6", tarjeta.campo6);
    const inputImagen = document.createElement('input');
    inputImagen.type = 'file';
    inputImagen.accept = 'image/*';

    if (nuevoTitulo !== null) {
        inputImagen.onchange = function() {
            if (inputImagen.files && inputImagen.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {

                    tarjeta.imagen = e.target.result;
                    tarjeta.campo1 = nuevoCampo1;
                    tarjeta.campo2 = nuevoCampo2;
                    tarjeta.campo3 = nuevoCampo3;
                    tarjeta.campo4 = nuevoCampo4;
                    tarjeta.campo5 = nuevoCampo5;
                    tarjeta.campo6 = nuevoCampo6;

                    localStorage.setItem('tarjetas', JSON.stringify(tarjetas));
                    mostrarTarjetas();
                };
                reader.readAsDataURL(inputImagen.files[0]);
            } else {

                tarjeta.campo1 = nuevoCampo1;
                tarjeta.campo2 = nuevoCampo2;
                tarjeta.campo3 = nuevoCampo3;
                tarjeta.campo4 = nuevoCampo4;
                tarjeta.campo5 = nuevoCampo5;
                tarjeta.campo6 = nuevoCampo6;
                localStorage.setItem('tarjetas', JSON.stringify(tarjetas));
                mostrarTarjetas();
            }
        };
        inputImagen.click(); // Simular clic en el input para abrir el selector de archivos
    }
}
function activarModoEliminar() {
    const galeria = document.getElementById('agregados');
    galeria.innerHTML = ''; // Vaciar galería para volver a llenarla con checkboxes

    tarjetas.forEach((tarjeta, index) => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${tarjeta.imagen}" alt="${tarjeta.titulo}" />
            <h3>${tarjeta.campo1}</h3>
            <p>${tarjeta.campo2}</p>
            <input type="checkbox" class="checkbox" data-index="${index}">
            <img class="icono-basura" src="img/vista_jugadores/eliminar1.png" />
        `;

        galeria.appendChild(card);
    });

    // Añadir un botón para eliminar las tarjetas seleccionadas
    const removeSelectedBtn = document.createElement('button');
    removeSelectedBtn.className = 'btn-eliminar';
    removeSelectedBtn.textContent = 'Confirmar Eliminación';
    removeSelectedBtn.onclick = eliminarTarjetasSeleccionadas;
    galeria.appendChild(removeSelectedBtn);
}

function eliminarTarjetasSeleccionadas() {
    const checkboxes = document.querySelectorAll('.checkbox:checked');

    if (confirm("¿Estás seguro de que deseas eliminar las tarjetas seleccionadas?")) {
        checkboxes.forEach(checkbox => {
            const index = checkbox.getAttribute('data-index');
            tarjetas.splice(index, 1); // Eliminar tarjeta del array
        });

        localStorage.setItem('tarjetas', JSON.stringify(tarjetas)); // Guardar en localStorage
        mostrarTarjetas(); // Volver a mostrar las tarjetas
    }
}

function eliminarTarjeta(index) {
    if (confirm("¿Estás seguro de que deseas eliminar esta tarjeta?")) {
        tarjetas.splice(index, 1);
        localStorage.setItem('tarjetas', JSON.stringify(tarjetas));
        mostrarTarjetas();
    }
}
