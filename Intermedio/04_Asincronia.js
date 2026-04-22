console.log("Inicio")

for(let i = 0; i < 100; i++){}

console.log("fin")

// Event Loop (Bucle de eventos)

// Componentes del Event Loop:
// 1. Call Stack (Pila de ejecución)
// 2. Web APIs (APIs del navegador) o Node.js:
// 3. Task Queue (setTimeout()) y Microtask Queue (Promesas)

// Flujo del Event Loop:
// 1. Call Stack
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operación termina -> La coloca en Task Queue o Microtask Queue
// 4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// Código asíncrono

// - Callbacks
console.log("inicio")
setTimeout(() =>{
    console.log("Esto se ejecuta")
}, 2000)
console.log("Fin")

function paso1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback()
    }, 1000)
}

// - Callbacks hell
function paso2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado")
        callback()
    }, 1000)
}

function paso3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado")
        callback()
    }, 1000)
}

paso1(() => {
    paso2(() => {
        paso3(() => {
            console.log("Todos los pasos completados")
        })
    })
})

// promesasa
const promesa = new Promise((resolver, rechazo) => {
    setTimeout(() =>{
        const ok = true
        if(ok){
            resolver("Operacion existosa")
        } else{
            rechazo("Se ha producido un error")
        }
    }, 3000)
})

promesa
    .then(resultado => {
        console.log(resultado)
    })  
    .catch(error => {
        console.log(resultado)
    }) 

function paso1promesa() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1 con promesa completado")
            resolve()
        }, 1000)
    })
}

function paso2promesa() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2 con promesa completado")
            resolve()
        }, 1000)
    })
}

function paso3promesa() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3 con promesa completado")
            resolve()
        }, 1000)
    })
}

paso1promesa()
    .then(paso2promesa)
    .then(paso3promesa)
    .then(() => {
        console.log("Todos los pasos con promesa completados")
    })