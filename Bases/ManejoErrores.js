// Ejemplo de erro
//let objeto
//console.log(objeto.ropa)

//Captura de errores
let objeto
try{
    // Intenta 
    console.log(objeto.ropa)
    console.log("Operacion existosa")
} catch (error){
    // Si no jala pa'aca(bloque de error)
    console.log(`Operacion fallida debido a: ${error.message}`)
}