document.getElementById('create-store-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const reward = document.getElementById('reward').value;
    const level_id = document.getElementById('level_id').value;
    const status = document.getElementById('status').value;

    const token = localStorage.getItem('token'); // Obtén el token

    const response = await fetch('https://backend-production-40d8.up.railway.app/v1/achievement/store', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, description,reward,level_id,status })
    });

    if (response.ok) {
      alert('Achievement created successfully');
    } else {
      alert('Error creating store');
    }
  });
