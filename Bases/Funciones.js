function sumar (a,b){
    return a+b;
}

let resultado = sumar(3, 4);

const restar = function(a,b){
    return a - b;
}

console.log(restar(10,3));

// Uso de arrow
const multiplicar = (a,b) => {
    return a * b;
}

const dividir = (a,b) => a/b; //Esto si solo es una linea de expresion

const duplicar = x => x*2; //Esto si solo se tiene un parametro, se puede omitir el parentesis
