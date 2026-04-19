## JS Intermedio
Inicio de encarpetado para ejercisios intermedios de JS con el fin de dar una continuidad

## Funciones avanzadas
En esta clase se habla acerca de los siguientes temas
- Ciudadanos de primera clase: Funciones que se son variables
- Arrow funtion: 
    - retorn implicito: no requiere de una funcion completa con un return completo
    - this lexico: forma de uso del this en una funcion dependiendo del contexto
- IIFE (Expresión de Función Invocada Inmediatamente): Funciones que se ejecutan al iniciar codigo, hay que tener cuidado pues estas usan ; 
- parametros rest: Este sirve para cuando no saves el total de parametros y debes realizar alguna operacion
- Spread: Aqui expandimos los elementos de un array, este su funcion es desempaquetar un arreglo y realizar operaciones en base a ello
- Closures: Es cuando una funcion interna a una funcion, accede a variables de las variables externas
- Recursividad: Funcion que se puede llamar a si misma
- Funciones parciales: Esta divide una funcion con varios parametros en funcion mas pequeñas que recibe partes de los parametros y retornan una nueva funcion que espera los nuevos parametros
- Curryng: Esta funcion permite tomar una funcion a la vez para ir desglosando la funcion con el fin de dar mas margen de entrada
Callbacks: Es cuando pasamos una funcion a otra funcion como argumento para personalizar el comportamiento

## Estructuras avanzadas
Estructuras de datos con mas informacion, acerca de como pueden ser usadas de maner mas profesional, se describe en las siguientes:
- Estructuras funcionales
    - Forech, metodo que puede recorrer un for con mejor control y mas claridad
    - Map: Sera un array con una funcion en cada uno de los elementos del arrray
    - filter: Realizara la operacion de map, de dar funciones por array pero filtrandobajo una logica concedida
    - reduce: Se realizara una funcion reductora sobre cada elemento del array pero con la particularidad de que regresara un numero como el todo de lo ingresado en array
- Estructuras manipulables
    - Flat: Este aplanara un array que tenga una profundidad especifica
    - ordenacion: metodos de ordenacion
    - reverse: Un sort al reves, la diferencia es que esta es una mutacion void, entonces con solo aplicarse basta para poder llevar adelante la operacion
- Buesqueda en estructuras
    - Includes: Esta arroja aquello que incluya
    - find: En base a una operacion por array busca un numero bajo un cierto argumento
- Sets avanzados: Revision de operaciones de conjuntos
    - Eliminacion de repetidos: En este se puede usar un spread para unir los sets y quitar repetidos mostrandolos en forma de array
    - Union: este ingresa ambos sets y los tranforma en un array para unirlos sin duplicaciones
    - diferencia: Ingresa lo que no esta de un set
    - conversin de set: Se pueden convertir los sets en arrays usando el spread ...
    - Iteracion: Se puede iterar por elementos usando los foreach