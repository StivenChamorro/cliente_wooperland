document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-child-form');
    const fileInput = document.getElementById('add-child-avatar');
    const profileImage = document.getElementById('add-child-profile-image');

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(this);

        const token = localStorage.getItem('token');
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
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                alert('Perfil creado exitosamente');
                localStorage.setItem('selectedChildId', data.children.id);
                console.log('Child ID guardado:', data.children.id);
                window.location.href = '/home';
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
});