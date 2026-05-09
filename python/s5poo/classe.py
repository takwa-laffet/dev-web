""" class Voiture:
   pass 
bmw = Voiture()
print(bmw)
 """
""" class Voiture:
    def __init__(self,marque,modele,couleur):
        self.marque=marque
        self.modele=modele
        self.couleur=couleur
m=Voiture("BMW","X5","rose")
r=Voiture("Renault","Clio","bleu")
print(m.marque)
print(r.couleur) """
import email


class Etudiant:
    def __init__(self,id,nom,email):
        self.id=id
        self.nom=nom
        self.email=email
    def afficher(self):
        print("ID:",self.id)
        print("Nom:",self.nom)
        print("Email:",self.email)
    def presenter(self):
        print(f"Bonjour,{self.nom}! Votre email est {self.email}.")
e1=Etudiant(1,"Alice","alice@example.com")
print(e1.id)
print(e1.nom)
#print("test",e1.afficher()) => affiche NONE
e1.afficher()
e1.presenter()
e2=Etudiant(2,"Jhon","john@example.com")
e2.presenter()