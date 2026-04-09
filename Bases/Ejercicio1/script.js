// Seleccionar elementos del HTML
const titulo = document.getElementById('titulo');
const boton = document.getElementById('miBoton');
const mensaje = document.getElementById('mensaje');

// Cambiar el texto
titulo.textContent = 'Cambié el título desde JavaScript';

// Reaccionar a eventos
boton.addEventListener('click', function() {
    mensaje.textContent = '¡Botón clickeado! La hora es: ' + new Date().toLocaleTimeString();
});

// También podemos usar arrow function
boton.addEventListener('click', () => {
    console.log('Alguien hizo clic');
});