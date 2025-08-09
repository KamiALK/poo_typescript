
import { clase_protegida } from './protegida';

// creando instancia de objeto

// const clase_protegida_uno = new clase_protegida('kamilo', 'almanza');
// clase_protegida_uno.saludar


// // clase abstracta de java
// abstract class Animal {
//     string nombre;
//
//   // Constructor
//   public Animal(String nombre) {
//   this.nombre = nombre;
// }
//
//   // Método abstracto (obligatorio implementarlo en las hijas)
//   public abstract void hacerSonido();
//
//   // Método normal (opcional sobrescribirlo)
//   public void dormir() {
//   System.out.println(nombre + " está durmiendo");
// }
// }
//
// Clase abstracta
abstract class Animal {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  // Método abstracto
  abstract hacerSonido(): void;

  // Método normal
  dormir(): void {
    console.log(`${this.nombre} está durmiendo`);
  }
}

// Clase hija
class Perro extends Animal {
  constructor(nombre: string) {
    super(nombre);
  }

  hacerSonido(): void {
    console.log(`${this.nombre} dice: ¡Guau guau!`);
  }
}

// Uso
const perro = new Perro("Firulais");
perro.hacerSonido(); // Firulais dice: ¡Guau guau!
perro.dormir();      // Firulais está durmiendo

// También se puede usar referencia del tipo abstracto
const mascota: Animal = new Perro("Max");
mascota.hacerSonido(); // Max dice: ¡Guau guau!
mascota.dormir();      // Max está durmiendo
