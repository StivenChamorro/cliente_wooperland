// Variable global para el niño actualmente seleccionado
let currentChild = null;

// Cargar lista de niños
async function loadChildrens() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
        return;
    }

    try {
        const response = await fetch('https://backend-production-40d8.up.railway.app/v1/children/getchildrenbyuser', {
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

            // Agregar evento al hacer clic en la tarjeta para mostrar detalles
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
    currentChild = children; // Guarda la referencia del niño actual
    document.getElementById('modalChildName').innerText = children.name;
    document.getElementById('modalChildLastname').innerText = children.lastname;
    document.getElementById('modalChildNickname').innerText = children.nickname;
    document.getElementById('modalChildBirthdate').innerText = children.birthdate;
    document.getElementById('modalChildRelation').innerText = children.relation;
    document.getElementById('modalChildGender').innerText = children.gender;
    document.getElementById('modalChildDiamonds').innerText = children.diamonds;

    // Mostrar el modal de información
    const modal = document.getElementById('childModal');
    modal.style.display = 'block';
}

// Manejar evento de editar
document.getElementById('editButton').onclick = function() {
    // Rellenar el modal de edición con los datos del niño
    document.getElementById('editModalChildName').value = currentChild.name;
    document.getElementById('editModalChildLastname').value = currentChild.lastname;
    document.getElementById('editModalChildNickname').value = currentChild.nickname;
    document.getElementById('editModalChildBirthdate').value = currentChild.birthdate;
    document.getElementById('editModalChildRelation').value = currentChild.relation;
    document.getElementById('editModalChildGender').value = currentChild.gender;
    document.getElementById('editModalChildDiamonds').value = currentChild.diamonds;

    // Mostrar el modal de edición
    const editModal = document.getElementById('editChildModal');
    editModal.style.display = 'block';
};

// Función para guardar cambios
document.getElementById('saveButton').onclick = async function() {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
        return;
    }

    if (!currentChild || !currentChild.id) {
        console.error('No current child selected or ID is missing.');
        alert('No se pudo guardar, por favor intenta nuevamente.'); 
        return;
    }

    const updatedChild = {
        name: document.getElementById('editModalChildName').value,
        lastname: document.getElementById('editModalChildLastname').value,
        nickname: document.getElementById('editModalChildNickname').value,
        birthdate: document.getElementById('editModalChildBirthdate').value,
        relation: document.getElementById('editModalChildRelation').value,
        gender: document.getElementById('editModalChildGender').value,
        diamonds: document.getElementById('editModalChildDiamonds').value,
    };

    try {
        console.log('Fetching URL:', `https://backend-production-40d8.up.railway.app/v1/children/update/${currentChild.id}`);
        const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/children/update/${currentChild.id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedChild),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error updating child:', errorText);
            throw new Error(`Error updating child: ${errorText}`);
        }

        // Refresh the list of children after update
        loadChildrens();
        closeEditModal();
    } catch (error) {
        console.error('Error updating child:', error.message);
        alert('No se pudieron guardar los cambios. Por favor, inténtalo de nuevo.');
    }
};

function closeEditModal() {
    const editModal = document.getElementById('editChildModal');
    editModal.style.display = 'none'; // Oculta el modal
}


// Cerrar modales
document.getElementById('closeModal').onclick = function() {
    const modal = document.getElementById('childModal');
    modal.style.display = 'none';
};

document.getElementById('closeEditModal').onclick = function() {
    const editModal = document.getElementById('editChildModal');
    editModal.style.display = 'none';
};

// Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    const modal = document.getElementById('childModal');
    const editModal = document.getElementById('editChildModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
    if (event.target == editModal) {
        editModal.style.display = 'none';
    }
}

// Llamar a loadChildrens para cargar los niños una vez que se haya cargado la página
document.addEventListener('DOMContentLoaded', loadChildrens);
