""" class Personne:
    def __init__(self,nom,age):
        self.nom=nom
        self.age=age
    def sepresenter(self):
        print(f"Bonjour, je m'appelle {self.nom} et j'ai {self.age} ans.")

class Etudiant(Personne):
    def __init__(self, nom, age,niveau):
        super().__init__(nom, age) # Appel du constructeur de la classe parent
        self.niveau=niveau
    def getage(self):
        return self.age
class Employe(Personne):
    def __init__(self, nom, age,poste):
        super().__init__(nom, age) # Appel du constructeur de la classe parent
        self.poste=poste
    def getposte(self):
      print(f"Le poste de {self.nom} est {self.poste}.")

e1=Employe("ali", 35, "Développeur")
e1.sepresenter()
e1.getposte()
e2=Etudiant("sara", 20, "Licence")
e2.sepresenter()
print(e2.getage())
#e2.getposte()  """
print("#######################")
""" class Employe:
    def __init__(self,nom,age,poste):
        self.nom=nom
        self.age=age
        self.poste=poste
    def travailler(self):
        print(f"{self.nom} travaille en tant que {self.poste}.")
class Sportif():
    def __init__(self,nomcoach,sport):
        self.nomcoach=nomcoach
        self.sport=sport
    def pratiquer(self):
        print(f"{self.nomcoach} pratique le {self.sport}.")
class EmployeSportif(Employe,Sportif):
    def __init__(self, nomcoach, age, poste, sport,day,nom):
        Employe.__init__(self, nom, age, poste)
        Sportif.__init__(self, nomcoach, sport)
        self.day=day
    def afficher(self):
        print(f"{self.nom} travaille en tant que {self.poste} et pratique le {self.sport} tous les {self.day}.")

e3=EmployeSportif("mohamed", 30, "ingénieur", "football","samedi","sara")
Employe1=Employe("ali", 35, "Développeur")
Sportif1=Sportif("sara", "tennis")
e3.afficher()
e3.travailler()
e3.pratiquer()
print("les methodes des classes parents :")
Employe1.travailler()
Sportif1.pratiquer()
 """
class Animal:
    def parler(self):
        print("L'animal fait un bruit.")
class Chien(Animal):
    def parler(self):
        print("je suis un chien.")
class Chat(Animal):
    def parler(self):
        print("je suis un chat.")
""" chien1=Chien()
chat1=Chat()
Animal1=Animal()
chien1.parler()
chat1.parler()
Animal1.parler() """
""" animal=[Chien(),Chat(),Animal()]
for x in animal:
    x.parler() """
""" class Employe:
    def __init__(self,nom,age):
        self.nom=nom
        self.age=age
    def salaire(self):
        print(f"{self.nom} a un salaire de 2000 dt.")
    def travailler(self):
        print(f"{self.nom} travaille dur.")
class Manager(Employe):
    def __init__(self, nom, age, departement):
        super().__init__(nom, age)
        self.departement=departement
    def salaire(self):
        super().travailler()
        print(f"{self.nom} a un Manager de 5000 dt.")
e1=Employe("ali", 35)
e2=Manager("sara", 30, "IT")
e1.salaire()
e2.salaire()
 """
from abc import ABC, abstractmethod
class Pere(ABC):
    def __init__(self,nom,prenom):
        self.nom=nom
        self.prenom=prenom
    def getnom(self):
        return self.nom
    @abstractmethod
    def afficher(self):
        print(f"Nom: {self.nom}, Prenom: {self.prenom}")
    
class Fils(Pere):
    def __init__(self, nom, prenom,age):
        super().__init__(nom, prenom)
        self.age=age
    def presenter(self):
       print("bonjour")
    def afficher(self,a,b):
        print(a+b)
        print("Nom:",self.nom)
f1=Fils("ahmed", "mohamed", 25)
f1.presenter()
f1.afficher(3,4)
print(f1.getnom())
""" p1=Pere("benfolen", "sara")
p1.afficher() """