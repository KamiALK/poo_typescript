class my_fecha {
  year: number;
  mes: number;
  dia: number;


  constructor(year: number, mes: number, dia: number) {
    this.year = year;
    this.mes = mes;
    this.dia = dia;
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

}


const miFecha = new my_fecha(2025, 10, 20)
console.log(miFecha)

miFecha.add(5, "mes")

console.log(miFecha.printFormat())
