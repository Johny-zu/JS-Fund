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

// Metodos avanzados
// assign
let persona_dn = {nome: "dove2"}
let detalle_persona = {edad: 23, alias: "dozu"}

let persona_completa = Object.assign(persona_dn, detalle_persona)
console.log(persona_completa)

// keys, values, entries
console.log(Object.keys(persona_completa))
console.log(Object.values(persona_completa))
console.log(Object.entries(persona_completa))