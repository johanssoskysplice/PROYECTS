class Calculadora {
    constructor(op1E, op2E) {
        this.op1E = op1E;
        this.op2E = op2E;
        this.clear();
    }

    clear() {
        this.operando1 = 0;
        this.operando2 = 0;
        this.operador = "";
        this.actualizar();
    }

    actualizar() {
        this.op1E.innerHTML = this.operando1 + this.operador;
        this.op2E.innerHTML = this.operando2;
    }

    aggNumero(numero) {
        if (numero === "." && this.operando2.includes('.')) return;

        this.operando2 =
            this.operando2 == 0 ? numero : this.operando2.toString() + numero;

        this.actualizar();
    }
    delete() {
        if (this.operando2 == 0) return;
        this.operando2 = this.operando2.toString().slice(0, -1);
        this.actualizar();
    }

    operaciones(operador) {
        if (this.operador) {
            this.calcular();
        }

        this.operando1 = + this.operando2 === 0 ? this.operando1 : this.operando2;
        this.operador = operador;
        this.operando2 = 0;
        this.actualizar();
    }

    calcular() {
        switch (this.operador) {
            case "+":
                this.operando1 = +this.operando1 + +this.operando2;
                break;
            case "-":
                this.operando1 = +this.operando1 - +this.operando2;
                break;
            case "*":
                this.operando1 = +this.operando1 * +this.operando2;
                break;
            case "/":
                this.operando1 = +this.operando1 / +this.operando2;
                break;

        }
        this.operador = "";
        this.operando2 = 0;
        this.actualizar();

    }
}
const op1E = document.querySelector("[data-operando-1]");
const op2E = document.querySelector("[data-operando-2]");
const clearButton = document.querySelector("[data-clear]");
const micalculadora = new Calculadora(op1E, op2E);
const numberButton = document.querySelectorAll("[data-number]");
const buttonDelete = document.querySelector("[data-eliminar]");
const buttonOperacion = document.querySelectorAll("[data-operacion]");
const botonIgual = document.querySelector("[data-igual]");


clearButton.addEventListener("click", () => {
    micalculadora.clear();
})

numberButton.forEach(button => {
    button.addEventListener("click", () => {
        micalculadora.aggNumero(button.innerHTML);
    })
})

buttonDelete.addEventListener("click", () => {
    micalculadora.delete();
});

buttonOperacion.forEach(button => {
    button.addEventListener("click", () => {
        micalculadora.operaciones(button.innerHTML);
    })
})

botonIgual.addEventListener("click", () => {
    micalculadora.calcular();
})






