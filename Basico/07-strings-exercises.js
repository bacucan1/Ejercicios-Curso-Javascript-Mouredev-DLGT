// 1. Concatena dos cadenas de texto
let concatenacion = "Hola mundo" + "Me gusta los videojuegos"

// 2. Muestra la longitud de una cadena de texto
console.log(concatenacion.length)

// 3. Muestra el primer y último carácter de un string
console.log(concatenacion[0])
console.log(concatenacion[33])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(concatenacion.toUpperCase())
console.log(concatenacion.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let multilinea = `hola mundo
a cuanto esta el
pan con queso`

// 6. Interpola el valor de una variable en un string
const mensaje = `haz recibido un nuevo mensaje ${multilinea}`
console.log(mensaje)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let guion = mensaje.replace(/ /g,"-")
console.log(guion)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(mensaje.indexOf("recibido"))

// 9. Comprueba si dos strings son iguales
let s_1 = "Hola MUNDO"
let s_2 = "hola mundo"
console.log(s_1===s_2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log((s_1.length)==(s_2.length))