// 1. Crea una función que retorne a otra función
console.log("=======================================")
const ping = function(sonido){
    console.log(`Sonido: ${sonido}`)
}

ping("ping")  

function pong (sonidoPing, sonidoPong){
    sonidoPing(sonidoPong)
}

function retorneo(){
    return ping
}

pong(ping, "clap")  

const sonido2 = retorneo()
sonido2("pong")  

// 2. Implementa una función currificada que multiplique 3 números
console.log("=======================================")
function multiplicar(a) {
    return function(b) {
        return function(c) {
            return a * b * c
        }
    }
}


console.log(multiplicar(2)(3)(4))  
console.log(multiplicar(5)(2)(3))  


// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
console.log("=======================================")
function potencia(base, exponente){
    return exponente === 0 ? 1 : exponente > 0 ? base * potencia(base, exponente - 1) : 1 / potencia(base, -exponente)
}

console.log(potencia(3,3))
// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
console.log("=======================================")
function createCounter(numero) {
    let contador = numero
    return{
        increment: function(){
            contador++
            return contador
        },
        decrement: function(){
            contador--
            return contador
        },
        getValue: function(){
            return contador
        }
    }
}

const counter = createCounter(10)
console.log(counter.getValue())     
console.log(counter.increment())    
console.log(counter.increment())    
console.log(counter.decrement())    
console.log(counter.getValue())     

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
console.log("=======================================")

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
console.log("=======================================")

// 7. Desarrolla una función parcial
console.log("=======================================")

// 8. Implementa un ejemplo que haga uso de Spread
console.log("=======================================")

// 9. Implementa un retorno implícito
console.log("=======================================")

// 10. Haz uso del this léxico
console.log("=======================================")
