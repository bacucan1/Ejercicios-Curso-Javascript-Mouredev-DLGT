
// 1. Captura una excepción utilizando try-catch
let a
try{
  console.log(a.hola)
} catch{
  console.log("Esto es un error 123")
}

// 2. Captura una excepción utilizando try-catch y finally
let c
try{
  console.log(c.hola)
} catch{
  console.log("Esto es un error 7598")
} finally{
  console.log("Esto es un mensaje de prueba")
}

// 3. Lanza una excepción genérica
let b
try{
  console.log(b.hola)
} catch(error){
  console.log("Esto es un error 123 "+error)
}

// 4. Crea una excepción personalizada

let dospordos = (a,b) => {
  if (a==2 && b==2){
    throw new Error("Error personalizado")
  }
  return a*b
}

// 5. Lanza una excepción personalizada
try{
  dospordos(2,2)
} catch(error){
  console.log("Esto es un error 123 "+error)
}

// 6. Lanza varias excepciones según una lógica definida
let errorescom = (a,b) => {
  if (a==2 && b==2){
    throw new Error("Error personalizado")
  }
  if (typeof a == "number" || typeof b == "number"){
    throw new TypeError("Error prohibido multiplicar numero")
  }
  return a*b
}
try{
  errorescom(2,2)
} catch(error){
  console.log("Esto es un error 9859 "+error)
}

// 7. Captura varias excepciones en un mismo try-catch
try{
  number=int(input("di tu numero"))
}catch (Error){
  if (Error instanceof TypeError) {
    console.log("Se ha producido un error de tipo:", Error.message)
  } else if (Error instanceof SyntaxError) {
    console.log("Se ha producido un error de syntaxis:", Error.message)
  } else{
    console.log("Se ha producido un error general:", Error.message)
  }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let lista=[3,4,5,6]
try{
  for (i=0;i<7;i++){
    lista[i]=float
  }  
}catch(error){
  console.log("hola esto es un error "+ error.message)
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
let map={
  nombre:"Jaime",
  Apellido:"Gutierrez",
  Edad:17
}
let verificacion = (map) => {
  if (map.Edad<=18){
    throw new Error("Error usted tiene menos de 18 años")
  } else{
    console.log("bienvenido")
  }
}
verificacion(map)

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

let intentos = (x,i) =>{while (x>0){
    console.info("Bienvenido a la funcion para convertir un int a string")
    try{
        i=entero
    }
    catch{
        console.error(`Error le queda solo ${x-1} intentos`)
        return intentos(x-1,i)
    }
}}

intentos(10,"Hola")