document.addEventListener('DOMContentLoaded', async function () {
    const token = localStorage.getItem('token');
    const childId = localStorage.getItem('selectedChildId'); // Asegúrate de guardar el ID del niño en localStorage

    if (!token) {
        alert('No se encontró el token de autenticación');
        return;
    }

    if (!childId) {
        alert('No se encontró el ID del niño seleccionado');
        console.log(childId)
        return;
    }

    try {
        const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/children/show/${childId}`, { // Usa el ID dinámico
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            document.querySelector('.head-modal-span').textContent = data.children.nickname;
        } else {
            console.error('Error al obtener el perfil del niño');
        }
    } catch (err) {
        console.error('Error:', err);
    }
});


