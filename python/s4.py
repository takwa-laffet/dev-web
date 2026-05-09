n=int(input("donner un nombre: "))
def sommechiffres(n):
    somme=0
    while n>0:
        x=n % 10
        somme= somme+x
        n=n//10
    return somme
#print(sommechiffres(n))

""" print(450 % 10)
print(450//10)
print(45 %10)
print(45//10) """
print("#########################")
""" def fonction(x):
    if condition:
        return resultat1
    else:
        return fonction(nouvelle-valeur) """
def factorielle(n):
    if n==0:
        return 1
    else:
        print(n)
        return n*factorielle(n-1)
#print(factorielle(n))
print("###################")
def copte(n):
    if n==0:
        return 0
    else:
        print(n)
        return copte(n-1)
#print(copte(n))
def fibo(n):
    if n==0:
        return 0
    elif n==1:
        return 1
    else:
        return fibo(n-1)+fibo(n-2)
#print("Fibonacci de", n, "est", fibo(n))

print("###################")
b=int(input("donner un nombre: "))
def pcgd(a,b):
    if b==0:
        return a
    else:
        print(a% b)
        return pcgd(b,a%b)#=>a=b,b=a%b
print("PGCD de", n, "et", b, "est", pcgd(n,b))
