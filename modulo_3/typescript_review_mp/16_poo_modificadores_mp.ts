// Concepto puro
class CuentaFidelidad {
  readonly id: string;           // no cambia tras la creación
  public titular: string;        // visible desde fuera
  private puntos: number;        // solo accesible dentro de la clase
  protected programa: string;    // accesible también en subclases

  constructor(id: string, titular: string, puntosIniciales: number) {
    this.id = id;
    this.titular = titular;
    this.puntos = puntosIniciales;
    this.programa = "Loyaltee";
  }

  // Método público que expone los puntos de forma controlada
  obtenerPuntos(): number {
    return this.puntos;
  }

  acumular(monto: number): void {
    if (monto <= 0) throw new Error("Monto inválido");
    this.puntos += monto;
  }
}

const cuenta = new CuentaFidelidad("LT-001", "María López", 500);
console.log(cuenta.titular);         // María López
console.log(cuenta.id);              // LT-001
console.log(cuenta.obtenerPuntos()); // 500
cuenta.acumular(250);
console.log(cuenta.obtenerPuntos()); // 750


// cuenta.puntos = 9999;  // Error: 'puntos' is private
// cuenta.id = "otro";    // Error: 'id' is readonly
