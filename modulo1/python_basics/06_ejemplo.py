print("Tiempo de antiguedad")
antiguedad = input("Ingrese su tiempo de antiguedad en la empresa")
calificacion = input ("Ingrese su calificacion de desempeño")
salario = input ("Ingrese su salario")

if (int(antiguedad) > 1):
    if (int(calificacion) > 8):
        if (int (salario) > 1000):
            print("bono de 200")
        else:
            print("bomo de 100")
    else: 
        print("No puede obtener el bono")
else: 
    print("No aplica para otra evaluacion")
    
    
