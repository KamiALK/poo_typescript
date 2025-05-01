console.log("camilo es el rey del mundo")
// console.log(Math.E)



// podemos practicar

class MyMath {
  static readonly PI = 3.14;
}
console.log("kamilo es el are crisna")
console.log(Math.max(1, 5, 7, 32, 346, 4))
// MyMath.PI = 3.1416; // Error: Cannot assign to 'PI' because it is a read-only property
//
//vamos a crear una clase para crear un metodo de maximo
//
//
class maximo {
  static max(...numbers: number[]) {
    return numbers[0];
  }
}
console.log("camilin pingu")
console.log(maximo.max(10, 50, 65, 56, 56, 543, 34))



const obj = {
  nombre: "Ana",
  saludar: function () {
    setTimeout(function () {
      console.log("Hola " + this.nombre); // ❌ this no es el objeto
    }, 1000);
  }
};

const objFlecha = {
  nombre: "Ana",
  saludar: function () {
    setTimeout(() => {
      console.log("Hola " + this.nombre); // ✅ this es el objeto objFlecha
    }, 1000);
  }
};

obj.saludar();       // Hola undefined
objFlecha.saludar(); // Hola Ana
