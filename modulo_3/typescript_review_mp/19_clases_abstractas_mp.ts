// Concepto puro
abstract class NivelMembresia {
  abstract puntosRequeridos(): number;       // sin implementación — las subclases DEBEN implementarlo
  abstract multiplicador(): number;

  // Los métodos concretos SÍ tienen implementación
  describir(): string {
    return (
      `Puntos mínimos: ${this.puntosRequeridos()} | ` +
      `Multiplicador: x${this.multiplicador().toFixed(1)}`
    );
  }
}

class NivelBronce extends NivelMembresia {
  constructor(private puntos: number) {
    super();
  }

  override puntosRequeridos(): number {
    return this.puntos;
  }

  override multiplicador(): number {
    return 1.0;
  }
}

class NivelOro extends NivelMembresia {
  constructor(private puntos: number, private bonus: number) {
    super();
  }

  override puntosRequeridos(): number {
    return this.puntos;
  }

  override multiplicador(): number {
    return this.bonus;
  }
}

// const n = new NivelMembresia(); // Error: Cannot create an instance of an abstract class.

const bronce = new NivelBronce(100);
const oro = new NivelOro(1000, 2.0);

console.log(bronce.describir()); // Puntos mínimos: 100 | Multiplicador: x1.0
console.log(oro.describir());    // Puntos mínimos: 1000 | Multiplicador: x2.0
