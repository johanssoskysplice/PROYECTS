const PIEDRA = 0;
const PAPEL = 1;
const TIJERA = 2;

const empate = 0;
const victoria = 1;
const perder = 2;



const piedraBtn = document.getElementById("piedra")
const papelBtn = document.getElementById("papel")
const tijeraBtn = document.getElementById("tijera")

piedraBtn.addEventListener("click", () => {
    jugar(PIEDRA)
});
papelBtn.addEventListener("click", () => {
    jugar(PAPEL)
})
tijeraBtn.addEventListener("click", () => {
    jugar(TIJERA)
})

function jugar(opcionesUsuario) {

    const machineOption = Math.floor(Math.random() * 3);
    const resultado = calcularResultado(opcionesUsuario, machineOption);

    switch (resultado) {
        case empate:
            alert(machineOption + "empate")
            break;
        case victoria:
            alert(machineOption + "victoria")
            break;
        case perder:
            alert(machineOption + "derrota")
            break;
    }


}

function calcularResultado(opcionesUsuario, machineOption) {
    if (opcionesUsuario === machineOption) {
        return empate;
    } else if (opcionesUsuario === PIEDRA) {
        if (machineOption === PAPEL) return perder;
        if (machineOption === TIJERA) return victoria;

    } else if (opcionesUsuario === PAPEL) {
        if (machineOption === TIJERA) return perder;
        if (machineOption === PIEDRA) return victoria;
    }
    else if (opcionesUsuario === TIJERA) {
        if (machineOption === PIEDRA) return perder;
        if (machineOption === PAPEL) return victoria;
    }
}