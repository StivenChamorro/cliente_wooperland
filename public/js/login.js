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
            // Guardar el token en localStorage
            localStorage.setItem('token', data.access_token);

            const token = localStorage.getItem('token');

            // Hacer la consulta a /auth/me para obtener la información del usuario
            const userResponse = await fetch('https://backend-production-40d8.up.railway.app/v1/auth/me', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            const userData = await userResponse.json();
            console.log('Datos del usuario:', userData);

            if (userResponse.ok) {
                const userRole = userData.role; // Suponiendo que la respuesta tiene un campo 'role'

                // Redirigir según el rol del usuario
                if (userRole === 'admin') {
                    window.location.href = '/dashboard'; // Ruta específica para el administrador
                } else if (userRole === 'user') {
                    // Revisar si es la primera vez que el usuario inicia sesión
                    const isFirstLogin = localStorage.getItem('isFirstLogin');

                    if (!isFirstLogin) {
                        // Si no hay un registro previo, redirigir a la ruta de bienvenida
                        localStorage.setItem('isFirstLogin', 'false'); // Marcar que ya no es el primer login
                        window.location.href = '/terms'; // Ruta para la primera vez
                    } else {
                        // Si no es la primera vez, redirigir a la ruta estándar
                        window.location.href = '/home';
                    }
                } else {
                    alert('Rol no reconocido.');
                }
            } else {
                alert('No se pudo obtener la información del usuario.');
            }
        } else {
            alert('Credenciales no válidas o error en el servidor.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error al intentar iniciar sesión.');
    }
}
