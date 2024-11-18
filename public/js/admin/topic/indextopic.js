// Cargar lista de topics
async function loadTopics() {
  const token = localStorage.getItem('token'); // Obtén el token almacenado

  if (!token) {
    alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
    return;
  }

  try {
    const response = await fetch('https://backend-production-40d8.up.railway.app/v1/topic/index', {
      headers: {
        'Authorization': `Bearer ${token}`, // Usa el token en el encabezado
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch topics: ${errorText}`);
    }

    const topics = await response.json();
    const topicList = document.getElementById('topic-list');
    topicList.innerHTML = ''; // Limpia la tabla antes de agregar nuevas filas

    topics.forEach(topic => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${topic.id}</td>
        <td>${topic.name}</td>
        <td>${topic.description}</td>
        <td><img src="${topic.image}" alt="${topic.name}" style="max-width: 100px; height: auto;"></td>
        <td>
          <button onclick="editTopic(${topic.id})" class="btn btn-edit">Edit</button>
          <button onclick="deleteTopic(${topic.id})" class="btn btn-delete">Delete</button>
        </td>
      `;
      topicList.appendChild(row);
    });
  } catch (error) {
    console.error('Error loading topics:', error.message);
    alert('No se pudieron cargar los topics. Por favor, inténtalo de nuevo.');
  }
}

// Redirigir a la página de edición
function editTopic(id) {
  if (!id) {
    alert('ID de topic inválido.');
    return;
  }

  window.location.href = `/topic/${id}/edit`;
}

// Eliminar un topic
async function deleteTopic(id) {
  if (!id) {
    alert('ID de topic inválido.');
    return;
  }

  if (confirm('¿Estás seguro de que deseas eliminar este topic?')) {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
      return;
    }

    try {
      const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/topic/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Topic eliminado correctamente');
        loadTopics(); // Recarga la lista de topics
      } else {
        const errorText = await response.text();
        console.error('Error deleting topic:', errorText);
        alert('No se pudo eliminar el topic. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error deleting topic:', error.message);
      alert('Ocurrió un error al intentar eliminar el topic. Por favor, inténtalo de nuevo.');
    }
  }
}

// Llama a la función para cargar los topics al iniciar
loadTopics();
