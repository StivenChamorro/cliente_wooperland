document.addEventListener('DOMContentLoaded', function() {
    let tituloMatematicas = document.getElementById("titulo_matematicas");
    let menu = document.getElementById("menu");

    tituloMatematicas.addEventListener('click', function() {
        menu.classList.toggle("open-menu");
    });
});