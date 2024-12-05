document.addEventListener("DOMContentLoaded", () => {

     // Función para obtener los datos del usuario
    async function getUserData() {
        const token = localStorage.getItem('token');

        if (!token) {
            alert('No se encontró el token de autenticación');
            window.location.href = '/login';
            return;
        }

        try {
            const response = await fetch('https://backend-production-40d8.up.railway.app/v1/auth/me', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            const data = await response.json();
            console.log(data)

            // Si la respuesta es exitosa, actualizar el nombre del usuario
            if (response.ok) {
                const adminName = document.querySelector('.admin-name');
                if (adminName) {
                    adminName.textContent = data.name || 'John Doe'; // Reemplaza con el nombre del usuario
                }
            } else {
                alert('No se pudo obtener los datos del usuario');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al intentar obtener los datos del usuario.');
        }
    }

    // Llamar a la función getUserData al cargar la página
    getUserData();

    
    // Definimos la función toggleModal dentro del evento DOMContentLoaded
    function toggleModal() {
        const modal = document.getElementById('adminModal');
        modal.classList.toggle('show');
    }

    // La función para abrir el perfil (o realizar alguna acción)
    function openProfile() {
        window.location.href = '/admin/profile'
    }

    // La función para hacer logout
    async function logout() {
        const token = localStorage.getItem('token');

        if (!token) {
            alert('No se encontró el token de autenticación');
            window.location.href = '/';
        }
    
        try {
            const response = await fetch('https://backend-production-40d8.up.railway.app/v1/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Se envía el token en el encabezado
                }
            });
    
            const data = await response.json();
            console.log(data);
    
            // Verificar si el logout fue exitoso
            if (response.ok) {
                // Eliminar el token de localStorage
                localStorage.removeItem('token');
                alert('Se ha cerrado la sesión');
                window.location.href = '/'; // Redirigir a la página de bienvenida
            } else {
                alert(data.message || 'No se ha podido cerrar sesión. Intente nuevamente.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al intentar cerrar la sesión. Por favor, intente nuevamente.');
        }
        toggleModal();  // Cerrar el modal
    }

    // Cierra el modal al hacer clic fuera de él
    window.onclick = function(event) {
        const modal = document.getElementById('adminModal');
        if (!event.target.closest('.modal') && !event.target.closest('.admin-info')) {
            modal.classList.remove('show');
        }
    }

    // Agregar el evento de clic en el avatar del admin para abrir el modal
    const adminInfo = document.querySelector('.admin-info');
    adminInfo.addEventListener('click', toggleModal);

    // Obtener las opciones dentro del modal
    const profileOption = document.querySelector('.modal-option:nth-child(1)');
    const logoutOption = document.querySelector('.modal-option:nth-child(2)');

    // Agregar los manejadores de eventos para las opciones
    if (profileOption) {
        profileOption.addEventListener('click', openProfile);  // Llamar a openProfile cuando se haga clic en "Profile"
    }

    if (logoutOption) {
        logoutOption.addEventListener('click', logout);  // Llamar a logout cuando se haga clic en "Logout"
    }

    // Código para cambiar el estado de los elementos de navegación
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            navItems.forEach((i) => i.classList.remove("active"));
            item.classList.add("active");
        });
    });
});
