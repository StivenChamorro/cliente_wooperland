// Cargar lista de tiendas
async function loadUsers() {
  const token = localStorage.getItem('token'); // Obtén el token almacenado

  if (!token) {
    alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
    return;
  }

  try {
    const response = await fetch('https://backend-production-40d8.up.railway.app/v1/user/index', {
      headers: {
        'Authorization': `Bearer ${token}`, // Usa el token en el encabezado
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch users: ${errorText}`);
    }

    const users = await response.json();
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Limpia la tabla antes de agregar nuevas filas

    users.forEach(user => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.last_name}</td>
        <td>${user.birthdate}</td>
        <td>${user.email}</td>
        <td>${user.user}</td>
        <td>${user.role}</td>
        <td>
          <button onclick="deleteUser(${user.id})" class="btn btn-delete">Delete</button>
        </td>
      `;
      userList.appendChild(row);
    });
  } catch (error) {
    console.error('Error loading stores:', error.message);
    alert('No se pudieron cargar los usuarios. Por favor, inténtalo de nuevo.');
  }
}

// Eliminar una tienda
async function deleteUser(id) {
  if (!id) {
    alert('ID de usuario inválido.');
    return;
  }

  if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
    const token = localStorage.getItem('token'); // Obtén el token almacenado

    if (!token) {
      alert('No se encontró un token. Por favor, inicia sesión nuevamente.');
      return;
    }

    try {
      const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/user/destroy/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`, // Incluye el token en el encabezado
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Usuario eliminado correctamente');
        loadUsers(); // Recarga la lista de tiendas
      } else {
        const errorText = await response.text();
        console.error('Error deleting store:', errorText);
        alert('No se pudo eliminar el usuario. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error deleting store:', error.message);
      alert('Ocurrió un error al intentar eliminar el usuario. Por favor, inténtalo de nuevo.');
    }
  }
}

// Llama a la función para cargar las tiendas al iniciar
loadUsers();
