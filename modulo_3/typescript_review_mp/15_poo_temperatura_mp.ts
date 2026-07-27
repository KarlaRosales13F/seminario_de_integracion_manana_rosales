class PuntosFidelidad {
  puntos: number;

  constructor(puntos: number) {
    this.puntos = puntos;
  }

  aValorCanje(): number {
    return this.puntos * 0.10;
  }

  aNivel(): string {
    if (this.puntos >= 1000) return "Oro";
    if (this.puntos >= 500) return "Plata";
    return "Bronce";
  }

  describir(): string {
    return (
      `${this.puntos} pts = ` +
      `$${this.aValorCanje().toFixed(2)} de canje = ` +
      `Nivel ${this.aNivel()}`
    );
  }
}

const clienteVIP = new PuntosFidelidad(1250);
const clienteNuevo = new PuntosFidelidad(50);

console.log(clienteVIP.describir());     // 1250 pts = $125.00 de canje = Nivel Oro
console.log(clienteNuevo.describir());   // 50 pts = $5.00 de canje = Nivel Bronce
