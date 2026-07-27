// Concepto puro — template literals (backtick ``)
const nombre: string = "María";
const nivel: string    = "oro";
const puntos: number = 1250;

// Interpola cualquier expresión con ${ }
const bienvenida: string = `Bienvenida, ${nombre}. Nivel: ${nivel}. Puntos: ${puntos}.`;
console.log(bienvenida);
// Bienvenida, María. Nivel: oro. Puntos: 1250.

// Expresiones dentro de ${ }
const compra: number = 500;
const tasaPuntos: number    = 0.10;
const puntosGanados: string  = `Puntos ganados: ${(compra * tasaPuntos).toFixed(0)}`;
console.log(puntosGanados);
// Puntos ganados: 50

// Multi-línea — sin concatenación ni \n
const reporte: string = `
=== Reporte Loyaltee ===
Cliente  : María López
Nivel    : oro
Puntos   : 1250
`;


console.log(reporte);
