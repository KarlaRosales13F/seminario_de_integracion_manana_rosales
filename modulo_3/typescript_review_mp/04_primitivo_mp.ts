// number — enteros y decimales, positivos y negativos
const puntos: number        = 1250.50;
const nivelMinimo: number   = 500;
const saldoPuntos: number   = -50.0;
const codigoColor: number   = 0xff5733;  // también acepta hexadecimal

// string — texto, con comillas simples, dobles o backtick
const email: string         = "cliente@loyaltee.com";
const programa: string      = 'FIDELIZACION';
const ruta: string          = `/api/v1/clientes`;

// boolean — solo true o false
const membresiaActiva: boolean  = true;
const requiereVerificacion: boolean = false;
const esVIP: boolean              = false;

// ── Aritmética con number ─────────────────────────────────────────────────
const puntosGanados = 300;
const puntosCanjeados = 50;
const saldoFinal = puntosGanados - puntosCanjeados;  // 250

// ── Métodos de string ─────────────────────────────────────────────────────
const cliente = "  maria@loyaltee.com  ";
console.log(cliente.trim().toLowerCase()); // "maria@loyaltee.com"
console.log(email.includes("loyaltee"));   // true
console.log(email.split("@")[1]);          // "loyaltee.com"

// ── Lógica con boolean ────────────────────────────────────────────────────
const puedeCanjear: boolean = membresiaActiva && !requiereVerificacion;
console.log(puedeCanjear); // true
