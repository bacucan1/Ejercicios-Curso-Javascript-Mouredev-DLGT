// 1. Crea una clase que reciba dos propiedades
class Student {
    constructor(grade,name){
      this.grade = grade
      this.name = name
    }
    Juega(){
      console.log("El estudiante juega en el parque")
    }
  }
  
  // 2. Añade un método a la clase que utilice las propiedades
  class Student1 {
    constructor(grade,name){
      this.grade = grade
      this.name = name
    }
    Estudia(){
      console.log("El estudiante estudia")
    }
  }
  
  // 3. Muestra los valores de las propiedades e invoca a la función
  let estudiante_1 = new Student1(8, "Daniel")
  console.log(estudiante_1)
  estudiante_1.Estudia()
  
  // 4. Añade un método estático a la primera clase
  class elevacion{
    static Elevado(a,b){
      return a**b
    }
  }
  console.log(elevacion.Elevado(5,2))
  
  // 5. Haz uso del método estático
  class modulo{
    static Modulo(a,b){
      return a%b
    }
  }
  console.log(modulo.Modulo(20,15))
  
  // 6. Crea una clase que haga uso de herencia
  class universitario extends Student{
    constructor(name,grade,Facultad,semestre){
      super(name,grade)
  
      this.Facultad=Facultad
      this.semestre=semestre
      
    }
  }
  
  let estudiante_2=new universitario("Daniel",11,"UniAndes",4)
  console.log(estudiante_2)
  
  // 7. Crea una clase que haga uso de getters y setters
  class estudiante_3{
    
    constructor(nombre,edad){
      this.nombre=nombre
      this.edad=edad
    }
    get nombre(){
      return this.nombre
    }
    set edad(edad){
      this.edad=edad
    }
  }
  
  // 8. Modifica la clase con getters y setters para que use propiedades privadas
  class estudiante_4{
    #nombre
    #edad
    constructor(nombre,edad){
      this.#nombre=nombre
      this.#edad=edad
    }
    get nombre(){
      return this.#nombre
    }
    set edad(edad){
      this.#edad = edad
    }
  }
  
  // 9. Utiliza los get y set y muestra sus valores
  let persona_6 = new estudiante_4("Daniel",18)
  console.log(persona_6.nombre)
  persona_6.edad = 58
  
  // 10. Sobrescribe un método de una clase que utilice herencia 
  class universitario_2 extends Student{
    constructor(name,grade,Facultad,semestre){
      super(name,grade)
      this.Facultad=Facultad
      this.semestre=semestre
    }
    Juega(){
      console.log("El estudiante juega en el celular")
    }
  }
  
  let hola = new universitario_2("Juan",8,"Uniandes",7)
  console.log(hola)
  hola.Juega()