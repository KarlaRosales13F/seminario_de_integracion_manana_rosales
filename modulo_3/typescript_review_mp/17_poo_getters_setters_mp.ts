// Concepto puro
class TarjetaFidelidad {
  private _puntos: number;

  constructor(puntos: number) {
    this._puntos = puntos;
  }

  get puntos(): number {
    return this._puntos;
  }

  set puntos(valor: number) {
    if (valor < 0) throw new Error("Los puntos no pueden ser negativos");
    this._puntos = valor;
  }

  get nivel(): string {
    if (this._puntos >= 1000) return "Oro";
    if (this._puntos >= 500) return "Plata";
    return "Bronce";
  }
}

const t = new TarjetaFidelidad(500);
console.log(t.puntos);          // 500   ← usa el getter
console.log(t.nivel);           // Plata

t.puntos = 1200;                // usa el setter
console.log(t.nivel);           // Oro

// t.puntos = -3;  // Error: Los puntos no pueden ser negativos
