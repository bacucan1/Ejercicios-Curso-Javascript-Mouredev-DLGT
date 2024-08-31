// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let numeros = [1,2,3,,5,6,7]
let [num_1,num_2]=numeros

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [num_3,num_4,num_5,num_6="predeterminado"]=numeros

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let superhero = {
  power:"fly",
  armor:true,
  color:"red"
}
let {power,armor,color}=superhero
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnala a nuevas variables con nombres diferentes
let {power:poder,armor:armadura,color:supercolor}=superhero

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let estudiantes_uni={
  total:7678,
  institucion:{
    nombre:"La salle",
    Acreditacion:"Alta calidad",
    Sede:"Centro"
  }
}
let {institucion:{nombre:nom_uni},institucion:{Acreditacion:Acre_uni}}=estudiantes_uni


// 6. Usa propagación para combinar dos arrays en uno nuevo
let lst=[1,2,34,653,3575,856]
let lst_1=[6355635,675,22,66756,1413,7655]
let lst_final=[...lst,...lst_1]
console.log(lst_final)

// 7. Usa propagación para crear una copia de un array
let lst_copy = [...lst_1]
console.log(lst_copy)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let table = {
  color: "green",
  texture: "smooth",
  material: "wood"
}
let videogame={
  price:66.99,
  genre:"action",
  creators:{
    company:"Sylver.inc",
    director:"Leonardo DiCaprio"
  }
}
let new_obj={...table,...videogame}
console.log(new_obj)

// 9. Usa propagación para crear una copia de un objeto
let copy_obj={...videogame}
console.log(copy_obj)

// 10. Combina desestructuración y propagación
let array_1=[1,2,3,4]
let array_2=[5,6,7,8,9]
let [n1,n2,n3,n4,n5,n6,n7,n8,n9]=[...array_1,...array_2]
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(n5)
console.log(n6)
console.log(n7)
console.log(n8)
console.log(n9)