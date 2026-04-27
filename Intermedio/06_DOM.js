// Metodos basicos
// Metodo por elemento
const elemento =  document.getElementById("id")

// Metodo por clases con los elementos que carguen
const elementos = document.getElementsByClassName("class")

// Metodo por collecion de nombres
const elementosTag = document.getElementsByName("tag")

// Metodos mas modernos
// Devuelve un elemento
document.querySelector(".parrafo")
// Devuelve la coleccion
document.querySelectorAll(".parrafo")

// Manipulacion de elementos
const titulo = document.getElementById("titulo")
titulo.textContent = "hola "

const contenedor = document.querySelector(".constenedor")
contenedor.innerHTML = "<p>Nuevo contenido </p>"

// Modificacion de atributos
// Obtencion de atributo
const link = document.querySelector("a")
const URL = link.getAttribute("href")

// Establecer el atributo
link.setAttribute("href", "https://Nuevo_link.com")

// Comprobacion de atributos
const tiene_liga = link.hasAttribute("target") //Puede dar true o false 

// Eliminacion de atributos
link.removeAttribute("target")