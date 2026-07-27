# herencia.py

class MiembroLoyalty:
    def __init__(self, nombre, nivel, año_ingreso):
        self.nombre       = nombre
        self.nivel        = nivel
        self.año_ingreso  = año_ingreso
        self._puntos = 0    # _ → convención "protegido"

    def acumular(self, incremento):
        self._puntos += incremento
        return self

    def canjear(self, decremento):
        self._puntos = max(0, self._puntos - decremento)
        return self

    def __str__(self):
        return f"{self.nombre} {self.nivel} ({self.año_ingreso}) — {self._puntos} puntos"

class MiembroEstandar(MiembroLoyalty):
    def __init__(self, nombre, nivel, año_ingreso, visitas=4):
        super().__init__(nombre, nivel, año_ingreso)   # llama al constructor del padre
        self.visitas = visitas

    def ver_beneficios(self):
        return f"{self.nombre} {self.nivel}: ¡Descuento básico!"

    def __str__(self):
        return f"{super().__str__()} ({self.visitas} visitas)"

class MiembroVip(MiembroLoyalty):
    def __init__(self, nombre, nivel, año_ingreso, categoria):
        super().__init__(nombre, nivel, año_ingreso)
        self.categoria = categoria

    def acceso_exclusivo(self):
        return f"⭐ {self.nombre} tiene acceso a sala VIP!"

    def __str__(self):
        return f"{super().__str__()} ({self.categoria})"

class MiembroElite(MiembroEstandar):
    def __init__(self, nombre, nivel, año_ingreso, limite_credito):
        super().__init__(nombre, nivel, año_ingreso)
        self.__limite_credito = limite_credito
        self.__cashback       = 100

    def recargar(self, porcentaje=100):
        self.__cashback = min(100, self.__cashback + porcentaje)
        return self

    @property
    def credito_restante(self):
        return self.__limite_credito * self.__cashback / 100

    def __str__(self):
        return (f"{super().__str__()} | "
                f"Cashback: {self.__cashback}% | "
                f"Crédito: {self.credito_restante:.0f}€")

# Herencia — cada objeto es también de todos sus tipos padre
ana = MiembroElite("Ana García", "Elite", 2024, 500)
ana.acumular(100)
print(ana)

print(isinstance(ana, MiembroElite))    # True
print(isinstance(ana, MiembroEstandar)) # True — herencia
print(isinstance(ana, MiembroLoyalty))  # True — herencia transitiva
print(isinstance(ana, MiembroVip))      # False

# MRO — Method Resolution Order
print(MiembroElite.__mro__)