print("funciones en python")
print("funcion basica")
def bienvenida():
    print("Bienvenido al Programa de Fidelización Loyalty")
    
bienvenida()

print("funcion con parametro")
def saludarCliente(cliente):
    print(f"Hola: {cliente}, Que tal?")

saludarCliente("John")
saludarCliente("Maria")

print("funcion que devuelve valor con return")
def sumar_puntos(a, b):
    return a+b

print(sumar_puntos(5,6))

print("funcion parametros por posicion")
def registrar_cliente(nombre,puntos,ciudad):
    print(f"{nombre}, {puntos}, {ciudad}")
    
registrar_cliente("Pedro",60, "Quito") #Por posicion
registrar_cliente(ciudad="Guayaquil", nombre="Juan", puntos=40) #Por nombre


print("funciones parametros por defecto")
def saludo_Con_Parametros_Por_Defecto(cliente, saludo="Hola", puntuacion="!"):
    print(f"{saludo} {cliente} {puntuacion}")
    
saludo_Con_Parametros_Por_Defecto("Pedro", "Buenos Dias","...")
saludo_Con_Parametros_Por_Defecto("Juan", puntuacion="...")
saludo_Con_Parametros_Por_Defecto("Carlos","Buenas Tardes")

print("funcion parametros posicionales")
def sumar_todos(*args):
    print(f"Argumentos recibidos {args}")
    return sum(args)

print(sumar_todos(1,2,3))
print(sumar_todos(1,2,3,4,5,6,7))
print(sumar_todos(10,20,22))

print("funcion parametros combiandos con posicion")
def mostrar_info(titulo, *datos):
    print(f"Argumentos recibidos {titulo} {datos}") 
    print(titulo)
    for dato in datos:
        print(f" - {dato}")
        
mostrar_info("Recompensas", "descuento","puntos dobles","envio gratis","cashback")


print("funcion parametros clave valor variables")
def crear_perfil(**kwargs):
 
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")
        
crear_perfil(nombre="Ana", apellido="Paris",puntos=26,ciudad="Quito")


print("funcion parametros combinacion de todos los tipos")
def configurar(host, *puertos, debug=False, **opciones):
    print(f"Host: {host}")
    print(f"Puertos: {puertos}")
    print(f"Debug: {debug}")
    print(f"Opciones: {opciones}")
        
configurar("localhost", 80,443,8080, debug=True, timeout=30, ssl=True)

print("Devolver multiples valores")
def minmax(numeros):
    return min(numeros),max(numeros)
minimo, maximo = minmax ([3,5,7,2,8,9])
print(f"Minimo {minimo}, Maximo{maximo}")
_, maximo = minmax([12,13,16,24,100])
print(f"Solo maximo {maximo}")


print("Devolver diccionario en el caso de muchos valores")
def analizar_puntos(numeros):
    total = sum(numeros)
    n=len(numeros)
    return {
        "total": total,
        "media": total/n if n >0 else 0,
        "minimo": min(numeros) if numeros else None,
        "maximo": max(numeros) if numeros else None,
        "count": n    
        }
datos = [12,88,44,55,23,45]
stats = analizar_puntos(datos)
print(f"Total: {stats['total']}")
print(f"Media: {stats['media']:.2f}")
print(f"Rango: {stats['minimo']:}-{stats['maximo']}")


print("funciones lambda")

def doble(x):
    return x*2
doble_lambda=lambda x: x*2
print(doble(2))
print(doble_lambda(2))

suma=lambda a,b: a+b
print(suma(5,4))