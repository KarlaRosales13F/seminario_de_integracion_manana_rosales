// Concepto puro
const entero: number = 1250;
const decimal: number = 0.10;
const negativo: number = -50;
const hexadecimal: number = 0xff;   // 255 en base 16
const binario: number = 0b1010;     // 10 en base 2
const octal: number = 0o17;         // 15 en base 8
const grande: number = 1_000_000;   // _ como separador visual (ES2021)

console.log(hexadecimal); // 255
console.log(binario);     // 10
console.log(grande);      // 1000000

// Constantes especiales de number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.isFinite(1 / 0)); // false (Infinity no es finito)
console.log(Number.isNaN(0 / 0));    // true


// Concepto puro
const simple: string = "Hola Loyaltee";
const doble: string = 'También funciona';
const template: string = `Hola ${"cliente"}`; // template literal

const nombre: string = "María";
const puntos: number = 1250;

// Interpolación: embebe expresiones dentro de ${}
const saludo: string = `Hola, ${nombre}. Tienes ${puntos} puntos.`;
const puedeCanjear: string = `Puedes ${puntos >= 100 ? "canjear" : "acumular más para canjear"}.`;

// Multilínea sin caracteres de escape
const mensaje: string = `
  Línea 1
  Línea 2
  Línea 3
`.trim();

// Métodos comunes (tipados, el editor autocompleta)
console.log("  hola  ".trim());         // "hola"
console.log("hola".toUpperCase());      // "HOLA"
console.log("2024-06-15".split("-"));   // ["2024", "06", "15"]
console.log("error: fallo".includes("error")); // true
console.log("recompensa.ts".endsWith(".ts"));     // true
