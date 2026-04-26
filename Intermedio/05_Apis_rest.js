// Consumo de API
fetch('https://jsonplaceholder.typicode.com/posts/creoqeuacanoes')
    .then(response => {
        //transforma la respuesta en JSON
        return response.json()
    })
    .then(data => {
        // Procesa los datos
        console.log(data)
    })
    .catch(error => {
        // Captura errores
        console.log("Error", error)
    })

