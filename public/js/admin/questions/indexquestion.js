// Cargar lista de artículos
async function loadQuestions() {
  const token = localStorage.getItem('token'); // Obtén el token almacenado

  if (!token) {
    alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
    return;
  }

  try {
    const response = await fetch('https://backend-production-40d8.up.railway.app/v1/question/index', {
      headers: {
        'Authorization': `Bearer ${token}`, // Usa el token en el encabezado
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch questions: ${errorText}`);
    }

    const questions = await response.json();
    const questionList = document.getElementById('question-list');
    questionList.innerHTML = ''; // Limpia la tabla antes de agregar nuevas filas

    questions.forEach(questions => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${questions.id}</td>
        <td>${questions.question}</td>
        <td>${questions.score}</td>
        <td>${questions.correct_answer}</td>
        <td>${questions.clue}</td>
        <td>${questions.level_id}</td>
        <td>
          <button onclick="editQuestion(${questions.id})" class="btn btn-edit">Edit</button>
          <button onclick="deleteQuestion(${questions.id})" class="btn btn-delete">Delete</button>
        </td>
      `;
      questionList.appendChild(row);
    });
  } catch (error) {
    console.error('Error loading questions:', error.message);
    alert('No se pudieron cargar las preguntas. Por favor, inténtalo de nuevo.');
  }
}

// Redirigir a la página de edición
function editQuestion(id) {
  if (!id) {
    alert('ID de pregunta inválido.');
    return;
  }

  window.location.href = `/questions/${id}/edit`;
}

// Eliminar un artículo
async function deleteQuestion(id) {
  if (!id) {
    alert('ID de pregunta inválido.');
    return;
  }

  if (confirm('¿Estás seguro de que deseas eliminar esta pregunta?')) {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
      return;
    }

    try {
      const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/question/destroy/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Pregunta eliminada correctamente');
        loadQuestions(); // Recarga la lista de artículos
      } else {
        const errorText = await response.text();
        console.error('Error deleting qustion:', errorText);
        alert('No se pudo eliminar la pregunta. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error deleting level:', error.message);
      alert('Ocurrió un error al intentar eliminar la pregunta. Por favor, inténtalo de nuevo.');
    }
  }
}

// Llama a la función para cargar los artículos al iniciar
loadQuestions();
