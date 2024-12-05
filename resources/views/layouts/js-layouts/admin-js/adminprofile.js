document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    let userId = null;

    // Obtener los datos del usuario desde el backend
    async function getUserData() {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('No se encontró el token de autenticación');
            window.location.href = '/';  // Redirigir al login si no hay token
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
                alert('No se pudo obtener los datos del usuario');
                window.location.href = '/login'; // Redirigir al login si no está autorizado
                return;
            }

            const userData = await response.json();

            userId = userData.id;

            // Rellenar los campos del formulario con los datos obtenidos
            document.getElementById('name').value = userData.name || '';
            document.getElementById('last_name').value = userData.last_name || '';
            document.getElementById('birthdate').value = userData.birthdate || '';
            document.getElementById('user').value = userData.user || '';
            document.getElementById('password').value = '';  // No se debe mostrar la contraseña en el campo de texto

        } catch (error) {
            console.error('Error obteniendo los datos del usuario:', error);
            alert('Ocurrió un error al obtener los datos del usuario.');
        }
    }

    // Llamar a la función para obtener los datos del usuario cuando se cargue el documento
    getUserData();

    // Manejar el evento de envío del formulario para actualizar los datos
    profileForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            alert('No se encontró el token de autenticación');
            window.location.href = '/';  // Redirigir al login si no hay token
            return;
        }

        // Obtener los datos del formulario
        const formData = new FormData(profileForm);
        const updatedUserData = {};

        formData.forEach((value, key) => {
            updatedUserData[key] = value;
        });

        console.log(updatedUserData); // Verificar los datos que se enviarán

        try {
            const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/user/update/${userId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUserData)
            });

            if (!response.ok) {
                alert('Error al actualizar el perfil. Intente nuevamente.');
                return;
            }

            const updatedUser = await response.json();
            alert('Perfil actualizado exitosamente!');
            console.log(updatedUser); // Verifica los datos del usuario actualizados

        } catch (error) {
            console.error('Error actualizando los datos del usuario:', error);
            alert('Ocurrió un error al intentar actualizar los datos.');
        }
    });

});
