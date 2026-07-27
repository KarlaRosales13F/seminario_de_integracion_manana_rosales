print("match-case")
comando = input("Comando proceso iniciar/parar/reiniciar")
match comando:
    case "iniciar":
        print("Sistema iniciando")
    case "parar":
        print("deteniendose")
    case "reiniciar":
        print("reiniciando el sistema")
    case _:
        print(f"comando '{comando}' no encontrado")
        
print ("match condiciones")
puntos_cliente=7
match puntos_cliente:
    case n if n<0:
        print(f"{n} es negativo" )
    case 0:
        print("Es cero")
    case n if n%2==0:
        print(f"{n} es par")
    case n:
        print(f"{n} es positivo es impar")