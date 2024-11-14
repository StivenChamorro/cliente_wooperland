document.addEventListener('DOMContentLoaded', function() {
    let editarInformacion = document.getElementById("eliminar");
    let edicionDesplegado = document.getElementById("agregados");

    editarInformacion.addEventListener('click', function() {
        edicionDesplegado.classList.toggle("activo");

    });
    const btnswitch =document.getElementById('avatar');

    btnswitch.addEventListener('click', ()=>{
        document.body.classList.toggle('ok');
        });

});

document.addEventListener('DOMContentLoaded', function() {
    let agregarInformacion = document.getElementById("agregar");
    let agregarDesplegado = document.getElementById("agregara");

    agregarInformacion.addEventListener('click', function() {
        agregarDesplegado.classList.toggle("activo");

    });
    const btnswitch =document.getElementById('avatar');

    btnswitch.addEventListener('click', ()=>{
        document.body.classList.toggle('ok');
        });

        const boton = document.getElementById('cerrar');

        boton.addEventListener('click', function() {
                agregarDesplegado.classList.toggle("activo");
        });


});

