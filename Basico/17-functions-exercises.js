// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a,b){
    return a+b
  }
  console.log(suma(5,8))
  // 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
  let max=0
  function mayor(array) { 
    for(let i=0; i<array.length; i++){
      if (max<array[i]){
        max=array[i]
      }
    }
    return max
  }
  let myArray = [5,34,63,9,7,46,85,97,3,86,3,8,85,1,88,4,8,48]
  console.log(mayor(myArray))
  
  // 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
  let vocals = 0
  let vocales = (string) => {for(value of string){if (value=="a"||value=="e"||value=="i"||value=="o"||value=="u"){vocals++}}return vocals}
  const frase = "Hola a todos esta es mi frase auuu"
  console.log(`El numero de vocales en su frase es: ${vocales(frase)}`)
  
  // 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
  let new_array=[]
  let mayus = (array) => {for(value of array){new_array.push(value.toUpperCase())}return new_array}
  const lista = ["hola", "como", "estan", "todos"]
  console.log(mayus(lista))
  
  // 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
  let primo = (numero) => {if (numero == 0 || numero == 1){return false}for (i=2; i<=numero/2; i++){if (numero%i==0){return false}}return true}
  let number = 15
  console.log(primo(number))
  
  // 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
  let new_array_2=[]
  let adjuntar = (array_1, array_2) => {for (value of array_1){for (value_2 of array_2){if (value==value_2){new_array_2.push(value_2)}}}return new_array_2}
  const lst_1 = [9,7,4,84,77,1,5,9,55]
  const lst_2 = [2342,5865,9657,1,55,4,9]
  console.log(adjuntar(lst_1,lst_2))
  
  // 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
  let sumita = 0
  let sumAll = (numeros) => {for (value of numeros){if ((value%2)==0){sumita+=value}}return sumita}
  let val_num = [42, 17, 93, 58, 24, 76, 35, 89, 12, 67]
  console.log(sumAll(val_num))
  
  // 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
  let cuadrado = []
  let elevar = (nu) => {for (value of nu){cuadrado.push(value**2)}return cuadrado}
  let ran_num = [53, 28, 91, 64, 37, 85, 19, 72, 45, 10]
  console.log(elevar(ran_num))
  
  // 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
  let inv = ""
  let inverso = (niu) => {for (i=niu.length-1; i>=0;i--){inv+=niu[i]}return inv}
  let phrase = "Hola mundo"
  console.log(inverso(phrase))
  
  // 10. Crea una función que calcule el factorial de un número dado
  let multi = 1
  let facto = (numero_66) => {for(i=numero_66; i>=1; i--){multi*=i}return multi}
  let jfnf = 9
  console.log(facto(jfnf))
  