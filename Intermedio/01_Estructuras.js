// Estructuras avanzadas

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