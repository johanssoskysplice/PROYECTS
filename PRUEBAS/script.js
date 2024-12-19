let horas = 0
let minutos = 0
let segundos = 0
let miliSegundos = 1
let intervalid = null

const cronometroDisplay = document.getElementById("cronometro")

function actualizarCronometro() {
    let horasStr = horas < 10 ? "0" + horas : horas
    let minutosStr = minutos < 10 ? "0" + minutos : minutos
    let segundosStr = segundos < 10 ? "0" + segundos : segundos
    let miliSegundosStr = miliSegundos < 10 ? "0" + miliSegundos : miliSegundos

    cronometroDisplay.innerHTML = `${horasStr}:${minutosStr}:${segundosStr}:${miliSegundosStr}`
}

function iniciarCronometro() {
    if (intervalid !== null) return
    intervalid = setInterval(() => {
        miliSegundos++
        if (miliSegundos === 100) {
            miliSegundos = 0
            segundos++
        }
        if (segundos === 60) {
            segundos = 0
            minutos++
        }
        if (minutos === 60) {
            minutos = 0
            horas++
        }
        actualizarCronometro()
    }, 10)
}
function detenerCronometro() {
    clearInterval(intervalid)
    intervalid = null
}
function reiniciarCronometro() {
    detenerCronometro()
    horas = 0
    minutos = 0
    segundos = 0
    miliSegundos = 0
    actualizarCronometro()
}
document.getElementById("start").addEventListener("click", iniciarCronometro)
document.getElementById("stop").addEventListener("click", detenerCronometro)
document.getElementById("reset").addEventListener("click", reiniciarCronometro)