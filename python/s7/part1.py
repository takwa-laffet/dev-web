""" f=open("exemple.txt","w")
f.write("bonjour\n")
f.write("c'est un fichier texte\n") 
f.close() """
with open("exemple.txt","w") as f:
    for i in range(4,10):
        f.write(f"{i}\n")
