// Load store data on page load
window.onload = async function() {
    const token = localStorage.getItem('token'); // Obtén el token
    const id = getStoreIdFromUrl(); // Obtén el ID dinámicamente desde la URL
  
    try {
      const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/stores/show/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (response.ok) {
        const store = await response.json();
        document.getElementById('name').value = store.name;
        document.getElementById('description').value = store.description;
      } else {
        const errorText = await response.text();
        console.error('Error loading store:', errorText);
        alert('Failed to load store data');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  
  // Handle update form submission
  document.getElementById('edit-store-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const token = localStorage.getItem('token'); // Obtén el token
    const id = getStoreIdFromUrl(); // Obtén el ID dinámicamente desde la URL
  
    try {
      const response = await fetch(`https://backend-production-40d8.up.railway.app/v1/stores/update/${id}`, {
        method: 'PUT', // Cambiado a PUT
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, description })
      });
  
      if (response.ok) {
        alert('Store updated successfully');
      } else {
        const errorText = await response.text();
        console.error('Error updating store:', errorText);
        alert('Error updating store');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  });
  
  // Función para obtener el ID desde la URL
  function getStoreIdFromUrl() {
    const urlParts = window.location.pathname.split('/');
    return urlParts[urlParts.length - 2]; // En este caso, el penúltimo segmento es el ID
  }
  