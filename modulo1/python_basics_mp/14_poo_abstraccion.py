# abstraccion.py
from abc import ABC, abstractmethod

# ABC (Abstract Base Class) — clase abstracta que no puede instanciarse
class NivelFidelizacion(ABC):
    def __init__(self, color="negro"):
        self.color = color

    # Método abstracto — CADA subclase DEBE implementarlo
    @abstractmethod
    def descuento(self) -> float:
        pass

    @abstractmethod
    def beneficios(self) -> float:
        pass

    # Método concreto — compartido por todos los niveles
    def describir(self) -> str:
        return (f"{self.__class__.__name__} {self.color}: "
                f"descuento={self.descuento():.2f}, beneficios={self.beneficios():.2f}")

# NivelFidelizacion()  # TypeError — no puede instanciarse

class NivelBronce(NivelFidelizacion):
    def __init__(self, puntos_minimos, color="negro"):
        super().__init__(color)
        self.puntos_minimos = puntos_minimos

    def descuento(self):
        import math
        return math.pi * self.puntos_minimos ** 2

    def beneficios(self):
        import math
        return 2 * math.pi * self.puntos_minimos

class NivelPlata(NivelFidelizacion):
    def __init__(self, ancho, alto, color="negro"):
        super().__init__(color)
        self.ancho = ancho
        self.alto  = alto

    def descuento(self):
        return self.ancho * self.alto

    def beneficios(self):
        return 2 * (self.ancho + self.alto)

class NivelOro(NivelFidelizacion):
    def __init__(self, a, b, c, color="negro"):
        super().__init__(color)
        self.a, self.b, self.c = a, b, c

    def beneficios(self):
        return self.a + self.b + self.c

    def descuento(self):
        s = self.beneficios() / 2
        return (s * (s - self.a) * (s - self.b) * (s - self.c)) ** 0.5

# Polimorfismo — mismo código para cualquier NivelFidelizacion
niveles = [NivelBronce(5, "bronce"), NivelPlata(4, 6, "plata"), NivelOro(3, 4, 5, "oro")]

for nivel in niveles:
    print(nivel.describir())

descuento_total = sum(f.descuento() for f in niveles)
print(f"Descuento total: {descuento_total:.2f}")