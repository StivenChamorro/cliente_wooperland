
    // Cargar datos del localStorage al cargar la página
    window.onload = function() {
        const nombres = localStorage.getItem('nombres') || 'John Andres';
        const apellidos = localStorage.getItem('apellidos') || 'Smith Pines';
        const fechaNacimiento = localStorage.getItem('fechaNacimiento') || '12/08/1986';
        const correo = localStorage.getItem('correo') || 'johnsmith@example.com';

        document.getElementById('nombres').innerText = nombres;
        document.getElementById('apellidos').innerText = apellidos;
        document.getElementById('fechaNacimiento').innerText = fechaNacimiento;
        document.getElementById('correo').innerText = correo;
    };

    document.getElementById('editar').addEventListener('click', function() {
        const informacion = document.getElementById('informacion');
        const elementosEditable = document.querySelectorAll('.editable');
        const lapices = document.querySelectorAll('.lapiz');

        // Alternar la clase activa
        informacion.classList.toggle('activo');

        if (informacion.classList.contains('activo')) {
            elementosEditable.forEach((elemento, index) => {
                const contenidoActual = elemento.innerText;
                elemento.innerHTML = `<input type="text" value="${contenidoActual}" class="inputEditar" />`;
                lapices[index].style.display = 'block'; // Mostrar lápiz
            });

            this.innerText = 'Guardar';
        } else {
            const inputs = document.querySelectorAll('.inputEditar');
            inputs.forEach((input, index) => {
                const parent = input.parentElement;
                const nuevaInfo = input.value; // Obtenemos el nuevo valor
                parent.innerText = nuevaInfo; // Guardamos el nuevo valor

                // Guardamos en localStorage
                switch (parent.id) {
                    case 'nombres':
                        localStorage.setItem('nombres', nuevaInfo);
                        break;
                    case 'apellidos':
                        localStorage.setItem('apellidos', nuevaInfo);
                        break;
                    case 'fechaNacimiento':
                        localStorage.setItem('fechaNacimiento', nuevaInfo);
                        break;
                    case 'correo':
                        localStorage.setItem('correo', nuevaInfo);
                        break;
                }

                lapices[index].style.display = 'none'; // Ocultar lápiz después de guardar
            });

            this.innerText = 'Editar';
        }
    });
