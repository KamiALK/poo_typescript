export class my_fecha_tres {
  year: number;
  mes: number;
  dia: number;
  private _hora: number;


  constructor(year: number, mes: number, dia: number, _hora: number) {
    this.year = year;
    this.mes = mes;
    this.dia = dia;
    this._hora = _hora;


  }

  printFormat(): string {
    return `${this.year}-${this.mes}-${this.dia}`;

  }
  add(cantidad: number, type: 'dia' | 'mes' | 'year'): void {
    if (type === 'dia') {
      this.dia += cantidad;
    } else if (type === 'mes') {
      this.mes += cantidad;
    } else if (type === 'year') {
      this.year += cantidad;
    }
  }
  get hora(): number {
    return this._hora;
  }
  set hora(value: number) {
    if (value < 0 || value > 23) {
      throw new Error("La hora debe estar entre 0 y 23");
    }
    this._hora = value;
  }

}


const miFecha_dos = new my_fecha_tres(2025, 10, 20, 7)
console.log(miFecha_dos)

miFecha_dos.add(5, "mes")
console.log(`mi formato de fecha ${miFecha_dos.hora}`)
console.log(miFecha_dos.printFormat())
