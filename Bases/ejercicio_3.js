// 1. Conectar 2 cadenas de texto
console.log("=======================================")
let nombre = "dove"
let saludo = "Saludando a " + nombre + "!"
console.log(saludo)

// 2. muestra la longitud de una cadena
console.log("=======================================")
console.log(saludo.length) 

// 3. muestra primer y ultimo caracter del string
console.log("=======================================")
console.log(saludo[0])
console.log(saludo[16])

// 4. Convierte las minusculas a mayusculas
console.log("=======================================")
console.log(saludo.toUpperCase())

// 5. Crea una cadena de texto en varias lineas
console.log("=======================================")
let texto = `Ingresando un texto
            que tiene varias lieas sin 
            concatenadores`

console.log(texto)

// 6. interpola una variable en un valor string
console.log("=======================================")
let animal = "perro"
console.log(`Nuestra mascota es un ${animal}`)

// 7. Revisa que una cadena tenga una palabra en concreto
console.log("=======================================")
console.log(saludo.includes("dove"))

// 8. Revisa que dos Strings sean iguales
console.log("=======================================")
let palabra1 = "uno2"
let palabra2 = "dos"
if(palabra1.match(palabra2))
    console.log(true)
else 
    console.log(false)

// 9. Revisa que dos strings tengan la misma longitud
console.log("=======================================")
let espacio1 = palabra1.length
let espacio2 = palabra2.length

if(espacio1 === espacio2)
    console.log(true)
else 
    console.log(false)
