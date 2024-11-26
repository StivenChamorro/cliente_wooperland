//acceder a la cuenta 

document.getElementById('childForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Evita que el formulario recargue la página

    const formData = new FormData(this);

    // Obtener el token desde localStorage
    const token = localStorage.getItem('token'); // Asegúrate de que el token esté almacenado en localStorage
    console.log(localStorage.getItem('token'));

    // Verificar si el token está presente
    if (!token) {
        alert('No se encontró el token de autenticación');
        return;
    }

    const payload = {
        name: formData.get('name'),
        lastname: formData.get('lastname'),
        birthdate: formData.get('birthdate'),
        relation: formData.get('relation'),
        gender: formData.get('gender'),
        nickname: formData.get('nickname')
    };

    try {
        const response = await fetch('https://backend-production-40d8.up.railway.app/v1/children/store', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Usar el token aquí
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const data = await response.json();
            alert('Perfil creado exitosamente');

            // Guarda el ID del niño en localStorage
            localStorage.setItem('selectedChildId', data.children.id);

            console.log('Child ID guardado:', data.children.id);
        } else {
            const error = await response.json();
            console.error('Error:', error);
            alert('Error al crear el perfil');
        }
    } catch (err) {
        console.error('Error:', err);
        alert('Error al conectar con el servidor');
    }
});



