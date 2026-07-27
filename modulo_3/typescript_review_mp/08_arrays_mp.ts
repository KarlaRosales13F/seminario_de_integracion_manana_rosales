// Concepto puro — dos sintaxis equivalentes
const puntos: number[] = [100, 250, 500, 750, 1000];
const niveles: Array<string> = ["bronce", "plata", "oro"];   // forma genérica

// TypeScript infiere el tipo del array si lo inicializas
const inferido = [50, 100, 150]; // number[] inferido

console.log('Arreglo Puntos: ${puntos}');
console.log('Arreglo Niveles: ${niveles}');
console.log('Arreglo Inferido: ${inferido}');


// Métodos tipados: el compilador conoce el tipo del elemento
const dobles: number[] = puntos.map((n) => n * 2);       // [200, 500, 1000, 1500, 2000]
const bajos: number[] = puntos.filter((n) => n < 500); // [100, 250]
const suma: number = puntos.reduce((acc, n) => acc + n, 0); // 2600

// Mutación (cambia el array original)
puntos.push(1500);       // agrega al final
puntos.unshift(0);       // agrega al inicio
const ultimo = puntos.pop();   // elimina y devuelve el último
const primero = puntos.shift(); // elimina y devuelve el primero

// Búsqueda
const existe: boolean = puntos.includes(500);       // true
const indice: number = puntos.indexOf(500);         // posición o -1
const encontrado: number | undefined = puntos.find((n) => n > 750); // 1000
