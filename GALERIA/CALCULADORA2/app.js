class calculator {
    constructor(op1, op2) {
        this.op1 = op1
        this.op2 = op2
        this.clear();
    }

    clear() {
        this.operando1 = 0
        this.operando2 = 0
        this.operador = ""
        this.actualizar();
    }

    actualizar() {
        this.op1.innerHTML = this.operando1 + this.operador
        this.op2.innerHTML = this.operando2

    }
    aggNumero(numero) {
        if (numero === "." && this.operando2.include(".")) return
        this.operando2 == 0 ? numero : this.operando2.toString + numero
        this.actualizar()
    }

    delete() {
        if (this.operando2 == 0) return
        this.operando2 = this.operando2.toString().slice(0, -1)
        this.actualizar()
    }
    operaciones(operador) {
        if (this.operador) {
            this.calcular()
        }
        this.operando1 = + this.operando2 === 0 ? this.operando1 : this.operando2
        this.operador = operador
        this.operando2 = 0
        this.actualizar()
    }

    calcular() {
        switch (this.operador) {
            case "+":
                this.operando1 = +this.operando1 + +this.operando2
                break
            case "-":
                this.operando1 = +this.operando1 - +this.operando2
                break
            case "*":
                this.operando1 = +this.operando1 * +this.operando2
                break
            case "/":
                this.operando1 = +this.operando1 / +this.operando2
                break
        }
        this.operador = ""
        this.operando2 = 0
        this.actualizar()
    }
}
const op1E = data
const operacion = document.querySelectorAll("[operation]")
const c = document.querySelector("[c]")
const Delete = document.querySelector("[delete]")
const igual = document.querySelector("igual")

igual.addEventListener("click", () => {
    console.log(igual)
})








/* const numberButton = document.querySelectorAll("[number]")
const operacion = document.querySelectorAll("[operation]")
const c = document.querySelector("[c]")
const Delete = document.querySelector("[delete]")
const igual = document.querySelector("igual")

igual.addEventListener("click", () => {
    console.log(igual)
})*/
