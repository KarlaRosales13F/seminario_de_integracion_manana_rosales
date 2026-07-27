// Concepto puro
class Beneficio {
  nombre(): string { return "Beneficio"; }
  puntos(): number { return 0; }
}

class Descuento extends Beneficio {
  constructor(private porcentaje: number) { super(); }
  override nombre(): string { return "Descuento"; }
  override puntos(): number { return this.porcentaje * 10; }
}

class ProductoGratis extends Beneficio {
  constructor(private valor: number, private factor: number) { super(); }
  override nombre(): string { return "Producto gratis"; }
  override puntos(): number { return (this.valor * this.factor) / 2; }
}

class EnvioGratis extends Beneficio {
  constructor(private costo: number) { super(); }
  override nombre(): string { return "Envío gratis"; }
  override puntos(): number { return this.costo ** 2; }
}

// Array de tipo base — el polimorfismo en acción
const beneficios: Beneficio[] = [
  new Descuento(15),
  new ProductoGratis(50, 4),
  new EnvioGratis(5),
];

for (const b of beneficios) {
  // TypeScript llama la versión correcta de puntos() en cada iteración
  console.log(`${b.nombre()}: puntos = ${b.puntos().toFixed(2)}`);
}
// Descuento: puntos = 150.00
// Producto gratis: puntos = 100.00
// Envío gratis: puntos = 25.00
