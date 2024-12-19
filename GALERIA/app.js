let numero = 1


let imagenes = document.querySelector('img[src="/GALERIA/img/1.webp"]')
console.log("imageenes", imagenes)
const atras = document.querySelector('img[src="/GALERIA/img/atras.png"]')
const adelante = document.querySelector('img[src="/GALERIA/img/adelante.png"]')

adelante.addEventListener("click", () => {
    console.log("adelante", adelante)
    if (numero >= 6) return
    numero += 1
    console.log("numero", numero)
    imagenes.src = `/GALERIA/img/${numero}.webp`
    console.log("imagen", imagenes)
})

atras.addEventListener("click", () => {
    console.log("atras", atras)
    if (numero <= 1) return
    numero -= 1
    console.log("numero", numero)
    imagenes.src = `/GALERIA/img/${numero}.webp`
    console.log("imagen", imagenes)
})

