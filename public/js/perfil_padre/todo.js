async function loadUsers() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
        return;
    }

    try {
        const response = await fetch('https://backend-production-40d8.up.railway.app/v1/user/show/1', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Server error response:', errorText);
            throw new Error(`Error: ${errorText}`);
        }


        const users = await response.json();
        const userList = document.getElementById('perfil');
        userList.innerHTML = ''; // Limpia la tabla antes de agregar nuevas filas
    
        users.forEach(user => {
            const card = document.createElement('div');
            card.className = 'informacion';
            card.innerHTML = `
                <p>${user.user}</p>
                <p>${user.name}</p>
                <p>${children.lastname}</p>
            `;

            // Agregar evento al hacer clic en la tarjeta para mostrar detalles

            childrenContainer.appendChild(card);
        });

    } catch (error) {
        console.error(error.message);
        alert('No se pudieron cargar los datos del usuario. Por favor, inténtalo de nuevo.');
    }
}
loadUsers()