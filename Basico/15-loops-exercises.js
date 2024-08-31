// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i=0; i<20; i++){
    console.log(i+1)
  }
  // 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
  i=1
  let suma = 0
  do {
    suma=suma+i
    i++
  } while (i<=100)
  console.log(suma)
  
  // 3. Crea un bucle que imprima todos los números pares entre 1 y 50
  i=0
  while (i<50){
    if (((i+1)%2)==0){
      console.log(i+1)
    }
    i++
  }
  
  // 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
  let myArray = ["Daniel", "Gabriel", "Fernando", "Mauricio", "Carlos"]
  for (let value of myArray){
    console.log(value)
  }
  
  // 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
  let count = 0
  let cadena = "Hola mundo como estan todo bien todo correcto"
  for (let value2 of cadena){
    if (value2=="a" || value2== "e" || value2=="i" || value2=="o" || value2=="u"){
      count++
    }
  }
  console.log(count)
  
  // 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
  let multi = 1
  let numbers = [4, 5, 9, 6, 7, 2, 1, 4]
  for (let valor of numbers){
    multi *= valor 
  }
  console.log(multi)
  
  // 7. Escribe un bucle que imprima la tabla de multiplicar del 5
  i=1
  while (i<=10){
    console.log(`5 * ${i} = ${5*i}`)
    i++
  }
  
  // 8. Usa un bucle para invertir una cadena de texto
  let invert = ""
  let strings = "Buenas tardes, buenas noches"
  for (i = strings.length-1; i>=0; i--){
    invert += strings[i]
  }
  console.log(invert)
  
  // 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
  let aux = [0]
  let sum=1
  console.log(0)
  for (i=0; i<10; i++){
    aux.push(sum)
    console.log(sum)
    sum=aux[i+1]+aux[i] 
  }
  
  // 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
  let numero2 = [10,7,2,5,75,12,45,2,3,1,45,65,98,72,11,3,1,5,7,45,79]
  let mayor10 = []
  for (value of numero2){
    if (value>=10)
      mayor10.push(value)
  }
  console.log(mayor10)