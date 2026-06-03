# diccionarios.py

# Crear diccionarios
vacio    = {}
cliente  = {"nombre": "Ana", "puntos": 28, "ciudad": "Madrid"}
config   = dict(host="localhost", puerto=5432, debug=True)

# Acceso
print(cliente["nombre"])              # Ana
print(cliente.get("email"))           # None — no lanza error si no existe
print(cliente.get("email", "N/A"))    # N/A — valor por defecto

# Modificar
cliente["email"]   = "ana@email.com"  # añadir/modificar
cliente["puntos"]  = 29               # modificar
del cliente["ciudad"]                 # eliminar
valor = cliente.pop("email")         # eliminar y obtener el valor
print(cliente)

# Verificar existencia
print("nombre" in cliente)            # True
print("ciudad" in cliente)            # False

# Métodos esenciales
print(cliente.keys())    # dict_keys(['nombre', 'puntos'])
print(cliente.values())  # dict_values(['Ana', 29])
print(cliente.items())   # dict_items([('nombre', 'Ana'), ('puntos', 29)])

# Iterar
for clave, valor in cliente.items():
    print(f"  {clave}: {valor}")

# update — fusionar diccionarios
cliente.update({"ciudad": "Barcelona", "tel": "600111222"})
print(cliente)

# Fusionar con | (Python 3.9+)
extra  = {"nivel": "Oro", "activo": True}
completo = cliente | extra
print(completo)

# Diccionarios anidados
programa_fidelizacion = {
    "nombre": "LoyaltyCorp",
    "miembros": {
        1: {"nombre": "Ana", "nivel": "oro"},
        2: {"nombre": "Luis", "nivel": "plata"},
    },
    "sedes": ["Madrid", "Barcelona"]
}

print(programa_fidelizacion["miembros"][1]["nombre"])   # Ana
programa_fidelizacion["miembros"][3] = {"nombre": "Marta", "nivel": "bronce"}

# setdefault — añadir solo si no existe
cliente.setdefault("pais", "España")       # añade "pais"
cliente.setdefault("nombre", "Otro")      # no modifica — ya existe