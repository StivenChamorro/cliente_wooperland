let userid = null; // Variable global para almacenar el ID del usuario

async function loadUser() {
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
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error al cargar los datos del usuario:', errorText);
            throw new Error(`Error: ${errorText}`);
        }

        const user = await response.json();
        userid = user.id; // Asignar el ID del usuario
        // Cargar datos en la UI
        document.getElementById('nombreUsuario').innerText = user.user; // Nombre completo
        document.getElementById('nombres').innerText = user.name; // Nombres
        document.getElementById('apellidos').innerText = user.last_name; // Apellidos
        document.getElementById('fechaNacimiento').innerText = user.birthdate; // Fecha de nacimiento
        document.getElementById('correo').innerText = user.email; // Correo electrónico

    } catch (error) {
        console.error('No se pudieron cargar los datos del usuario:', error.message);
    }
}

// Función para abrir el modal de edición
function openEditProfileModal() {
    document.getElementById('ediUsuario').value = document.getElementById('nombreUsuario').innerText; // Cargar nombre de usuario
    document.getElementById('editNombre').value = document.getElementById('nombres').innerText; // Cargar nombres
    document.getElementById('editApellidos').value = document.getElementById('apellidos').innerText; // Cargar apellidos
    document.getElementById('editFechaNacimiento').value = document.getElementById('fechaNacimiento').innerText; // Cargar fecha de nacimiento
    document.getElementById('editCorreo').value = document.getElementById('correo').innerText; // Cargar correo

    document.getElementById('editProfileModal').style.display = 'block'; // Mostrar el modal
}

// Función para guardar cambios
document.getElementById('saveChanges').onclick = async function() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
        return;
    }

    const updatedUser = {
        user: document.getElementById('ediUsuario').value,
        name: document.getElementById('editNombre').value,
        last_name: document.getElementById('editApellidos').value,
        birthdate: document.getElementById('editFechaNacimiento').value,
        email: document.getElementById('editCorreo').value,
    };

    try {
        const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/user/update/${userid}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error al guardar los cambios:', errorText);
            throw new Error(`Error: ${errorText}`);
        }

        alert('Datos guardados exitosamente');
        loadUser(); // Recargar los datos de usuario
        closeEditProfileModal(); // Cerrar el modal

    } catch (error) {
        console.error('No se pudieron guardar los cambios:', error.message);
        alert('No se pudieron guardar los cambios, por favor inténtalo de nuevo.');
    }
};

// Función para cerrar el modal de edición
function closeEditProfileModal() {
    document.getElementById('editProfileModal').style.display = 'none'; // Ocultar el modal
}

// Evento para abrir el modal al hacer clic en el botón "Editar"
document.getElementById('cambiar').onclick = openEditProfileModal;

// Cierra el modal cuando se hace clic fuera del contenido del modal
window.onclick = function(event) {
    const modal = document.getElementById('editProfileModal');
    if (event.target === modal) {
        closeEditProfileModal();
    }
};

// Cargar información del usuario al cargar la página
document.addEventListener('DOMContentLoaded', loadUser);
