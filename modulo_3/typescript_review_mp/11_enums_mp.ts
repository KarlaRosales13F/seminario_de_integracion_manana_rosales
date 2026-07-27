// Enum numérico (los valores son 0, 1, 2, … por defecto)
enum NivelMembresia {
  Bronce,  // 0
  Plata,   // 1
  Oro,     // 2
  Platino, // 3
}

const nivel: NivelMembresia = NivelMembresia.Oro;
console.log(nivel);           // 2
console.log(NivelMembresia[2]);    // "Oro" (mapeo inverso automático)

// Enum numérico con valor de inicio personalizado
enum CodigoCanje {
  Exitoso = 200,
  PuntosInsuficientes = 400,
  Error = 500,
}

// Enum de string (recomendado: los valores son legibles en logs y redes)
enum Rol {
  Admin    = "ADMIN",
  Gerente  = "MANAGER",
  Cliente  = "CLIENT",
}

const miRol: Rol = Rol.Cliente;
console.log(miRol); // "CLIENT"
