const btnswitch = document.querySelector('#switch');

// Verifica el estado guardado en localStorage al cargar la página
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark');
    btnswitch.classList.add('active');
}

btnswitch.addEventListener('click', () => {
    // Alterna el modo oscuro
    document.body.classList.toggle('dark');
    btnswitch.classList.toggle('active');
    
    // Actualiza localStorage basado en el estado actual
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', null);
    }
});
