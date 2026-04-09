let frutas = ["manzana", "pera", "uva"];

frutas.push("naranja"); //Agrega al final
frutas.unshift("sandia") //Agrega al principio
frutas.pop(); // Saca del final
frutas.shift(); // Saca del principio

console.log(frutas.length) // Deberia sacar 3

// Los arreglos pueden tener diferentes tipos aunque no es muy recomendable
let mixto = [1, "texto", true, {nombre: "dove"}, [1,2]];

// No esn ecesartio escribir for siempre
const numeros = [1, 2, 3, 4, 5];

// map - transforma cada elemento
const dobles = numeros.map(n => n * 2);
console.log(dobles);  // [2, 4, 6, 8, 10]

// filter - queda solo los que cumplen condición
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);   // [2, 4]

// find - encuentra el primer elemento que cumple
const primerMayor3 = numeros.find(n => n > 3);
console.log(primerMayor3);  // 4

// some - ¿alguno cumple?
const hayMayor4 = numeros.some(n => n > 4);
console.log(hayMayor4);  // true

// every - ¿todos cumplen?
const todosMenor10 = numeros.every(n => n < 10);
console.log(todosMenor10);  // true

// reduce - acumula (como hacer una suma)
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
console.log(suma);  // 15

// forEach - solo iterar (sin retornar)
numeros.forEach(n => console.log(n));