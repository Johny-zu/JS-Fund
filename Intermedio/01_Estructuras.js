// Estructuras avanzadas

// Modulo 1: funcionales
// foreach
let numeros = [1, 2, 3, 4 ,5, 6]
numeros.forEach(elementos => console.log(`Numero: ${elementos}`))

//Map
let duplicado = numeros.map(elementos => elementos * 2)
console.log(duplicado)

// Filter
let pares = numeros.filter(elementos => elementos % 2 === 0)
console.log(pares)

// reduce
let sum = numeros.reduce((previo, siguiente) => previo + siguiente, 0)
console.log(sum)

// Segundo modulo: manipulacion
//Flat
let arregloAnidado = [1,[2,[3,[4,[5]]]]]
let arregloFlat = arregloAnidado.flat(1) //Elimina n numero de profundidad
console.log(arregloFlat)

// FlatMap
let frases = ["Funcion manipulable", "Funcion no manipulable"]
let corteFraseado = frases.flatMap(frases => frases.split(" "))
console.log(corteFraseado)

// ordenacion
let desordenNumeros = [3, 5, 7, 8, 10, 12]
let ordenNumeros = desordenNumeros.sort((a, b) => a - b)
console.log(ordenNumeros)

let desordenLetras = ["d", "a", "z", "b", "c", "v"]
let ordenLetras = desordenLetras.sort()
console.log(ordenLetras)

//reverse 
ordenNumeros.reverse()
console.log(ordenNumeros)