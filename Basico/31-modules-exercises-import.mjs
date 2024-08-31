// 4. Importa una función
import { Elevado } from "./31-modules-exercises-export.mjs";
console.log(Elevado(5,2))

// 5. Importa una constante
import { Message } from "./31-modules-exercises-export.mjs";
console.log(Message)

// 6. Importa una clase
import { Student } from "./31-modules-exercises-export.mjs";
let Estudiante_generico=new Student(8,"Miguel")
console.log(Estudiante_generico)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import defaultImport from "./31-modules-exercises-export.mjs"
console.log(defaultImport("Alejandro"))

//import defaultImport from "./31-modules-exercises-export.mjs"
//console.log(defaultImport)

//import defaultImport from "./31-modules-exercises-export.mjs"
//let clase = new defaultImport(9,"Luffy")

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { cuenta,pi,elevacion } from "./31-modules-exercises-export-9/31-modules-exercises-export-9.mjs";
cuenta()
console.log(pi)
let elev=elevacion.Elevado(9,2)
console.log(elev)