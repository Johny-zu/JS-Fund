// Con var
if (true) {
    var x = 5;
}
console.log(x);  // 5 (sale del bloque)

// Con let y const la forma moderna
if (true) {
    let y = 5;
    const z = 10;
}
console.log(y);  // ReferenceError: x is not defined 
console.log(z);  // ReferenceError: y is not defined 

// Ambito de funcion
function miFuncion() {
    let mensaje = "dentro";
    if (true) {
        let interno = "anidado";
    }
    console.log(interno);  // Error (ámbito de bloque)
}

console.log(mensaje);  // Error (ámbito de función)

// Ejemplo de ambito en bloque
let global = "soy global";

function prueba() {
    let local = "soy local";
    if (true) {
        let bloque = "soy bloque";
        console.log(global); 
        console.log(local);  
        console.log(bloque); 
    }
    console.log(bloque);     
}

prueba();
console.log(local);          