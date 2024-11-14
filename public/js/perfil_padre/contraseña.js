
    window.onload = function() {
        const usuarioGuardado = localStorage.getItem('usuario');
        const contraseñaGuardada = localStorage.getItem('contraseña');

        if (usuarioGuardado) {
            document.getElementById('nombre').value = usuarioGuardado;
        }
        if (contraseñaGuardada) {
            document.getElementById('pass').value = contraseñaGuardada;
        }
    };

    const pass = document.getElementById("pass"),
    icon = document.querySelector(".fa-solid")
    
    icon.addEventListener("click", e => {
        if(pass.type === "password"){
            pass.type = "text";
            icon.classList.add('fa-eye')
            icon.classList.remove('fa-eye-low-vision')
        }
        else{
            pass.type = "password";
            icon.classList.remove('fa-eye')
            icon.classList.add('fa-eye-low-vision')
        }
    
    });

    document.getElementById('cambiar').addEventListener('click', function() {
        // Mostrar botones de guardar y cancelar
        document.getElementById('guardar').style.display = 'block';
        document.getElementById('cancelar').style.display = 'block';
        this.style.display = 'none';  // Ocultar el botón cambiar

        // Habilitar campos para edición
        document.getElementById('nombre').removeAttribute('disabled');
        document.getElementById('pass').removeAttribute('disabled');

        document.getElementById('clave').classList.add('activo');
    });

    document.getElementById('guardar').addEventListener('click', function() {
        const usuarioNuevo = document.getElementById('nombre').value;
        const contraseñaNueva = document.getElementById('pass').value;

        // Guardar en localStorage
        localStorage.setItem('usuario', usuarioNuevo);
        localStorage.setItem('contraseña', contraseñaNueva);

        alert('Información actualizada correctamente.');

        // Ocultar botones de guardar y cancelar
        this.style.display = 'none';
        document.getElementById('cancelar').style.display = 'none';
        document.getElementById('cambiar').style.display = 'block'; // Mostrar el botón cambiar nuevamente
        document.getElementById('clave').classList.remove('activo');
    });

    document.getElementById('cancelar').addEventListener('click', function() {
        // Volver a cargar los datos originales desde localStorage
        document.getElementById('nombre').value = localStorage.getItem('usuario') || '';
        document.getElementById('pass').value = localStorage.getItem('contraseña') || '';

        // Ocultar botones de guardar y cancelar
        document.getElementById('guardar').style.display = 'none';
        this.style.display = 'none';
        document.getElementById('cambiar').style.display = 'block'; // Mostrar el botón cambiar nuevamente

        // Deshabilitar los campos
        document.getElementById('nombre').setAttribute('disabled', true);
        document.getElementById('pass').setAttribute('disabled', true);
        document.getElementById('clave').classList.remove('activo');
    });




    