export class clase_privada {
  private _nombre: string;

  constructor(
    nombre: string = "kamilo"

  ) {
    this._nombre = nombre;

  }


  get nombre() {
    return this._nombre;
  }
  public saludar() {
    console.log(`hola ${this.nombre}, como estas `)
  }
  //
  set nombre(nombre: string) {
    this._nombre = nombre
  }


}
