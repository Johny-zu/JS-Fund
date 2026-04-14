// log base
console.log("Log base")

// Log de error
console.error("Mensaje de error")

console.error("Mensaje de error, no se pudo conectar a: " + new Error("Conexion fallida"))

// Advertencia

console.warn("Log de advertecia")

// Informativo
console.info("Informacion del log")

// tabla
let testTabla = [
    ["Dove", 23], 
    ["zu", 21]
]
console.table(testTabla)

let testTabla2 = [
    {Nombre: "Dove", edad: 23}, 
    {Nombre: "zu", edad: 21}
]
console.table(testTabla2)

// grupos
console.group("Usuario: ")
console.log("Nombre: dove")
console.log("edad: 22")
console.groupEnd()
console.log("\nnueva linea")

// tiempo,, el mensaje entre comillas siempre debe de el mismo para dierenciar el bloque 
console.time("El tiempo de ejecucion es: ")
for(let i = 0; i <= 10000; i++){

}
console.timeEnd("El tiempo de ejecucion es: ")

// muestra lo que es cierto
let edad = 12
console.assert(edad >= 18, "El usuario deberia se mayor de edad")

//Conteo
console.count("punto")
console.count("punto")
console.count("punto")
console.count("punto")
console.count("punto")
console.countReset("punto")
console.count("punto")

//console.clear()