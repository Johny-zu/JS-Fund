//Crea una variables para cada operacion aritmetica
let a = 6, b = 3

// crea una variable para cada tipo de operacion de asignacion, 
console.log("========================================")
console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)
console.log(a % b) 
console.log(a ** b) 

// crea verdaderos con operadores de comparacion
console.log("========================================")
console.log(a > b)
console.log(a !== b)

// crea falsos con operadores de comparacion
console.log("========================================")
console.log(a < b)
console.log(a === b)

// usar and y or
console.log("=======================================")
let valor = false
if(a === 0 && b === 3)
    console.log(valor = true)
else
    console.log(valor = false)

console.log("=======================================")
if(a === 0 || b === 3)
    console.log(valor = true)
else
    console.log(valor)

// usar negaciones 
console.log("=======================================")
if(!a === b)
    console.log(valor)