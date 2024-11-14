document.addEventListener('DOMContentLoaded', function() {
    const menu_header = document.getElementById("img_perfil_actual");
    const menu_desplegado_header = document.getElementById("menu_desplegado_header");

    // Verificar que ambos elementos existen antes de agregar el event listener
    if (menu_header && menu_desplegado_header) {
        menu_header.addEventListener('click', function() {
            menu_desplegado_header.classList.toggle("open-menu");
        });
    }
});
