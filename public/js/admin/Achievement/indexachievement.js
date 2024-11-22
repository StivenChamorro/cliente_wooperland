// Cargar lista de artículos
async function loadAchievements() {
    const token = localStorage.getItem('token'); // Obtén el token almacenado

    if (!token) {
      alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
      return;
    }

    try {
      const response = await fetch('https://backend-production-40d8.up.railway.app/v1/achievement/index', {
        headers: {
          'Authorization': `Bearer ${token}`, // Usa el token en el encabezado
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch achievement: ${errorText}`);
      }

      const achievements = await response.json();
      const achievementList = document.getElementById('achievement-list');
      achievementList.innerHTML = ''; // Limpia la tabla antes de agregar nuevas filas

      achievements.forEach(achievement => {
        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${achievement.id}</td>
          <td>${achievement.name}</td>
          <td>${achievement.description}</td>
          <td>${achievement.reward}</td>
          <td>${achievement.level_id}</td> <!-- Mostrar el campo store_id -->
          <td>${achievement.status}</td>
          <td>
            <button onclick="editAchievement(${achievement.id})" class="btn btn-edit">Edit</button>
            <button onclick="deleteAchievement(${achievement.id})" class="btn btn-delete">Delete</button>
          </td>
        `;
        achievementList.appendChild(row);
      });
    } catch (error) {
      console.error('Error loading achievement:', error.message);
      alert('No se pudieron cargar los logros. Por favor, inténtalo de nuevo.');
    }
  }

  // Redirigir a la página de edición
  function editAchievement(id) {
    if (!id) {
      alert('ID de logro inválido.');
      return;
    }

    window.location.href = `/achievements/${id}/edit`;
  }

  // Eliminar un artículo
  async function deleteAchievement(id) {
    if (!id) {
      alert('ID de logro inválido.');
      return;
    }

    if (confirm('¿Estás seguro de que deseas eliminar este logro?')) {
      const token = localStorage.getItem('token');

      if (!token) {
        alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
        return;
      }

      try {
        const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/achievement/destroy/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          alert('logro eliminado correctamente');
          loadAchievements(); // Recarga la lista de artículos
        } else {
          const errorText = await response.text();
          console.error('Error deleting article:', errorText);
          alert('No se pudo eliminar el logro. Por favor, inténtalo de nuevo.');
        }
      } catch (error) {
        console.error('Error deleting achievement:', error.message);
        alert('Ocurrió un error al intentar eliminar el logro. Por favor, inténtalo de nuevo.');
      }
    }
  }

  // Llama a la función para cargar los artículos al iniciar
  loadAchievements();
