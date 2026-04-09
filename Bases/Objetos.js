// Forma directa 
const persona = {
    nombre: "dove",
    edad: 30,
    saludar: function() {
        return "Hola, soy " + this.nombre;
    }
};

console.log(persona.nombre);    // "dove"
console.log(persona["edad"]);   // 30 (notación de corchetes)
console.log(persona.saludar()); // "Hola, soy dove"

// Puedes agregar propiedades después
persona.email = "dove@mail.com";
delete persona.edad;  // eliminar propiedad

const carro = {
    marca: "onix",
    modelo: "2022",
    año: 2025,
    descripcion: function(){
        return "La marca es: " + this.marca + " el modelo es: " + this.modelo;
    }
};

console.log(carro.descripcion());