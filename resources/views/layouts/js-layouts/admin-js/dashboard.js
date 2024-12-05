

function toggleModal() {
    const modal = document.getElementById('adminModal');
    modal.classList.toggle('show');
}

function openProfile() {
    alert('Opening profile...');
    toggleModal();
}

function logout() {
    alert('Logging out...');
    toggleModal();
}

// Cierra el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('adminModal');
    if (!event.target.closest('.modal') && !event.target.closest('.admin-info')) {
        modal.classList.remove('show');
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Eliminar la clase 'active' de todos los elementos
            navItems.forEach((i) => i.classList.remove("active"));

            // Agregar la clase 'active' al elemento clicado
            item.classList.add("active");
        });
    });
});
