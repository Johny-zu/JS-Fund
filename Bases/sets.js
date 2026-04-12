let myset = new Set()
console.log(myset)

myset = new Set(["dove", "pina", "Zu", 37, true, ".com"])
console.log(myset)

// Metodos comunes
// 1. add y delete
myset.add("nor")
console.log(myset)

myset.delete("nor")
console.log(myset)

// has
console.log(myset.has(".com"))

// zise
console.log(myset.size)

// convertir el set a array
let arreglo = Array.from(myset)
console.log(arreglo)
