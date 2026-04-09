# Explicacion de datos en clases
Aqui se explicara las bases para tener presente lo que se hace y porque se hace, o bien que se quiere llegar 

## Tipeo
Los tipos son dinámicos. En JavaScript tiene tipado dinámico. La variable no tiene tipo, el valor tiene tipo. Puedes cambiar de tipo cuando quieras

Declaracion de variables: Existen 3 formas de la declaracion, las cuales son

* let: son variables que cambias y las mas usadas
* const: Valores que no cambian
* var: La forma vieja de declarar, no se recomienda usar

## Comparaciones
Los comparaios con == es igualdad abstracta, esto *convierte* tipos de manera automatica, causando resultados erroneos.

Por otro lado la igualdad estricta es === ya que no convierten los tipos, son iguales solo si son del mismo tipo y valor, lo que permite la correctacomparacion. 

Para las comparaciones se usan === y !==

## Truthy y Falsy 
Aqui cualquier valos puede ser verdadero o falso segun el contexto, en la clase TF.js

Estos se ingresan como vacios o llenos o si usan unvalor null correcto como el NaN.

## Funciones
Las funciones son ciudadanos de primera clase, ya que estas viven dentro de las clases que son metodos. En JS, las funiones con valores como cualquier otro las puedes guardar en variables y pasarlas como argumentos y retornoarnlas, se veran algunos ejemplos en la clase de funciones.

Se trataran de sacar a relucir mejores formas de trabajac como los son arrows para la continuidad de las actividades y darmas limpieza a las cosas.

## Ambito
Las llaves no siempre crean ambitos nuevos, es decir que no necesita un bloque completo para trabajar. Es decir que despues de las llaves si puede seguir existiendo los ingresos de variables, se explica en la clase de ambito.js

## Objetos
En JS se pueden crear de manera directa objetos en vez de necesitar una clase completa

