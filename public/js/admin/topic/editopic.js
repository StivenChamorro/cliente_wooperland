// Cargar datos del topic al cargar la página
window.onload = async function() {
  const token = localStorage.getItem('token'); // Obtén el token
  const id = getTopicIdFromUrl(); // Obtén el ID dinámicamente desde la URL

  if (!id) {
      alert('ID de tema no encontrado en la URL.');
      return;
  }

  try {
      const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/topic/show/${id}`, {
          headers: {
              'Authorization': `Bearer ${token}`,
          }
      });

      if (response.ok) {
          const data = await response.json();
          const topic = data.topic; // Asumiendo que la respuesta tiene una propiedad 'topic'

          document.getElementById('name').value = topic.name;
          document.getElementById('description').value = topic.description;

          // Mostrar la imagen actual
          const currentImageContainer = document.getElementById('current-image-container');
          if (topic.image) {
              currentImageContainer.innerHTML = `<img src="${topic.image}" alt="${topic.name}" style="max-width: 200px; height: auto;">`;
          } else {
              currentImageContainer.innerHTML = '<p>No hay imagen disponible.</p>';
          }
      } else {
          const errorText = await response.text();
          console.error('Error al cargar el tema:', errorText);
          alert('No se pudieron cargar los datos del tema.');
      }
  } catch (error) {
      console.error('Error de Fetch:', error);
      alert('Ocurrió un error al cargar los datos del tema.');
  }
};

// Manejar la sumisión del formulario de actualización
document.getElementById('edit-topic-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').files[0];  // Obtener el archivo de imagen si existe
  const token = localStorage.getItem('token'); // Obtén el token
  const id = getTopicIdFromUrl(); // Obtén el ID dinámicamente desde la URL

  if (!id) {
      alert('ID de tema no encontrado en la URL.');
      return;
  }

  try {
      let formData;
      let headers = {
          'Authorization': `Bearer ${token}`,
      };

      if (image) {
          // Si se seleccionó una nueva imagen, usar FormData
          formData = new FormData();
          formData.append('name', name);
          formData.append('description', description);
          formData.append('image', image);
      } else {
          // Si no se cambió la imagen, enviar JSON
          formData = JSON.stringify({ name, description });
          headers['Content-Type'] = 'application/json';
      }

      const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/topic/update/${id}`, {
          method: 'PUT',
          headers: headers,
          body: formData,
      });

      if (response.ok) {
          alert('Tema actualizado exitosamente');
          // Opcional: redirigir o recargar la página
          window.location.href = '/topics';
      } else {
          const errorData = await response.json();
          console.error('Error al actualizar el tema:', errorData);
          alert(`Error al actualizar el tema: ${errorData.message}`);
      }
  } catch (error) {
      console.error('Error de Fetch:', error);
      alert('Ocurrió un error al actualizar el tema.');
  }
});

// Función para obtener el ID desde la URL
function getTopicIdFromUrl() {
  const urlParts = window.location.pathname.split('/');
  // Asumiendo que la URL es algo como /topics/{id}/edit
  return urlParts[urlParts.length - 2];
}
