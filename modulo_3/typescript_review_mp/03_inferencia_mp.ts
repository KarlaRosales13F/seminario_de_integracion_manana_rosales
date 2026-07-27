// ── Anotación explícita ───────────────────────────────────────────────────
// Tú le dices a TS cuál es el tipo.
const puntosMinimos: number = 100;
const nivel: string = "bronce";
const activo: boolean = true;

// ── Inferencia de tipo ────────────────────────────────────────────────────
// TS lo deduce del valor inicial — el tipo es el mismo, pero sin escribirlo.
const puntosMinimos2 = 100;       // TypeScript infiere: number
const nivel2 = "bronce";          // TypeScript infiere: string
const activo2 = true;             // TypeScript infiere: boolean

// Ambas formas producen el mismo nivel de seguridad de tipos.
// Si intentas reasignar con el tipo incorrecto, TS da error en ambos casos:
// puntosMinimos2 = "200";  // Error: Type 'string' is not assignable to type 'number'.

// ── Cuándo anotar explícitamente ─────────────────────────────────────────
// 1. Variables declaradas sin valor inicial:
let puntosCanje: number;      // sin inicializar — necesita anotación
puntosCanje = 250;

// 2. Cuando quieres un tipo más amplio que el valor inicial:
let codigo: number | string = 200;  // acepta número o string
codigo = "CANJE_OK";  // válido

// 3. Parámetros de funciones (TS no puede inferirlos):
function consultarPuntos(cliente: string, intentos: number): string {
  return `Consulta de puntos para ${cliente} — ${intentos} intento(s)`;
}

console.log(`Explicito: puntosMinimos=${puntosMinimos}, nivel=${nivel}, activo=${activo}`);
console.log(`Inferido: puntosMinimos2=${puntosMinimos2}, nivel2=${nivel2}, activo2=${activo2}`);
console.log(`Puntos canje: ${puntosCanje}, Codigo: ${codigo}`);
console.log(consultarPuntos("Maria Lopez", 3));
