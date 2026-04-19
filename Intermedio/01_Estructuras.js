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

// busqueda

//Includes
console.log(ordenNumeros.includes(3))
console.log(ordenNumeros.includes(15))

// find 
let primerHallado = ordenNumeros.find(elementos => elementos % 2 === 0)
console.log(primerHallado)

// Sets Avanzados
// - Operaciones
// Eliminacion de repetidos
const ArregloNumeros = [1,2,3,4,5,6,6]
const SetNumeros = [... new Set(ArregloNumeros)]
console.log(SetNumeros)

// Union
const setA = new Set([1,2,3])
const setB = new Set([2, 3, 4,5,6])
const union = new Set([... setA, ... setB])
console.log(union)

// Interseccion
const interseccion = new Set([...setA].filter(elemento => setB.has(elemento)))
console.log(interseccion)

///Diferencia
const diferencia = new Set([...setA].filter(elemento => !setB.has(elemento)))
console.log(diferencia)

// Conversion de set
console.log(...setA)

// iteracion
setA.forEach(elemento => console.log(elemento))