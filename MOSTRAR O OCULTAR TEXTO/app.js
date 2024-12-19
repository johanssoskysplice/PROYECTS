botonOcultar = document.querySelector(".boton1")
botonMostrar = document.querySelector(".boton2")
texto = document.querySelector(".texto")
textoOculto = document.querySelector(".textoOculto");
aux1 = texto.textContent

botonOcultar.addEventListener("click", () => {
    if (texto.textContent !== textoOculto.textContent) {
        texto.textContent = textoOculto.textContent; // Cambia al texto oculto
    }
});
botonMostrar.addEventListener("click", () => {
    texto.textContent = aux1
})

