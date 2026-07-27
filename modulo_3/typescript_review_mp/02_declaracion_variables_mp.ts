// const — valor que NO cambia (preferida por defecto)
const PUNTOS_POR_COMPRA: number = 10;
const NOMBRE_APP: string = "Loyaltee";
const DEBUG_MODE: boolean = false;

// let — valor que SÍ puede cambiar
let puntosAcumulados: number = 0;
let estadoMembresia: string = "inactiva";
let clienteActivo: boolean = false;

console.log(`puntos acumulados: ${puntosAcumulados}
    estado membresía: ${estadoMembresia}
    cliente activo: ${clienteActivo}`);

puntosAcumulados++;                         // 1
estadoMembresia = "activa";                 // ok
clienteActivo = true;                       // ok

// PUNTOS_POR_COMPRA = 20;  // ← Error: Cannot assign to 'PUNTOS_POR_COMPRA' because it is a constant.
