let test = 24;
test = "texto";

const test2 = {nombre: "prueba2"};
//test2 = 2;

const nombre = function(nombre){
    return "nombre escrito: " + nombre
}

let consolNombre = document.getElementById('nombre')

let texto = "dove";

// Mostrar en HTML en lugar de console.log
document.getElementById('consolNombre').innerHTML = nombre(texto);

// Mostrar resultado de la condición
let resultadoCondicion = document.createElement('p');
if(test === 24) {
    resultadoCondicion.textContent = "es numero";
} else {
    resultadoCondicion.textContent = "No es numero";
}
document.body.appendChild(resultadoCondicion);