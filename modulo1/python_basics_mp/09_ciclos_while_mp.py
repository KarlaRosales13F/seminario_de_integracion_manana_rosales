contador = 1
while(contador<=5):
    print(f"contador: {contador}")
    contador+=1
    
print("Control de ciclo")
print("continue")
i=1
while(contador<=5):
    i+=1
    if i==3:
        continue
    print(f"contador: {i}")
    
print("break")
i=1
while(contador<=5):
    i+=1
    if i == 3:
        break
    print(f"contador: {i}")
    
puntos_cliente = int(input("Ingrese puntos del cliente: "))
while puntos_cliente!=0:
    print("Puntos ingresados: ", puntos_cliente)
    puntos_cliente=int(input("Ingrese puntos del cliente"))
    
    
contador = 1
while (contador<=5):
    print(f"contador: {contador}")
    contador+=1
else:
    print("fin del ciclo")