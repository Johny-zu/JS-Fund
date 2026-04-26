// Consumo de API
fetch('https://jsonplaceholder.typicode.com/posts/Aquino')
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

// Async/await
async function getPosts(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data)
    } catch(error){
        console.log("Error: ", error)
    }
}

getPosts()