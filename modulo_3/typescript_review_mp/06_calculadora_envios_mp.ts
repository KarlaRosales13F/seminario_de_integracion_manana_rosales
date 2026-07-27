// Sistema de cotización de canje de puntos para Loyaltee.
// Demuestra cómo los tipos previenen errores en lógica de negocio real.

type TipoCanje = "descuento" | "producto" | "experiencia";

interface Recompensa {
  descripcion: string;
  puntosCosto: number;
  valorEquivalente: number;
  tipo: TipoCanje;
}

const TARIFAS: Record<TipoCanje, number> = {
  descuento:    0.10,   // $ por punto
  producto:     0.08,
  experiencia:  0.12,
};

const BONO_VIP_PCT = 0.05;  // 5% extra para clientes VIP

function cotizarCanje(recompensa: Recompensa): string {
  const tarifaBase = TARIFAS[recompensa.tipo];
  const valorCanje = tarifaBase * recompensa.puntosCosto;
  const bonoVIP = recompensa.valorEquivalente * BONO_VIP_PCT;
  const total = valorCanje + bonoVIP;

  return `
Cotizacion de canje Loyaltee
   Descripción : ${recompensa.descripcion}
   Puntos      : ${recompensa.puntosCosto} pts
   Tipo        : ${recompensa.tipo}
   Valor canje : $${valorCanje.toFixed(2)}
   Bono VIP    : $${bonoVIP.toFixed(2)}
   ─────────────────────────
   TOTAL       : $${total.toFixed(2)}
  `.trim();
}

const canje1: Recompensa = {
  descripcion: "Descuento 20% en próxima compra",
  puntosCosto: 500,
  valorEquivalente: 50,
  tipo: "descuento",
};

const canje2: Recompensa = {
  descripcion: "Café gratis en tienda asociada",
  puntosCosto: 150,
  valorEquivalente: 25,
  tipo: "experiencia",
};

console.log(cotizarCanje(canje1));
console.log("---");
console.log(cotizarCanje(canje2));

// TS detecta si usas un tipo inválido:
// const canje3: Recompensa = { ..., tipo: "regalo" };
// Type '"regalo"' is not assignable to type 'TipoCanje'.
