export class clase_protegida {
  protected nombre: string;
  protected segundo_nombre: string;

  constructor(
    nombre: string = "kamilo",
    segundo_nombre: string = "andres"

  ) {
    this.nombre = nombre;
    this.segundo_nombre = segundo_nombre;

  }
  public saludar() {
    console.log(`hola ${this.nombre}, como estas `)
  }

}
