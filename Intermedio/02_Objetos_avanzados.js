// Prototipos 
let persona = {
    nombre: "dove",
    edad: 23,
    saludo() {
        console.log(`Hola ${this.nombre}`)
    } 
}

console.log(persona.__proto__)
console.log(Object.getPrototypeOf(persona))

persona.consultarEdad = function(){
    console.log(`Tengo ${this.edad} años`)
}

console.log(persona)
persona.consultarEdad()

// herencia 
console.log("===============")
let programador = Object.create(persona)

programador.saludo()
programador.lenguaje = "JS"
console.log(`El programador maneja: ${programador.lenguaje}`)
console.log(persona.lenguaje) //output undefined

// Metodos estaticos y de instancia
function Persona(nombre, edad){
    this.nombre = nombre
    this.edad = edad
}

Persona.prototype.saludo = function(){
    console.log(`Hola ${this.nombre}`)
}

let nueva_persona = new Persona("zu", 22)
nueva_persona.saludo()