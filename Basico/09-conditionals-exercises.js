// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Gabriel"
let verificacion = nombre == "Gabriel" ? "Gabriel Gonzalez" : "No eres Gabriel"
console.log(verificacion)


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "Daniel"
let contraseña = 12345
let comprobacion = usuario=="Daniel" && contraseña==12345 ? "Bienvenido, la clave de la cripto es 534154454454" : "Error su usuario o contraseña es incorrecto"
console.log(comprobacion)

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0
if (numero > 0){
  console.log("el numero es positivo")
}else if(numero < 0){
  console.log("El numero es negativo")
}else{
  console.log("El numero es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 8
let voto = edad>=18 ? "Puede votar, es mayor de edad" : `No puede votar es menor de edad faltan ${18-edad} años para ser adulto`
console.log(voto)

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let edad02 = 15
let comp = edad02>=18 ? "es mayor de edad" : "es menor de edad"
console.log(comp)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 5
if (mes==0){
  console.log("Enero")
}else if (mes==1){
  console.log("Febrero")
}else if (mes==2){
  console.log("Marzo")
}else if (mes==3){
  console.log("Abril")
}else if (mes==4){
  console.log("Mayo")
}else if (mes==5){
  console.log("Junio")
}else if (mes==6){
  console.log("Julio")
}else if (mes==7){
  console.log("Agosto")
}else if (mes==8){
  console.log("Septiembre")
}else if (mes==9){
  console.log("Octubre")
}else if (mes==10){
  console.log("Noviembre")
}else if (mes==11){
  console.log("Diciembre")
}else{
  console.log("Error numero de mes equivocado")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes==0){
  console.log("Este mes tiene 31 dias")
}else if (mes==1){
  console.log("Este mes tiene 28 dias")
}else if (mes==2){
  console.log("Este mes tiene 31 dias")
}else if (mes==3){
  console.log("Este mes tiene 30 dias")
}else if (mes==4){
  console.log("Este mes tiene 31 dias")
}else if (mes==5){
  console.log("Este mes tiene 30 dias")
}else if (mes==6){
  console.log("Este mes tiene 31 dias")
}else if (mes==7){
  console.log("Este mes tiene 31 dias")
}else if (mes==8){
  console.log("Este mes tiene 30 dias")
}else if (mes==9){
  console.log("Este mes tiene 31 dias")
}else if (mes==10){
  console.log("Este mes tiene 30 dias")
}else if (mes==11){
  console.log("Este mes tiene 31 dias")
}else{
  console.log("Error numero de mes equivocado")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 3
switch (idioma) {
  case 0: console.log("Hola a todos")
    break
  case 1: console.log("Hi everyone")
    break
  case 2: console.log("Bonjour a tous")
    break
  case 3: console.log("大家好")
    break
  case 4: console.log("всем привет")
    break
  default: console.log("seleccione otro numero que corresponda un idioma")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes){
  case 0:
    console.log("Enero")
    break
  case 1:
    console.log("Febrero")
    break
  case 2:
    console.log("Marzo")
    break
  case 3:
    console.log("Abril")
    break
  case 4:
    console.log("Mayo")
    break
  case 5:
    console.log("Junio")
    break
  case 6:
    console.log("Julio")
  case 7:
    console.log("Agosto")
    break
  case 8:
    console.log("Septiembre")
    break
  case 9:
    console.log("Octubre")
    break
  case 10:
    console.log("Noviembre")
    break
  case 11:
    console.log("Diciembre")
    break
  default:
    console.log("Error numero de mes equivocado")
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes){
  case 0:
    console.log("Este mes tiene 31 dias")
    break
  case 1:
    console.log("Este mes tiene 28 dias")
    break
  case 2:
    console.log("Este mes tiene 31 dias")
    break
  case 3:
    console.log("Este mes tiene 30 dias")
    break
  case 4:
    console.log("Este mes tiene 31 dias")
    break
  case 5:
    console.log("Este mes tiene 30 dias")
    break
  case 6:
    console.log("Este mes tiene 31 dias")
  case 7:
    console.log("Este mes tiene 31 dias")
    break
  case 8:
    console.log("Este mes tiene 30 dias")
    break
  case 9:
    console.log("Este mes tiene 31 dias")
    break
  case 10:
    console.log("Este mes tiene 30 dias")
    break
  case 11:
    console.log("Este mes tiene 31 dias")
    break
  default:
    console.log("Error numero de mes equivocado")
}