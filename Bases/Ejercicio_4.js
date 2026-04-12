// 1. Ingresa una funcion que regrese una suma de dos numeros
console.log("=======================================")
let a=6, b=3
function suma(a, b){
    return console.log(a+b)
}
suma(a, b)

// 2. Funcion que tome el mayor de un arreglo de numeros
console.log("=======================================")
function numeroMayor(){
    let numeros = [1,2,3,4,5]
    let mayor = numeros[0]
    for(let i = 1; i < numeros.length; i++) {
        if(numeros[i] > mayor) {
            mayor = numeros[i]
        }
    }
    return mayor
}
console.log("El número mayor es:", numeroMayor())

// 3. ingresa una funcion que tome un string y devuelva las vocales
console.log("=======================================")
function vocales(palabra){
    let vocalesLista = ["a", "e", "i", "o", "u"]
    let resultado = ""
    
    for(let i = 0; i < palabra.length; i++){
        let letra = palabra[i].toLowerCase()
        if(vocalesLista.includes(letra)){
            resultado += letra
        }
    }
    return resultado
}
let palabra = "zapato"
console.log(`las vocales del a palabra ${palabra} son: ` + vocales(palabra));

// 4. ingrese un array con minusculas y pasalas a mayusculas
console.log("=======================================")
function capital(palabraCapital){
    let resultado = []
    for(let i = 0; i < palabraCapital.length; i++){
        resultado.push(palabraCapital[i].toUpperCase())
    }
    return resultado
}

let palabraCapital = ["p", "a", "l", "a"]
console.log(capital(palabraCapital)) 

// 5. Ingresa una funcion que dicte si un numero es primo o no
console.log("=======================================")
function primos(numero){
    return numero % 2 === 0 ? true : false  
}
let numero = 6
console.log(`¿El numero ${numero} es primo? ` + primos(numero))

// 6. declara dos arrays que regresen los iguales en una funcion
console.log("=======================================")

function iguales(primer, segundo){
    let resultado = []
    for (let i = 0; i < primer.length; i++){
        for (let j = 0; j < segundo.length; j++){
            if(primer[i] === segundo[j]){
                resultado.push(primer[i])
            }
        }
    }
    return resultado;
}

let array1 = [1, 2, 3, 4, 5]
let array2 = [3, 5, 6, 7]
console.log(iguales(array1, array2)) 
