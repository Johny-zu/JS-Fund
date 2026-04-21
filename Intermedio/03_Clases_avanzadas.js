class Persona{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    
    saludo() {
        console.log(`Hola ${this.nombre}`)
    } 
}

const persona = new Persona("dove", 23)
persona.saludo()

persona.consultarEdad = function(){
    console.log(`Tengo ${this.edad} años`)
}

persona.consultarEdad()

// Clase abstracta
class Animal{
    constructor(nombre){
        if(new.target === Animal){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.nombre = nombre
    }
    haceSonido(){
        console.log("Genera un sonido")
    }
}

//let animal = new Animal("pajaro")
//console.log(animal)

class Gato extends Animal{
    haceSonido(){
        console.log("miau")
    }
}

class Perro extends Animal{
    haceSonido(){
        console.log("guau")
    }
}

const gato = new Gato("gato")
console.log(gato)
const perro = new Perro("perro")
console.log(perro)

gato.haceSonido()
perro.haceSonido()

const VolarMixin = {
    volar(){
        console.log("Esta volando")
    }
}

class Pajaro extends Animal{ }

class Dragon extends Animal{ }

Object.assign(Pajaro.prototype, VolarMixin)

const pajaro = new Pajaro("Colibri")
console.log(pajaro.nombre)
pajaro.volar()

const dragon = new Dragon("dratini")
console.log(dragon.nombre)

// Singleton
class Sesion{
    constructor(nombre){
        if(Sesion.instance){
            return Sesion.instance
        }
        this.nombre = nombre
        Sesion.instance = this
    }
}

const sesion1 = new Sesion("dove@gmail.com")
const sesion2 = new Sesion()
console.log(sesion1.nombre)
console.log(sesion2.nombre)

// symbol
const ID = Symbol("id")

class Usuario{
    constructor(nombre){
        this.nombre = nombre
        this[ID] = Math.random()
    }
}

const usuario = new Usuario("dove")
console.log(usuario.nombre)
console.log(usuario[ID])

// instance of 
class Carro {}

const carro = new Carro()

console.log(carro instanceof Carro)

// create 
const otroCarro = Object.create(Carro.prototype)
console.log(otroCarro instanceof Carro)

// Proxy    
const proxy = {
    get(target, property){
        console.log(`Se esta accediendo a la propiedad: ${property}`)
        return target[property]
        //console.log(target)
        //console.log(property)
    },
    set(target, property, valor){
        if(property === "balanceo" && valor < 0){
            throw new Error("El saldo no puede ser negativo");
        }
        target[property] = valor
        //console.log(target)
        //console.log(property)
        //console.log(valor)
    }
}

class CuentaBanco {
    constructor(balanceo){
        this.balanceo = balanceo
    }
}

const cuenta  = new Proxy(new CuentaBanco(100), proxy)
console.log(cuenta.balanceo)

cuenta.balanceo = 49
console.log(cuenta.balanceo)