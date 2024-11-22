document.getElementById('loginButton').addEventListener('click', login);

async function login() {
    // Obtener los valores de los campos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar que los campos no estén vacíos
    if (!email || !password) {
        alert("Por favor, ingrese ambos campos.");
        return;
    }

    try {
        // Enviar los datos al backend
        const response = await fetch('https://backend-production-40d8.up.railway.app/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log('Respuesta del backend:', data); // Verificar qué datos llegan

        // Verificar si el login fue exitoso y el access_token está presente
        if (response.ok && data.access_token) {
            // Guardar el token en localStorage y redirigir
            localStorage.setItem('token', data.access_token); // Cambiado a access_token
            window.location.href = '/home'; // Redirige a la página principal
        } else {
            alert('Credenciales no válidas o error en el servidor.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error al intentar iniciar sesión.');
    }
}
