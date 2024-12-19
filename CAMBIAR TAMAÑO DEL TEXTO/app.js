const botonAumentar = document.querySelector(".buttonAumentar")
const botonDisminuir = document.querySelector(".buttonDisminuir")
const texto = document.querySelector(".texto")

const select = document.querySelector(".selectG")

let size = parseInt(window.getComputedStyle(texto).fontSize);
console.log("size", size)

select.addEventListener("change", () => {
    if (select.value !== "") {
        size = parseInt(select.value);
        texto.style.fontSize = `${size}px`;
        console.log("Cambiado por select:", size);
    }
})



botonAumentar.addEventListener("click", () => {
    if (size >= 200) return
    size = size + 10;
    console.log("size", size)
    texto.style.fontSize = `${size}px`
})

botonDisminuir.addEventListener("click", () => {
    if (size <= 20) return
    size = size - 10;
    console.log("size", size)
    texto.style.fontSize = `${size}px`
})