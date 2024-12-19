const boton = document.querySelector(".button")
const boton2 = document.querySelector(".button2")
const contador = document.querySelector(".contador")
let contador2 = 0

boton.addEventListener("click", () => {
    contador2 += 1
    contador.textContent = contador2

})
boton2.addEventListener("click", () => {
    contador2 -= 1
    contador.textContent = contador2

})