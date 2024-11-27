document.querySelector('.accept').addEventListener('click', function() {
    const yearInputs = document.querySelectorAll('.pin-input');
    let enteredYear = '';
    yearInputs.forEach(input => {
        enteredYear += input.value;
    });

    fetch('https://backend-production-40d8.up.railway.app/v1/user/validate-birthyear', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Asumiendo que guardas el token JWT
        },
        body: JSON.stringify({
            year: enteredYear
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Aquí redirigir o mostrar el siguiente paso
            window.location.href = '/profile_father'; // O cualquier otra acción
        } else {
            // Mostrar mensaje de error
            document.querySelector('.description3').innerHTML = '<p>La fecha de nacimiento es incorrecta. Inténtalo de nuevo.</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
