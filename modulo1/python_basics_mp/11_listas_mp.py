print("Listas")
print("Crear Listas")

vacia = []
print(vacia)

numeros = [1, 2, 3, 4, 5, 6, 7]
print(numeros)

clientes = ["Juan", "Pedro", "Carlos", "Maria", "Petra", "Juana"]
print(clientes)

mixta = [1, "Hola", "Loyalty", True, None, 3.4]
print(mixta)

anidada = [1, [5, 5, [6, 4, 4]], 5, 7]
print(anidada)

print("Acceso a los elementos de una lista")
print(clientes[0])
print(clientes[-1])
print(clientes[1:3])
print(clientes[::-1])

print("CRUD en listas")

recompensas = ["descuento", "puntos dobles", "envio gratis", "cashback"]

# agregar
recompensas.append("membresia premium")
print(recompensas)

recompensas.insert(1, "regalo sorpresa")
print(recompensas)

recompensas.extend(["acceso vip", "cupon especial"])
print(recompensas)

# modificar
recompensas[0] = "descuento exclusivo"
print(recompensas)

# eliminar
recompensas.remove("cashback")
print(recompensas)

eliminado = recompensas.pop()
print(recompensas)

eliminado = recompensas.pop(0)
print(recompensas)

del recompensas[0]
print(recompensas)