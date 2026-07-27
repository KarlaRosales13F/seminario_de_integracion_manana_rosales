// Concepto puro
type ClientePuntos = [number, number];           // [idCliente, puntos]
type NivelRGB = [number, number, number];        // [bronce, plata, oro]
type Entrada = [string, number];                 // [clave, valor]

const cliente: ClientePuntos = [1001, 1250];
const niveles: NivelRGB = [100, 500, 1000];     // umbrales de puntos
const par: Entrada = ["puntosAcumulados", 1250];

// Desestructuración (la forma más cómoda de usar tuplas)
const [idCliente, puntos] = cliente;
const [bronce, plata, oro] = niveles;
const [clave, valor] = par;

console.log(`Cliente: id=${idCliente}, puntos=${puntos}`);         // Cliente: id=1001, puntos=1250
console.log(`Niveles: bronce=${bronce}, plata=${plata}, oro=${oro}`); // Niveles: bronce=100, plata=500, oro=1000

// Tuplas con nombre (TS 4.0+) — mejoran la legibilidad
type Rango = [minimo: number, maximo: number];
const rangoPuntos: Rango = [100, 5000];              // de 100 a 5000 puntos
