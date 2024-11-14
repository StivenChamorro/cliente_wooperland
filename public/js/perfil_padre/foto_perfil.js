window.onload = function() {
    const fotoPerfil = document.getElementById('avatar');
    const imagenGuardada = localStorage.getItem('fotoPerfil');

    if (imagenGuardada) {
        fotoPerfil.src = imagenGuardada;
        fotoPerfil.style.display = 'block'; // Mostrar imagen
    }
};


const fotoPerfil = document.getElementById('avatar');
const input = document.getElementById('inputFoto');

fotoPerfil.addEventListener('click', () => input.click());

function cargarFoto() {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            fotoPerfil.src = e.target.result;
            fotoPerfil.style.display = 'block'; // Mostrar imagen

            // Guardar la imagen en el Local Storage
            localStorage.setItem('fotoPerfil', e.target.result);
        };

        reader.readAsDataURL(input.files[0]); // Leer la imagen y convertir a Data URL
    } else {
        alert("Por favor, selecciona una imagen.");
    }
}


