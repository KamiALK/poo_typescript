import { clase_publica } from "./clases/publica.js";
import { clase_privada } from "./clases/privada.js";



// publica
const clase_publica_obj = new clase_publica;
// aqui quiero obtener el valor de el parametro nombre
console.log(clase_publica_obj.nombre)
console.log(clase_publica_obj.saludar())


// privada
const clase_privada_obj = new clase_privada;
console.log(clase_privada_obj.saludar());


// utilice in getter para acceder a esa variable
// porque de otro modo tendria un error  por ser una propiedad privada

//getter
console.log(clase_privada_obj.nombre);

//setter
clase_privada_obj.nombre = "juanito";
console.log(clase_privada_obj.nombre);
console.log(clase_privada_obj.saludar())

// vamos a revisar protegido
class clase_protegida extends clase_publica {
  public apellido: string;
  constructor(name: string, second_name: string, apellido: string,) {
    super(name, second_name);
    this.apellido = apellido;
  }
}










