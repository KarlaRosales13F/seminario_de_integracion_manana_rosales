# primera-clase.py

class Cliente:
    # Atributo de clase — compartido por TODAS las instancias
    programa = "Loyalty Fidelización"

    # __init__ es el constructor — se ejecuta al crear la instancia
    def __init__(self, nombre, puntos):
        # Atributos de instancia — propios de cada objeto
        self.nombre = nombre
        self.puntos = puntos

    # Método de instancia — self es la referencia al objeto
    def saludar(self):
        return f"Hola, soy {self.nombre} y tengo {self.puntos} puntos."

    def acumular_puntos(self):
        self.puntos += 1
        print(f"¡Felicidades, {self.nombre}! Ahora tienes {self.puntos} puntos.")

    # __str__ — representación legible (para print y str())
    def __str__(self):
        return f"Cliente({self.nombre}, {self.puntos})"

    # __repr__ — representación oficial (para depuración)
    def __repr__(self):
        return f"Cliente(nombre={self.nombre!r}, puntos={self.puntos!r})"

# Crear instancias (objetos) con la clase como función
ana  = Cliente("Ana García", 28)
luis = Cliente("Luis Pérez", 31)

print(ana.saludar())       # Hola, soy Ana García y tengo 28 puntos.
print(luis.saludar())      # Hola, soy Luis Pérez y tengo 31 puntos.
ana.acumular_puntos()      # ¡Felicidades, Ana García! Ahora tienes 29 puntos.
print(str(ana))            # Cliente(Ana García, 29)
print(repr(ana))           # Cliente(nombre='Ana García', puntos=29)
print(Cliente.programa)    # Loyalty Fidelización  — atributo de clase