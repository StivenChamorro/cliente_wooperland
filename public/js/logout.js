document.getElementById('logout-session').addEventListener('click', logout);

async function logout() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('No se encontró el token de autenticación');
        window.location.href = '/';
    }

    try {
        const response = await fetch('https://backend-production-40d8.up.railway.app/v1/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Se envía el token en el encabezado
            }
        });

        const data = await response.json();
        console.log(data);

        // Verificar si el logout fue exitoso
        if (response.ok) {
            // Eliminar el token de localStorage
            localStorage.removeItem('token');
            alert('Se ha cerrado la sesión');
            window.location.href = '/'; // Redirigir a la página de bienvenida
        } else {
            alert(data.message || 'No se ha podido cerrar sesión. Intente nuevamente.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error al intentar cerrar la sesión. Por favor, intente nuevamente.');
    }
}
