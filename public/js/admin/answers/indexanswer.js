// Cargar lista de respuestas
async function loadAnswers() {
  const token = localStorage.getItem('token'); // Obtén el token almacenado

  if (!token) {
    alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
    return;
  }

  try {
    const response = await fetch('https://backend-production-40d8.up.railway.app/v1/answer/index', {
      headers: {
        'Authorization': `Bearer ${token}`, // Usa el token en el encabezado
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch answers: ${errorText}`);
    }

    const answers = await response.json();
    const answerList = document.getElementById('answer-list');
    answerList.innerHTML = ''; // Limpia la tabla antes de agregar nuevas filas

    answers.forEach(answer => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${answer.id}</td>
        <td>${answer.answer}</td>
        <td>${answer.option}</td>
        <td>${answer.question_id}</td>
        <td>
          <button onclick="editAnswer(${answer.id})" class="btn btn-edit">Edit</button>
          <button onclick="deleteAnswer(${answer.id})" class="btn btn-delete">Delete</button>
        </td>
      `;
      answerList.appendChild(row);
    });
  } catch (error) {
    console.error('Error loading answers:', error.message);
    alert('No se pudieron cargar las respuestas. Por favor, inténtalo de nuevo.');
  }
}

// Redirigir a la página de edición
function editAnswer(id) {
  if (!id) {
    alert('ID de respuesta inválido.');
    return;
  }

  window.location.href = `/answers/${id}/edit`;
}

// Eliminar una respuesta
async function deleteAnswer(id) {
  if (!id) {
    alert('ID de respuesta inválido.');
    return;
  }

  if (confirm('¿Estás seguro de que deseas eliminar esta respuesta?')) {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
      return;
    }

    try {
      const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/answer/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Respuesta eliminada correctamente');
        loadAnswers(); // Recarga la lista de respuestas
      } else {
        const errorText = await response.text();
        console.error('Error deleting answer:', errorText);
        alert('No se pudo eliminar la respuesta. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error deleting answer:', error.message);
      alert('Ocurrió un error al intentar eliminar la respuesta. Por favor, inténtalo de nuevo.');
    }
  }
}

// Llama a la función para cargar las respuestas al iniciar
loadAnswers();
