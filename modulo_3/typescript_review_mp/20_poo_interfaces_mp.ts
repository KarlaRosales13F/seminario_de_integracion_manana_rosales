// Concepto puro
interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class Canje implements Serializable, Validable {
  constructor(
    public id: string,
    public recompensas: string[],
    public puntosTotal: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, recompensas: this.recompensas, puntosTotal: this.puntosTotal });
  }

  esValido(): boolean {
    return this.recompensas.length > 0 && this.puntosTotal > 0;
  }
}

const canje = new Canje("C-001", ["Descuento 10%", "Café gratis"], 300);
console.log(canje.esValido());    // true
console.log(canje.serializar());
// {"id":"C-001","recompensas":["Descuento 10%","Café gratis"],"puntosTotal":300}
