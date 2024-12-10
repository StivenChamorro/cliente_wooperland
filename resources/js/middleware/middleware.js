function checkAccess(requiredRole) {
    const token = localStorage.getItem('token'); // Recupera el token JWT del almacenamiento
    if (!token) {
        alert('No tienes acceso. Inicia sesión.');
        window.location.href = '/login'; // Redirige al login si no hay token
        return false;
    }

    // Decodificar el token para obtener el rol del usuario
    const payload = JSON.parse(atob(token.split('.')[1]));
    const userRole = payload.role; // Asegúrate de que el token tenga la información del rol

    if (userRole !== requiredRole) {
        alert('No tienes los permisos necesarios.');
        window.location.href = '/home'; // Redirige a otra página si no coincide el rol
        return false;
    }

    return true; // Permite el acceso si pasa las validaciones
}

export default checkAccess;
