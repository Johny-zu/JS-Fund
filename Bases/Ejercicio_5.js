// 1. objeto con 3 propiedades
let persona = {
    nombre: "dove",
    edad: 30,
    genero: "masculino"
}

// 2. Accede y muestra los valores
console.log("=======================================")
for(let key in persona){
    console.log(key + ": " + persona[key])
}

// 3. Agrega una nueva propiedad
console.log("=======================================")
persona.email = "dove@gmail.com"
console.log(persona.email)

// 4. Elimina una de las propeiedades
console.log("=======================================")
delete persona.edad
for(let key in persona){
    console.log(key + ": " + persona[key])
}

// 5. Agrega una funcion e invocala
let persona2 = {
    nombre: "dove",
    edad: 30,
    genero: "masculino",
    mayorEdad: function(edad){
        if(edad >= 18)
            return "mayor de edad"
        else
            return "menor de edad"
    }
}
console.log("=======================================")
console.log("la persona: " + persona2.nombre + " es " + persona2.mayorEdad(persona2.edad))

// 6. Itera las propiedades del objeto
console.log("=======================================")
for(let key in persona){
    console.log(key + ": " + persona[key])
}
