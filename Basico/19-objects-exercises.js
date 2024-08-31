
// 1. Crea un objeto con 3 propiedades
let table = {
    color: "green",
    texture: "smooth",
    material: "wood"
  }
  
  // 2. Accede y muestra su valor
  console.log(table.material)
  
  // 3. Agrega una nueva propiedad
  table["price"]=19.99
  
  // 4. Elimina una de las 3 primeras propiedades
  delete table.color
  delete table.texture
  delete table.material
  
  // 5. Agrega una función e invócala
  table["Funcion"] = function () {console.log("Hola mundo")}
  console.log(table.Funcion())
  
  // 6. Itera las propiedades del objeto
  for (value in table){
    console.log(value + ":" + table[value])
  }
  
  // 7. Crea un objeto anidado
  let videogame={
    price:66.99,
    genre:"action",
    creators:{
      company:"Sylver.inc",
      director:"Leonardo DiCaprio"
    }
  }
  
  // 8. Accede y muestra el valor de las propiedades anidadas
  console.log(videogame.creators.director)
  
  // 9. Comprueba si los dos objetos creados son iguales
  console.log(videogame==table)
  
  // 10. Comprueba si dos propiedades diferentes son iguales
  console.log(videogame.price==table.price)