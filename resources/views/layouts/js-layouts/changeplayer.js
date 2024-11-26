document.addEventListener('DOMContentLoaded', function () {
    setupChangePlayer();
    loadChildData(); // Llama la función de cargar datos al cargar la página
});

// Función para cambiar de jugador
function setupChangePlayer() {
    const changePlayerBtn = document.getElementById('changePlayerBtn');
    const nicknameInput = document.getElementById('nicknameInput');
    const token = localStorage.getItem('token');

    if (!token) {
        alert('No se encontró el token de autenticación');
        return;
    }

    changePlayerBtn.addEventListener('click', async function () {
        const nickname = nicknameInput.value.trim();

        if (!nickname) {
            alert('Por favor, ingresa un nickname');
            return;
        }

        try {
            const response = await fetch('https://backend-production-40d8.up.railway.app/v1/children/find-by-nickname', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ nickname }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('selectedChildId', data.id); // Actualiza el niño seleccionado
                document.querySelector('.head-modal-span').textContent = data.nickname; // Actualiza el nombre del niño en la interfaz
                alert(`Has cambiado al jugador: ${data.nickname}`);

                // Llama a la función para cargar y actualizar los datos del nuevo jugador
                loadChildData();
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message || 'No se pudo cambiar de jugador'}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al conectar con el servidor');
        }
    });

    // Opcional: Cierra el modal cuando se presione el botón de cerrar
    const closeModalBtn = document.getElementById('closeModalBtn');
    closeModalBtn.addEventListener('click', function () {
        const modal = document.getElementById('changePlayerModal');
        modal.style.display = 'none';
    });
}

// Función para cargar datos del niño
async function loadChildData() {
    const token = localStorage.getItem('token');
    const childId = localStorage.getItem('selectedChildId');

    if (!token) {
        alert('No se encontró el token de autenticación');
        return;
    }

    if (!childId) {
        alert('No se encontró el ID del niño seleccionado');
        return;
    }

    try {
        const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/children/show/${childId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();

            // Actualiza la interfaz con los datos del niño
            document.querySelector('.child-profile-header h1').textContent = `¡Hola! ${data.children.nickname}`;
            document.getElementById('childProfileImage').src = data.children.avatar || '/img/imagen-default.png';
            document.querySelector('.child-user-info h2').textContent = data.children.nickname;
            document.querySelector('.child-user-info p:nth-child(2)').textContent = `${data.children.name} ${data.children.lastname}`;
            document.querySelector('.child-user-info p:nth-child(3)').textContent = `${calculateAge(data.children.birthdate)} años`;
            document.querySelector('.child-user-info p:nth-child(4)').textContent = `Tu tutor es ${data.children.user.name}`;

            document.getElementById('childAboutText').textContent = data.children.about || "Escribe algo sobre ti.";
        } else {
            console.error('Error al obtener el perfil del niño');
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

// Función para calcular la edad
function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
