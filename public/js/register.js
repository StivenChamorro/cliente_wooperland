async function register(event) {
    event.preventDefault();

    const name = document.querySelector('[name="name"]').value;
    const last_name = document.querySelector('[name="last_name"]').value;
    const birthdate = document.querySelector('[name="birthdate"]').value;
    const email = document.querySelector('[name="email"]').value;
    const user = document.querySelector('[name="user"]').value;
    const password = document.querySelector('[name="password"]').value;
    const password_confirmation = document.querySelector('[name="password_confirmation"]').value;

    try {
        const response = await fetch('https://backend-production-40d8.up.railway.app/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                last_name,
                birthdate,
                email,
                user,
                password,
                password_confirmation,
            }),
        });

        const data = await response.json();
        console.log('Respuesta del backend:', data);

        if (response.ok) {
            // Verificar si la respuesta contiene un token
            const token = data.accessToken;
            if (token) {
                localStorage.setItem('token', token);
                console.log('Token guardado:', localStorage.getItem('token')); // Verificar si el token está en localStorage

                // Redirigir después del registro exitoso
                window.location.href = '/terms';
            } else {
                console.error('No se encontró un token en la respuesta:', data);
                alert('Registro exitoso, pero no se obtuvo un token.');
            }
        } else {
            alert('Error en el registro: ' + JSON.stringify(data.errors || data));
        }
    } catch (error) {
        console.error('Error en el registro:', error);
        alert('Ocurrió un error al registrar el usuario.');
    }
}
