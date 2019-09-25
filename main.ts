export class Bar {
  nombre: string; //Atributo
  capacidad: Number; //Atrbuto
  constructor(nom: string, cap: number) {
    this.nombre = nom;
    this.capacidad = cap;
  }
}

export class BarMan {
  nombre: String;
  apellido: String;
}

export class Tragos {
  nombre: String;
  color: String;
  cantidad: Number;
}
/**
 * concepto: los atributos son las caracteristicas individuales
 * que difer
 */
/*****************************************/
let bar1: Bar = new Bar('nueva era ', 50);
let bar2: Bar = new Bar('el patio', 200);
console.log(bar1);
console.log(bar2);

