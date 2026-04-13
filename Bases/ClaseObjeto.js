class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
    }

}

// Sintaxis

let persona = new Persona("dove", 23, "masculino")
let persona2 = new Persona("zu", 22, "masculino")

console.log(persona)
console.log(persona2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(nombre = "Sin nombre", edad = 0, genero = "Sin genero") {
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
    }

}

let persona3 = new DefaultPerson("dove", 23)

console.log(persona3)

// Acceso a propiedades

console.log(persona3.genero)
console.log(persona3["genero"])

persona3.genero = "masculino"

console.log(persona3.genero)

// Funciones en clases

class PersonaConMetodo {

    constructor(nombre, edad, genero) {
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
    }

    camina() {
        console.log("La persona camina.")
    }

}

let persona4 = new PersonaConMetodo("dove", 23, "masculino")
persona4.camina()

// Propiedades privadas

class PersonaPrivada {

    #clabe_bancaria

    constructor(nombre, edad, genero, clabe_bancaria) {
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
        this.#clabe_bancaria = clabe_bancaria
    }

    pay() {
        this.#clabe_bancaria
    }

}

let persona5 = new PersonaPrivada("dove", 23, "masculino", "clave12345678")

// No podemos acceder
// console.log(persona5.clabe_bancaria) 
// persona5.clabe_bancaria = "new clave12345678" // clabe_bancaria no es #clabe_bancaria

console.log(persona5)

// Getters y Setters

class GetSetPerson {

    #nombre
    #edad
    #genero
    #clabe_bancaria

    constructor(nombre, edad, genero, clabe_bancaria) {
        this.#nombre = nombre
        this.#edad = edad
        this.#genero = genero
        this.#clabe_bancaria = clabe_bancaria
    }

    get nombre() {
        return this.#nombre
    }

    set clabe_bancaria(clabe_bancaria) {
        this.#clabe_bancaria = clabe_bancaria
    }

}

persona6 = new GetSetPerson("dove", 23, "masculino", "clave12345678")

console.log(persona6)
console.log(persona6.nombre)

persona6.clabe_bancaria = "new clave12345678"

class Animal {

    constructor(nombre) {
        this.nombre = nombre
    }

    sonido() {
        console.log("El animal emite un sonido")
    }

}

class perro extends Animal {

    sonido() {
        console.log("Guau")
    }

    run() {
        console.log("El perro corre")
    }

}

class pez extends Animal {
    constructor(nombre, tamano) {
        super(nombre)
        this.tamano = tamano
    }

    nadar() {
        console.log("El pez nada")
    }

}

let myperro = new perro("perro")
myperro.run()
myperro.sonido()

let mypez = new pez("pez", 10)
mypez.nadar()
mypez.sonido()

// Métodos estáticos

class metodoMatematico {
    static sum(a, b) {
        return a + b
    }
}

console.log(metodoMatematico.sum(5, 10))