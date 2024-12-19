
const button = document.getElementById("miButton");

let cont = 255;




button.addEventListener("click", (e) => {
    if (cont <= 0) return
    cont = cont - 10
    console.log("cont", cont)
    button.style.backgroundColor = `rgb(255, ${cont} , ${cont} )`

    // button.style.fontSize = "40px"

});

let offsetX, offsetY, dragging = false;

function captDif(e) {
    offsetX = e.clientX - button.offsetLeft;
    offsetY = e.clientY - button.offsetTop;
    dragging = true;

}
button.addEventListener("mousedown", (e) => {
    // Captura las diferencias de posición entre el ratón y el botón
    captDif(e)


    // Desactivar el estilo "cursor: move" si es necesario
});
button.addEventListener("touchstart", (e) => {
    // Captura las diferencias de posición entre el ratón y el botón
    captDif(e)


    // Desactivar el estilo "cursor: move" si es necesario
});


function calcPosicion(clientX, clientY) {
    if (dragging) {
        // Calcula la nueva posición del botón
        const x = clientX - offsetX;
        const y = clientY - offsetY;

        button.style.left = `${clientX}px`;
        button.style.top = `${clientY}px`;
    }
}
document.addEventListener("mousemove", (e) => {
    console.log("mousemove", e)
    calcPosicion(e.clientX, e.clientY)
});

document.addEventListener("touchmove", (e) => {
    console.log("touchmove", e)
    calcPosicion(e.touches[0].clientX, e.touches[0].clientY)
});

function myDragging() {
    dragging = false;
}

document.addEventListener("mouseup", () => {
    myDragging()
});

document.addEventListener.button("touchend", () => {
    myDragging();
});




//numeroA.toString + "px";





/*


*/
