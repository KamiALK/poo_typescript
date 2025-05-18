
interface PersonaParams {
  nombre?: string;
  edad?: number;
  direccion?: string;
  email?: string;
  // ...imagina hasta 100 campos
}


export class ClasePublica {
  public nombre?: string;
  public edad?: number;
  public direccion?: string;
  public email?: string;

  constructor(params: Partial<PersonaParams> = {}) {
    this.nombre = params.nombre ?? "sin nombre";
    this.edad = params.edad ?? 0;
    this.direccion = params.direccion ?? "desconocida";
    this.email = params.email ?? "sin email";
  }
}


class ClaseProtegida extends ClasePublica {
  public rol: string;

  constructor(extraParams: Partial<PersonaParams> & { rol: string }) {
    super(extraParams); // ✅ le pasas solo lo que quieras
    this.rol = extraParams.rol;
  }
}



const usuario = new ClaseProtegida({
  nombre: "Kamilo",
  rol: "Administrador"
});

console.log(usuario.nombre); // Kamilo
console.log(usuario.rol);    // Administrador
console.log(usuario.edad);   // 0 (valor por defecto)



// tomar todos los datos dinamicamente
//
const data = {
  nombre: "Camilo",
  email: "camilo@email.com",
  rol: "usuario"
};

const persona = new ClaseProtegida({ ...data, rol: "admin" });
console.log("aqui estoy tomando todos los datos de la interfase")
console.log(persona)
