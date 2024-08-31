
// 1. Crea un función que utilice error correctamente
let error = (a,b) => {
  if (a==0 || b==0){
    console.error("Error se esta tratando de multiplicar por cero")
  }
  else{
    return a*b
  }
}
error(0,4)

// 2. Crea una función que utilice warn correctamente
let warn = (message) => {
  if (message=="secreto"){
    console.warn("ADVERTENCIA esta funcion es super secreta")
  }
  else{
    console.log(message)
  }
}
warn("secreto")

// 3. Crea una función que utilice info correctamente
let info = () => {
  console.info("para ir al cine siga a la derecha tres cuadras, a la izquierda 4 cuadras, etc...")
}
info()

// 4. Utiliza table
let table = [
  {Nombre:"Gabriel", Edad:76, Profesion:"Bombero"},
  {Nombre:"German", Edad:51, Profesion:"Doctor"},
  {Nombre:"Daniel", Edad:26, Profesion:"Ingeniero"}
]
console.table(table)

// 5. Utiliza group
console.group("Videojuegos")
console.log("Final Fantasy")
console.log("Super Mario Galaxy")
console.log("The legend of zelda")
console.log("Halo")
console.log("Gears of War")
console.groupEnd()

// 6. Utiliza time
console.time("tiempo_ejecucion")
let x
for (i=0;i<5738573;i++){
  x+=1
}
console.timeEnd("tiempo_ejecucion")

// 7. Valida con assert si un número es positivo
let number=-6
console.assert(number>=0, "El numero es negativo")

// 8. Utiliza count
let n=7
for (i=0;i<n;i++){
  console.count("Golpe")
}

// 9. Utiliza trace
console.trace("seguimiento, programa")

// 10. Utiliza clear
console.clear()