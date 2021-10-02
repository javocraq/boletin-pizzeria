// Obtener los elementos de la clase .close
let evento = document.querySelectorAll(".close");

// Recorrerlos
evento.forEach(function(evento){
    
    // Agregar un evento click a cada uno de ellos
    evento.addEventListener("click", function(e){
        e.preventDefault();

        let content = document.querySelector(".content");

        // Quitar la clase de animación que ya tiene
        content.classList.remove("animation-entra");

        // Agregar la clase de animación
        content.classList.add("animation-out");

        setTimeout(function(){
            location.href = "/";
        },600);

        return false;
    })
});