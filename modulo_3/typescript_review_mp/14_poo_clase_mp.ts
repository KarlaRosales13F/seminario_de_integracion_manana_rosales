// Concepto puro
class Recompensa {
  nombre: string;
  puntosCosto: number;
  disponible: boolean;

  constructor(nombre: string, puntosCosto: number, disponible: boolean) {
    this.nombre = nombre;
    this.puntosCosto = puntosCosto;
    this.disponible = disponible;
  }

  // Método: acción que puede realizar la instancia
  describir(): string {
    const estado = this.disponible ? "disponible" : "agotada";
    return `${this.nombre} — ${this.puntosCosto} pts (${estado})`;
  }
}

const descuento = new Recompensa("Descuento 15%", 300, true);
const cena = new Recompensa("Cena para dos", 1000, false);

console.log(descuento.describir()); // Descuento 15% — 300 pts (disponible)
console.log(cena.describir());      // Cena para dos — 1000 pts (agotada)
