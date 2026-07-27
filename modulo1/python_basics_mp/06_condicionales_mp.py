print("condicionales simples")
puntos=input("Incluye puntos del cliente:")
if (int(puntos)>=100):
    print("Cliente elegible para recompensa")
    

print("condicionales dos caminos")   
compras=input("Incluye monto de compras:")
if (int(compras)>=500):
   print("Cliente nivel premium") 
else:
    print("Cliente nivel estandar")
    
    
print("condicionales multiples")
puntos_acumulados=input("Incluir puntos acumulados:")
if (int(puntos_acumulados)>=90):
    print("Nivel Diamante")
elif (int(puntos_acumulados)>=80):
    print("Nivel Oro")
elif (int(puntos_acumulados)>=70):
    print("Nivel Plata")
else: 
    print("Nivel Bronce")


print("condicionales if anidado")
tiene_membresia=True 
saldo=25
producto="pizza"
if (tiene_membresia):
    if(saldo>=20):
        if producto=="pizza":
            print("Tu pizza cuesta 20$. Pedido confirmado")
        else:
            print ("Producto disponible")
    else: 
        print("Saldo insuficiente")
else: 
    print("No tiene membresia")