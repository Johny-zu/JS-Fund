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
- Mapas avanzados
    - Iteracion: Iteracion de valores en mapa
    - conversion: Se puede converitr los maps en otro tipo de objetos

## Objetos avanzados
Conceptos avanzados de orientada a objetos
- Prototipos Mecanismo con el que los objetos pueden heredar propiedades y funciones de otros objetos
    - Herencia: Maneja la baja de información de objeto padre como un prototipo de objeto
- Metodos estaticos y de instancia
    - Estaticos: Estos son construidos desde un molde de un objeto como constructores
    - Avanzados: 
        - Assign: Esta puede convinar objetos
        - keys, values, entries: metodos que permiten obetener claves, valores de un objeto

## Clases avanzadas
El concepto en este es que la buena practica de construir objetos es por medio de una clase, aunque con el paso el tiempo los metodos como los prototipos sigen existiendo y JS tiene la flexibilidad de poder hacer mas con esos. lo cual es ingreso de nuevas caratersiticas fuera de la clase insertandolas.
Algunas de las cosas por ver sobre clases serian las siguientes:
- Abstraccion: son clases que no se pueden instancias directamente 
- Polimorfismo: Clase o funcion que permite cambiar el comportamiento de una clase base
- mixins: Esto da composision sobre la herencia, permite la combinacion de metodos sin necesitar por completo de la herencia
- singleton: Esta clase busca solo poder instanciarse una vez, es decir que sin importar lo que hagan con la clase, esta no pueda cambiar
- Symbol: Tipo de dato primitivo que no permite el cambio
- instanceof: Comprobaciones de instancias 
- create: Creacion en base al prototipó de un objeto
- proxy: Intercepta y personaliza el comportamiento de estas clases para seguridad y pruebas de clase mediante proxy

## Asincronia
Cuando JS ejecuta codigo, este se ejecuta en un solo hilo donde va interpretando linea a linea y ejecutando de esa forma. Entonces esta este modulo es para generar mecanismos capaces de generar un multihilo para que las actividades de una pagina no se queden congeladas. Para la programacion asincrona se sigue la siguientes estructuras
- Event loop: Estos bucles de eventos interpreta como debe ejecutar los eventos en un codigo para darle un seguimiento correcto y pueda hacer multitask de forma en la que el programa no se vea afectado, maneja los siguiente componentes
    - call stack(pila de ejecucion)
    - Web apis(Apis del navegados o node.js): setTimeout()...
    - task queue(Colas de tareas) y microtaskQueue
- Promesas: Procesos que se piensan acabar de forma en la que estas puedan o no puedan realizarse pero haciendo el proceso dependiendo de los resultados de de la operacion en marcha
- Async/await: Funcion asincrona que espera hasta que una promesa este resuleta, y despued de un tiempo pactado, esta comenzara a correr

## Apis rest
Apis que usan para funcionar el protocolo de htpp y URLs y estas se trabajan con json, estos son objetos para intercambiar datos 
- HTTP: Protocolos de transferencia de datos, estos usan metodos como
    - get: Este toma los datos de x URL y el json nos dara la informacion
    - post: Este nos ayuda a enviar datos para crear nuevos recursos(EJ: crear usuario)
    - put: Sirve para enviar datos a un servidor, pero esta ves para modificar un recurso
    - delete: Solicita al servidor eliminar un recurso
- Codigos de respuesta HTTP: Codigo que hace que cuando haces cualquier peticion mediante HTTP, solicitando los metodos comentados, hace que el servidos debe de ir respondiendo algo, los cuales serian los siguientes:
    - 200: Una respuesta de OK, esta es un exitoso
    - 201: Una respuesta de OK, detallada sobre lo que hizo
    - 400: Error por parte del usuario
    - 404: Error de no hallado
    - 500: Error del lado servidor
- Informacion de uso de APIS: https://jsonplaceholder.typicode.com/
- Herramientas para uso de POST:
    - Postman: https://www.postman.com/ => Sirve como una UI que te ayuda a generar las peticiones sin codigo
    - Apidog: https://apidog.com/es/ => Ayuda a creacion de apis documentacion, ademas lo mismo que postman
    - Extension en VSC: Thunder client => es un cliente HTTP que lo tienes en una extension 

## Estructuras DOM
Document objetct module, este esta relacionado con la programacion web, con el front end. Este hace que JS pueda interactuar con una web, el cual por lo general carga HTML y CSS. Este da interaccion en las paginas web, por ejemplo, hace que los botones jalen, los inputs reciban o los eventos se accionen.

El DOM es una representacion de forma de arbol de todos los elementos que tenemos en la web, es la estructura que hace referencia a todo lo que esta en la pagina y con esta referencia puede acceder a cada elemento para hacer interactuable la pagina. 
