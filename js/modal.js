const abrirModal = document.querySelector("#crearCuenta");
const cerrarModal = document.querySelector("#close-image");


abrirModal.addEventListener("click", function(){
    let modal = document.querySelector(".content_modal").style.display="block";
});

cerrarModal.addEventListener("click", function(){
    let modal = document.querySelector(".content_modal").style.display="none";
});