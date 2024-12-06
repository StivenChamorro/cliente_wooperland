
async function cargarDatosPrivados() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
        return;
    }

    try {
        const response = await fetch('https://backend-production-40d8.up.railway.app/v1/auth/me', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error al cargar los datos: ${errorText}`);
        }

        const usuario = await response.json();
        document.getElementById('nombre').value = usuario.nombre; // Cargar correo
        // Contraseña no se carga por seguridad
    } catch (error) {
        console.error(error.message);
        alert('No se pudieron cargar los datos. Por favor, inténtale de nuevo.');
    }
}

async function guardarDatosPrivados() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
        return;
    }

    const nombre = document.getElementById('nombre').value;
    const contraseña = document.getElementById('pass').value;

    try {
        const response = await fetch('https://backend-production-40d8.up.railway.app/v1/auth/me', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, contraseña }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error al guardar los datos: ${errorText}`);
        }

        alert('Datos guardados exitosamente');
    } catch (error) {
        console.error(error.message);
        alert('No se pudieron guardar los datos. Por favor, inténtalo de nuevo.');
    }
}

document.getElementById('guardar').onclick = guardarDatosPrivados;

document.getElementById('togglePassword').onclick = function() {
    const passwordField = document.getElementById('pass');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
};

document.addEventListener('DOMContentLoaded', cargarDatosPrivados);



