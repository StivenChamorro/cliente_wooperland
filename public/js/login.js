document.getElementById('loginButton').addEventListener('click', login);

async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Por favor, ingrese ambos campos.");
        return;
    }

    try {
        // Enviar solicitud de inicio de sesión
        const response = await fetch('https://backend-production-40d8.up.railway.app/v1/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log('Respuesta del backend:', data);

        if (response.ok && data.access_token) {
            // Guardar el token en localStorage
            localStorage.setItem('token', data.access_token);

            const token = localStorage.getItem('token');

            // Obtener datos del usuario
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
                const userRole = userData.role;

                // Obtener el primer niño
                const firstChildResponse = await fetch('https://backend-production-40d8.up.railway.app/v1/user/first-child', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });

                const firstChildData = await firstChildResponse.json();
                console.log('Primer niño:', firstChildData);

                if (firstChildResponse.ok && firstChildData.child && firstChildData.child.id) {
                    // Guardar el ID del niño en localStorage
                    localStorage.setItem('selectedChildId', firstChildData.child.id);
                    console.log('ID del niño guardado en localStorage:', firstChildData.child.id);
                } else {
                    console.error('Error al obtener el primer niño.');
                    alert('No se pudo obtener el primer perfil de niño.');
                    return;
                }

                if (userRole === 'admin') {
                    // Si el rol es admin, redirigir a /dashboard
                    console.log('Redirigiendo a /dashboard...');
                    window.location.href = '/dashboard';
                } else {
                    // Si no es admin, verificar si es el primer inicio de sesión
                    const isFirstLogin = localStorage.getItem('isFirstLogin');
                    console.log('isFirstLogin antes:', isFirstLogin);

                    if (isFirstLogin === null || isFirstLogin === 'true') {
                        // Primer inicio de sesión
                        localStorage.setItem('isFirstLogin', 'false'); // Marcar como no primer inicio
                        console.log('Redirigiendo a /terms...');
                        window.location.href = '/terms';
                    } else {
                        // No es el primer inicio de sesión
                        console.log('Redirigiendo a /home...');
                        window.location.href = '/home';
                    }
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
