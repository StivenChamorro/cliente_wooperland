// Cargar lista de tiendas
async function loadStores() {
  const token = localStorage.getItem('token'); // Obtén el token almacenado

  if (!token) {
    alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
    return;
  }

  try {
    const response = await fetch('https://backend-production-40d8.up.railway.app/v1/stores/list', {
      headers: {
        'Authorization': `Bearer ${token}`, // Usa el token en el encabezado
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch stores: ${errorText}`);
    }

    const stores = await response.json();
    const storeList = document.getElementById('store-list');
    storeList.innerHTML = ''; // Limpia la tabla antes de agregar nuevas filas

    stores.forEach(store => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${store.id}</td>
        <td>${store.name}</td>
        <td>${store.description}</td>
        <td>
          <button onclick="editStore(${store.id})" class="btn btn-edit">Edit</button>
          <button onclick="deleteStore(${store.id})" class="btn btn-delete">Delete</button>
        </td>
      `;
      storeList.appendChild(row);
    });
  } catch (error) {
    console.error('Error loading stores:', error.message);
    alert('No se pudieron cargar las tiendas. Por favor, inténtalo de nuevo.');
  }
}

// Redirigir a la página de edición
function editStore(id) {
  // Verifica que el ID no esté vacío o sea inválido
  if (!id) {
    alert('ID de tienda inválido.');
    return;
  }

  // Redirige a la vista de edición
  window.location.href = `/stores/${id}/edit`;
}

// Eliminar una tienda
async function deleteStore(id) {
  if (!id) {
    alert('ID de tienda inválido.');
    return;
  }

  if (confirm('¿Estás seguro de que deseas eliminar esta tienda?')) {
    const token = localStorage.getItem('token'); // Obtén el token almacenado

    if (!token) {
      alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
      return;
    }

    try {
      const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/stores/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`, // Incluye el token en el encabezado
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Tienda eliminada correctamente');
        loadStores(); // Recarga la lista de tiendas
      } else {
        const errorText = await response.text();
        console.error('Error deleting store:', errorText);
        alert('No se pudo eliminar la tienda. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error deleting store:', error.message);
      alert('Ocurrió un error al intentar eliminar la tienda. Por favor, inténtalo de nuevo.');
    }
  }
}

// Llama a la función para cargar las tiendas al iniciar
loadStores();
