async function register(event) {
    event.preventDefault();

    // Captura los valores del formulario
    const name = document.querySelector('[name="name"]').value;
    const last_name = document.querySelector('[name="last_name"]').value;
    const birthdate = document.querySelector('[name="birthdate"]').value; // Corrección aquí
    const email = document.querySelector('[name="email"]').value;
    const user = document.querySelector('[name="user"]').value;
    const password = document.querySelector('[name="password"]').value;
    const password_confirmation = document.querySelector('[name="password_confirmation"]').value;

    // Enviar solicitud al backend
    try {
        const response = await fetch('https://backend-production-40d8.up.railway.app/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                last_name,
                birthdate, // Asegurarse de que el nombre coincida aquí también
                email,
                user,
                password,
                password_confirmation,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Registro exitoso');
            // Redirige o realiza otra acción después del registro exitoso
            window.location.href = '/terms';
        } else {
            alert('Error en el registro: ' + JSON.stringify(data));
        }
    } catch (error) {
        console.error('Error en el registro:', error);
        alert('Ocurrió un error al registrar el usuario.');
    }
}
