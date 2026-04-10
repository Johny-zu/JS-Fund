// Actuadores como false
false;
0;
"" // (string vacío);
null;
undefined;
NaN // (Not a Number);

//Actuadores de true
true
1, -1, 3.14 // (cualquier número que no sea 0)
"hola" // (cualquier string no vacío)
"0" // (esto es string, no número)
// []
{} // (objeto vacío)
// function() {}

//Ejemplo deuso:
let nombre = "";

if (nombre) {
    console.log("Tiene nombre");  // falsy
} else {
    console.log("No tiene nombre"); // Truthy
}


//{ usuarios.length && <ListaDeUsuarios/> }  // si length es 0, no muestra nada

// Segundo ejemplo de uso:
if ("0") console.log("1");
if (0) console.log("2");
if ([]) console.log("3");
if ({}) console.log("4");
if (null) console.log("5");