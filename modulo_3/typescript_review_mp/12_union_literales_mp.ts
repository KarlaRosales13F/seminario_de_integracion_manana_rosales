// Union de literales: más simple, cero código JS generado
type EstadoCanje = "pendiente" | "procesando" | "completado" | "error";
type Prioridad = "baja" | "media" | "alta";

function procesarCanje(id: number, estado: EstadoCanje): void {
  console.log(`Canje #${id}: ${estado}`);
}

procesarCanje(1, "procesando"); // ok
// procesarCanje(2, "cancelado"); // Error de compilación: no es un EstadoCanje válido
