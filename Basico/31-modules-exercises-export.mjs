// 1. Exporta una función
export function Elevado(A,B){
    return A**B
}

// 2. Exporta una constante
export const Message="Hola a todos"

// 3. Exporta una clase
export class Student {
    constructor(grade,name){
      this.grade = grade
      this.name = name
    }
    Juega(){
      console.log("El estudiante juega en el parque")
    }
  }

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function saludo(nombre){
    return console.log(`Saludos ${nombre}`)
}

//export default const Horas_trabajadas = 39

/*export default class Student1 {
    constructor(grade,name){
      this.grade = grade
      this.name = name
    }
    Estudia(){
      console.log("El estudiante estudia")
    }
  }
*/



