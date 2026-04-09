// Recomendable no usar mucho
5 == "5"        // true (convierte string a número)
0 == false      // true (false se convierte a 0)
null == undefined  // true (son considerados iguales)
"" == false     // true (string vacío es falso)

// Este es el que se usa ===
5 === "5"       // false (número vs string)
0 === false     // false (número vs booleano)
null === undefined  // false (son diferentes)
"" === false    // false
5 === 5         // true
"hola" === "hola"  // true

//Ejercicio
console.log(1 == "1");
console.log(1 === "1");
console.log(true == 1);
console.log(true === 1);
console.log(null == undefined);
console.log(null === undefined);