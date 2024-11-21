// Cargar lista de artículos
async function loadLevels() {
  const token = localStorage.getItem('token'); // Obtén el token almacenado

  if (!token) {
    alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
    return;
  }

  try {
    const response = await fetch('https://backend-production-40d8.up.railway.app/v1/levels/index', {
      headers: {
        'Authorization': `Bearer ${token}`, // Usa el token en el encabezado
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch articles: ${errorText}`);
    }

    const levels = await response.json();
    const levelList = document.getElementById('level-list');
    levelList.innerHTML = ''; // Limpia la tabla antes de agregar nuevas filas

    levels.forEach(level => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${level.id}</td>
        <td>${level.name}</td>
        <td>${level.score}</td>
        <td>${level.topic_id}</td> <!-- Mostrar el campo topic_id -->
        <td>
          <button onclick="editLevel(${level.id})" class="btn btn-edit">Edit</button>
          <button onclick="deleteLevel(${level.id})" class="btn btn-delete">Delete</button>
        </td>
      `;
      levelList.appendChild(row);
    });
  } catch (error) {
    console.error('Error loading levels:', error.message);
    alert('No se pudieron cargar los niveles. Por favor, inténtalo de nuevo.');
  }
}

// Redirigir a la página de edición
function editLevel(id) {
  if (!id) {
    alert('ID de nivel inválido.');
    return;
  }

  window.location.href = `/levels/${id}/edit`;
}

// Eliminar un artículo
async function deleteLevel(id) {
  if (!id) {
    alert('ID de nivel inválido.');
    return;
  }

  if (confirm('¿Estás seguro de que deseas eliminar este nivel?')) {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
      return;
    }

    try {
      const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/levels/destroy/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Nivel eliminado correctamente');
        loadLevels(); // Recarga la lista de artículos
      } else {
        const errorText = await response.text();
        console.error('Error deleting level:', errorText);
        alert('No se pudo eliminar el nivel. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error deleting level:', error.message);
      alert('Ocurrió un error al intentar eliminar el nivel. Por favor, inténtalo de nuevo.');
    }
  }
}

// Llama a la función para cargar los artículos al iniciar
loadLevels();
