let mapa = new Map()
console.log(mapa)

mapa = new Map([
    ["nombre", "Dove"],
    ["email", "dove@outlook.com"],
    ["edad", 23]
])

console.log("=======================================")
console.log(mapa)

//Metodos de uso
// Set
console.log("=======================================")
mapa.set("Alias", "johny")
console.log(mapa)

console.log("=======================================")
mapa.set("Alias", "doverin")
console.log(mapa)
 
// get
console.log("=======================================")
console.log(mapa.get("nombre"))

// has
console.log("=======================================")
console.log(mapa.has("altura"))

// keys
console.log("=======================================")
console.log(mapa.keys())

// values
console.log("=======================================")
console.log(mapa.values())

//delete
console.log("=======================================")
mapa.delete("Alias")
console.log(mapa)

// clear
console.log("=======================================")
mapa.clear()
console.log(mapa)
