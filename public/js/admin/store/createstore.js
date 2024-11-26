document.getElementById('create-store-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const token = localStorage.getItem('token'); // Obtén el token

    const response = await fetch('https://backend-production-40d8.up.railway.app/v1/stores/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, description })
    });
    
    if (response.ok) {
      alert('Store created successfully');
      window.location.href = `/stores`
    } else {
      alert('Error creating store');
    }
  });