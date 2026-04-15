// Ciudadanos de primera clase

const saludo = function (nombre) {
    console.log(`Hola, ${nombre}`)
}

saludo("dove")

function procesandoSaludo(FuncionSaludo, nombre) {
    FuncionSaludo(nombre)
}

function regresandoSaludo() {
    return saludo
}

procesandoSaludo(saludo, "dovez")
const saludo2 = regresandoSaludo()
saludo2("dove")

// Arrow functions avanzadas

// - Retorno implícito
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// - this léxico
const controlador = {
    nombre: "dove",
    saludoing: function () {
        console.log(`Hola, ${this.nombre}`)
    },
    arrowsaludo: () => {
        console.log(`Hola, ${this.nombre}`)
    }
}

controlador.saludoing()
controlador.arrowsaludo();

// IIFE (Expresión de Función Invocada Inmediatamente)

(function () {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();

// Parámetros Rest (...)

function sum(...numero) {
    let resultado = 0
    for (let numero of numero) {
        resultado += numero
    }
    return resultado
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// Operador Spread (...)

const numero = [1, 2, 3]
function sumaconSpread(a, b, c) {
    return a + b + c
}

console.log(sumaconSpread(1, 2, 3)) // Sin Spread
console.log(sumaconSpread(...numero)) // Con Spread

// Closures (Clausuras)

function crearContador() {
    let contador = 0
    return function () {
        contador++
        console.log(`Contador: ${contador}`)
    }
}

const contador = crearContador()
contador()
contador()
contador()
contador()

// Recursividad

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

// Funciones parciales

function sumaParcial(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumaCon = sumaParcial(4)
console.log(sumaCon(2, 3))
console.log(sumaCon(1, 2))

// Currying

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

// Callbacks

function procesarDatos(data, callback) {
    const resultado = sum(...data)
    callback(resultado)
}

function procesandoResultado(resultado) {
    console.log(resultado)
}

function procesandoResultado2(resultado) {
    console.log(`Mi resultadoado es: ${resultado}`)
}

procesarDatos([1, 2, 3], procesandoResultado)
procesarDatos([1, 2, 3], procesandoResultado2)
procesarDatos([1, 2, 3], (resultado) => {
    console.log(`Mi resultadoado en la arrow function es: ${resultado}`)
})