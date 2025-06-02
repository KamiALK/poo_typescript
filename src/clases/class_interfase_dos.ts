
interface PersonaParams {
  nombre?: string;
  edad?: number;
  direccion?: string;
  email?: string;
}

export class ClasePublica {
  private passedParams: Partial<PersonaParams>;

  public nombre: string;
  public edad: number;
  public direccion: string;
  public email: string;

  constructor(params: Partial<PersonaParams> = {}) {
    this.passedParams = params;

    this.nombre = params.nombre ?? "sin nombre";
    this.edad = params.edad ?? 0;
    this.direccion = params.direccion ?? "desconocida";
    this.email = params.email ?? "sin email";
  }

  // Method to get only passed properties dynamically
  getPassedProps() {
    const result: Partial<PersonaParams> = {};
    for (const key in this.passedParams) {
      // aqui estoy obteniendo las clase las keys
      // Copy only properties actually passed
      result[key as keyof PersonaParams] = this[key as keyof PersonaParams];
    }
    console.log(result)
    return result;
  }
}

// Extend ClasePublica
class ClaseProtegida extends ClasePublica {
  public rol: string;
  private passedExtraParams: { rol: string };

  constructor(extraParams: Partial<PersonaParams> & { rol: string }) {
    super(extraParams);
    this.passedExtraParams = { rol: extraParams.rol };
    this.rol = extraParams.rol;
  }

  // Override to include rol as well
  getPassedProps() {
    return {
      ...super.getPassedProps(),
      ...this.passedExtraParams
    };
  }
}

// Usage:
const data = {
  nombre: "Camilo",
  email: "camilo@hotmail.com",
  rol: "usuario"
};

const persona = new ClaseProtegida({ ...data, rol: "admin" });

console.log("Solo propiedades que se pasaron externamente:");
console.log(persona.getPassedProps());
