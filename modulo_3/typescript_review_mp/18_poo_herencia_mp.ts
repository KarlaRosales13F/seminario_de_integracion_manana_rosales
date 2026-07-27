// Concepto puro
class Cliente {
  constructor(public nombre: string) {}

  saludar(): string {
    return `${this.nombre} es cliente de Loyaltee.`;
  }
}

class ClienteVIP extends Cliente {
  constructor(nombre: string, public nivel: string) {
    super(nombre); // llama al constructor del padre
  }

  // override sobrescribe el método del padre
  override saludar(): string {
    return `${this.nombre} es cliente VIP (${this.nivel}): ¡Bienvenido!`;
  }

  canjear(recompensa: string): string {
    return `${this.nombre} canjea: ${recompensa}.`;
  }
}

const c = new Cliente("Ana García");
const v = new ClienteVIP("Carlos Ruiz", "Oro");

console.log(c.saludar());              // Ana García es cliente de Loyaltee.
console.log(v.saludar());              // Carlos Ruiz es cliente VIP (Oro): ¡Bienvenido!
console.log(v.canjear("Café gratis")); // Carlos Ruiz canjea: Café gratis.
console.log(v.nivel);                  // Oro
