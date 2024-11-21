// Cargar lista de artículos
async function loadArticles() {
  const token = localStorage.getItem('token'); // Obtén el token almacenado

  if (!token) {
    alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
    return;
  }

  try {
    const response = await fetch('https://backend-production-40d8.up.railway.app/v1/articles/list', {
      headers: {
        'Authorization': `Bearer ${token}`, // Usa el token en el encabezado
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch articles: ${errorText}`);
    }

    const articles = await response.json();
    const articleList = document.getElementById('article-list');
    articleList.innerHTML = ''; // Limpia la tabla antes de agregar nuevas filas

    articles.forEach(article => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${article.id}</td>
        <td>${article.name}</td>
        <td>${article.description}</td>
        <td>${article.price}</td>
        <td><img src="${article.avatar}" alt="${article.name}" style="max-width: 100px; height: auto;"></td>
        <td>${article.type}</td>
        <td>${article.store_id}</td> <!-- Mostrar el campo store_id -->
        <td>
          <button onclick="editArticle(${article.id})" class="btn btn-edit">Edit</button>
          <button onclick="deleteArticle(${article.id})" class="btn btn-delete">Delete</button>
        </td>
      `;
      articleList.appendChild(row);
    });
  } catch (error) {
    console.error('Error loading articles:', error.message);
    alert('No se pudieron cargar los artículos. Por favor, inténtalo de nuevo.');
  }
}

// Redirigir a la página de edición
function editArticle(id) {
  if (!id) {
    alert('ID de artículo inválido.');
    return;
  }

  window.location.href = `/articles/${id}/edit`;
}

// Eliminar un artículo
async function deleteArticle(id) {
  if (!id) {
    alert('ID de artículo inválido.');
    return;
  }

  if (confirm('¿Estás seguro de que deseas eliminar este artículo?')) {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
      return;
    }

    try {
      const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/articles/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Artículo eliminado correctamente');
        loadArticles(); // Recarga la lista de artículos
      } else {
        const errorText = await response.text();
        console.error('Error deleting article:', errorText);
        alert('No se pudo eliminar el artículo. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error deleting article:', error.message);
      alert('Ocurrió un error al intentar eliminar el artículo. Por favor, inténtalo de nuevo.');
    }
  }
}

// Llama a la función para cargar los artículos al iniciar
loadArticles();
