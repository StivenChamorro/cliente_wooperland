// Organización del código en un objeto para manejar la lógica
const UserProfileManager = {
    init: function() {
        this.loadUserInfo();
        this.setupPasswordToggle();
        this.setupChangeButton();
        this.setupEditButton();
    },

    loadUserInfo: function() {
        const usuarioGuardado = localStorage.getItem('usuario') || '';
        const contraseñaGuardada = localStorage.getItem('contraseña') || '';
        const nombres = localStorage.getItem('nombres') || 'John Andres';
        const apellidos = localStorage.getItem('apellidos') || 'Smith Pines';
        const fechaNacimiento = localStorage.getItem('fechaNacimiento') || '12/08/1986';
        const correo = localStorage.getItem('correo') || 'johnsmith@example.com';

        // Cargar datos en los campos correspondientes
        document.getElementById('nombre').value = usuarioGuardado;
        document.getElementById('pass').value = contraseñaGuardada;
        document.getElementById('nombres').innerText = nombres;
        document.getElementById('apellidos').innerText = apellidos;
        document.getElementById('fechaNacimiento').innerText = fechaNacimiento;
        document.getElementById('correo').innerText = correo;
    },

    setupPasswordToggle: function() {
        const pass = document.getElementById("pass");
        const icon = document.querySelector(".fa-solid");

        icon.addEventListener("click", () => {
            if (pass.type === "password") {
                pass.type = "text";
                icon.classList.add('fa-eye');
                icon.classList.remove('fa-eye-low-vision');
            } else {
                pass.type = "password";
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-low-vision');
            }
        });
    },

    setupChangeButton: function() {
        document.getElementById('cambiar').addEventListener('click', () => {
            // Mostrar botones de guardar y cancelar
            document.getElementById('guardar').style.display = 'block';
            document.getElementById('cancelar').style.display = 'block';
            document.getElementById('cambiar').style.display = 'none'; // Ocultar el botón cambiar

            // Habilitar campos para edición
            document.getElementById('nombre').removeAttribute('disabled');
            document.getElementById('pass').removeAttribute('disabled');
            document.getElementById('clave').classList.add('activo');
        });

        document.getElementById('guardar').addEventListener('click', () => {
            const usuarioNuevo = document.getElementById('nombre').value;
            const contraseñaNueva = document.getElementById('pass').value;

            // Guardar en localStorage
            localStorage.setItem('usuario', usuarioNuevo);
            localStorage.setItem('contraseña', contraseñaNueva);

            alert('Información actualizada correctamente.');

            // Ocultar botones de guardar y cancelar
            document.getElementById('guardar').style.display = 'none';
            document.getElementById('cancelar').style.display = 'none';
            document.getElementById('cambiar').style.display = 'block'; // Mostrar el botón cambiar nuevamente
            document.getElementById('clave').classList.remove('activo');

            // Deshabilitar los campos
            document.getElementById('nombre').setAttribute('disabled', true);
            document.getElementById('pass').setAttribute('disabled', true);
        });

        document.getElementById('cancelar').addEventListener('click', () => {
            // Volver a cargar los datos originales desde localStorage
            this.loadUserInfo();

            // Ocultar botones de guardar y cancelar
            document.getElementById('guardar').style.display = 'none';
            document.getElementById('cancelar').style.display = 'none';
            document.getElementById('cambiar').style.display = 'block'; // Mostrar el botón cambiar nuevamente

            // Deshabilitar los campos
            document.getElementById('nombre').setAttribute('disabled', true);
            document.getElementById('pass').setAttribute('disabled', true);
            document.getElementById('clave').classList.remove('activo');
        });
    },

    setupEditButton: function() {
        document.getElementById('editar').addEventListener('click', () => {
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

                document.getElementById('editar').innerText = 'Guardar';

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

                document.getElementById('editar').innerText = 'Editar';
            }
        });
    }
};

// Inicializar la aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    UserProfileManager.init();
});
