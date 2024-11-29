// Almacena el contenido HTML original de .description3
const originalDescriptionContent = document.querySelector('.description3').innerHTML;

// Configura el comportamiento de los inputs del PIN
function setupPinInputs() {
    const pinInputs = document.querySelectorAll('.pin-input');
    
    pinInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && index < pinInputs.length - 1) {
                pinInputs[index + 1].focus(); // Pasa al siguiente input
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && index > 0) {
                pinInputs[index - 1].focus(); // Regresa al input anterior
            }
        });
    });
}

// Evento al hacer clic en el botón "Ingresar"
document.querySelector('.accept').addEventListener('click', function () {
    const yearInputs = document.querySelectorAll('.pin-input');
    let enteredYear = '';
    yearInputs.forEach(input => {
        enteredYear += input.value;
    });

    fetch('https://backend-production-40d8.up.railway.app/v1/user/validate-birthyear', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            year: enteredYear
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Limpia los campos del PIN
            clearPinInputs();

            // Redirige a la vista correspondiente
            window.location.href = '/perfil_padre';
        } else {
            // Muestra el mensaje de error con un botón de cerrar
            const description = document.querySelector('.description3');
            description.innerHTML = `
                <p>La fecha de nacimiento es incorrecta. Inténtalo de nuevo.</p>
                <button class="close-modal">Cerrar</button>
            `;

            // Añade funcionalidad al botón de cerrar
            document.querySelector('.close-modal').addEventListener('click', closeModal);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Función para cerrar el modal y limpiar los campos
function closeModal() {
    const modal = document.getElementById('adultProfileModal');

    // Restaura el contenido original del modal
    document.querySelector('.description3').innerHTML = originalDescriptionContent;

    // Vuelve a añadir el evento del botón "Ingresar" restaurado
    document.querySelector('.accept').addEventListener('click', function () {
        const yearInputs = document.querySelectorAll('.pin-input');
        let enteredYear = '';
        yearInputs.forEach(input => {
            enteredYear += input.value;
        });

        fetch('https://backend-production-40d8.up.railway.app/v1/user/validate-birthyear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                year: enteredYear
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                clearPinInputs();
                window.location.href = '/perfil_padre';
            } else {
                const description = document.querySelector('.description3');
                description.innerHTML = `
                    <p>La fecha de nacimiento es incorrecta. Inténtalo de nuevo.</p>
                    <button class="close-modal">Cerrar</button>
                `;

                document.querySelector('.close-modal').addEventListener('click', closeModal);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    setupPinInputs(); // Reconfigura el comportamiento de los inputs
    clearPinInputs(); // Limpia los campos del PIN
    modal.style.display = 'none'; // Oculta el modal
}

// Función para limpiar los campos del PIN
function clearPinInputs() {
    const yearInputs = document.querySelectorAll('.pin-input');
    yearInputs.forEach(input => {
        input.value = '';
    });
}

// Cierra el modal al presionar el botón de cerrar (×)
document.querySelector('.back2').addEventListener('click', closeModal);

// Configura el comportamiento de los inputs al cargar la página
setupPinInputs();
