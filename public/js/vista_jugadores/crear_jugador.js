// Cargar lista de tiendas
async function loadChildrens() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
        return;
    }

    try {
        const response = await fetch('https://backend-production-40d8.up.railway.app/v1/children/index', {
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

        const childrens = await response.json();
        const childrenContainer = document.getElementById('agregados');
        childrenContainer.innerHTML = '';

        childrens.forEach(children => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${children.name}</h3>
                <p>${children.nickname}</p>
            `;

            // Agregar event listener para mostrar detalles del niño
            card.onclick = () => showChildDetails(children);

            childrenContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading stores:', error.message);
        alert('No se pudieron cargar los usuarios. Por favor, inténtalo de nuevo.');
    }
}

// Función para mostrar los detalles del niño en el modal
function showChildDetails(children) {
    document.getElementById('modalChildName').innerText = children.name;
    document.getElementById('modalChildLastname').innerText = children.lastname;
    document.getElementById('modalChildNickname').innerText = children.nickname;
    document.getElementById('modalChildBirthdate').innerText = children.birthdate;
    document.getElementById('modalChildRelation').innerText = children.relation;
    document.getElementById('modalChildGender').innerText = children.gender;
    document.getElementById('modalChildDiamonds').innerText = children.diamonds;
    document.getElementById('modalChildAbout').innerText = children.about;

    // Mostrar el modal
    const modal = document.getElementById('childModal');
    modal.style.display = 'block';
}

// Manejo del cierre del modal
document.getElementById('closeModal').onclick = function() {
    const modal = document.getElementById('childModal');
    modal.style.display = 'none';
}

// Para cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    const modal = document.getElementById('childModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Llamar a loadChildrens para cargar los niños una vez que se haya cargado la página
document.addEventListener('DOMContentLoaded', loadChildrens);
  loadChildrens();
  