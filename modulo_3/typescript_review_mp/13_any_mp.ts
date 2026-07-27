// ─── any ───────────────────────────────────────────────────────────────────
// Desactiva el chequeo de tipos. Es el "apagado de emergencia" de TypeScript.
// Evítalo salvo al migrar código JavaScript o al trabajar con librerías sin tipos.
let cualquierDato: any = "cliente";
cualquierDato = 1250;       // ok, any acepta cualquier valor
cualquierDato = true;     // ok
cualquierDato.metodoFalso(); // NO da error en compilación, pero falla en runtime

// ─── unknown ───────────────────────────────────────────────────────────────
// Como any, acepta cualquier valor. Pero NO puedes usarlo sin comprobar el tipo.
// Es la versión SEGURA de any para datos de fuentes externas (APIs, JSON, input).
let dato: unknown = "loyaltee";
dato = 1250;                 // ok, acepta cualquier valor

// console.log(dato.toUpperCase()); // Error: Object is of type 'unknown'
if (typeof dato === "string") {
  console.log(dato.toUpperCase()); // ok: TypeScript sabe que es string aquí
}

// ─── never ─────────────────────────────────────────────────────────────────
// Representa algo que NUNCA ocurre: una función que siempre lanza, o
// una rama de código inalcanzable. Útil para verificar exhaustividad.
function lanzarError(msg: string): never {
  throw new Error(msg); // nunca devuelve un valor
}

function verificarExhaustividad(valor: never): never {
  throw new Error(`Caso no manejado: ${String(valor)}`);
}
