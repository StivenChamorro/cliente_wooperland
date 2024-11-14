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
