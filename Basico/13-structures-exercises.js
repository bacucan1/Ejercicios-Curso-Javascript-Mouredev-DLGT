// 1. Crea un array que almacene cinco animales
let myArray = ["Perro", "Gato", "Conejo", "Jirafa", "Mapache"]
console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final
myArray.push("Liebre")
myArray.unshift("Colibri")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2,2)
console.log(myArray)

// 4. Crea un set que almacene cinco libros
let mySet = new Set(
  ["Harry Potter", "El señor de los anillo", "Prince of persia", "Antología de cuentos de terror de hp lovecraft", "1942"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("Aladin")
mySet.add("Harry Potter")
console.log(mySet)

// 6. Elimina uno concreto a tu elección
mySet.delete("1942")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map ([
  [1, "Enero"], [2, "Febrero"], [3, "Marzo"], [4, "Abril"], [ 5, "Mayo"], [ 6, "Junio" ], [ 7, "Julio"], [ 8, "Agosto" ], [ 9, "Septiembre" ], [ 10, "Octubre" ], [ 11, "Noviembre" ], [ 12, "Diciembre" ]
])
console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.has(5))
console.log(myMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano 
let mesesDeVerano = ["Junio", "Julio", "Agosto"]
myMap.set("Meses de verano", mesesDeVerano)
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray2 = ["Hola", 24, "mundo", 82]
let mySet2 = new Set(myArray2)
let myMap2 = new Map([["array,set", mySet2]])
console.log(myMap2)