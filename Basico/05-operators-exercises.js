// 1. Crea una variable para cada operación aritmética
let suma = 5+10
let resta = 8-9
let mult = 5*6
let div = 4/7
let modulo = 2%4
let expo = 6**8
let increm = 8
increm++
let decrem = 76
decrem--


// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas
let asign_1 = 5
asign_1 += decrem
let asign_2 = 7
asign_2 *= expo
let asign_3 = 9
asign_3 -= suma
let asign_4 = 76
asign_4 /= resta
let asign_5 = 10
asign_5 %= mult
let asign_6 = 6
asign_6 **= div

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(5<8)
console.log(10<=11)
console.log(6==6)
console.log(89>12)
console.log(888>=1)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(8==9)
console.log(66==="66")
console.log(98<88)
console.log(15>36)
console.log(24>=29)

// 5. Utiliza el operador lógico and
console.log(8>78 && 42<84)

// 6. Utiliza el operador lógico or
console.log(7>=76 || 17==17)

// 7. Combina ambos operadores lógicos
console.log(15<64 && 8>2 || 10===15)

// 8. Añade alguna negación
console.log(!(15<64 && 8>2 || 10===15))

// 9. Utiliza el operador ternario
const mayordeedad = false
mayordeedad ? console.log("es mayor de edad") : console.log("no es mayor de edad")

// 10. Combina operadores aritméticos, de comparáción y lógicas
const prueba = (5+2)>(4-8)||(8**9)>=(6/56)
console.log(prueba)