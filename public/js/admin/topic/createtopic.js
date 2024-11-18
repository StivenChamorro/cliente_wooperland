document.getElementById('create-topic-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').files[0];  // Obtener el archivo de imagen
  const token = localStorage.getItem('token'); // Obtén el token

  // Crear un objeto FormData para enviar la imagen y otros datos
  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);
  formData.append('image', image);  // Agregar la imagen
  formData.append('token', token);  // (Opcional) Si necesitas enviar el token también

  // Realizar la solicitud fetch
  const response = await fetch('https://backend-production-40d8.up.railway.app/v1/topic/store', {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${token}`
      },
      body: formData,  // Enviar los datos como FormData
  });

  if (response.ok) {
      alert('Topic created successfully');
  } else {
      alert('Error creating topic');
  }
});
