livre1={
    "titre": "Le Petit Prince",
    "auteur": "Antoine de Saint-Exupéry",
    "année": 1943,
    "disponible": True

}
livre2={
    "titre": "js pour les débutants",
    "auteur": "John Doe",
    "année": 2020,
    "disponible": False
}
# dictionnaire={
#     "clé1": "valeur1",
#     "clé2": "valeur2",etc...}
print(livre1)
print(type(livre1))
#autre
print(livre2["auteur"])
print(type(livre2["auteur"]))
print(livre1["année"])
print(type(livre1["année"]))
print(livre2["disponible"])
print(type(livre2["disponible"]))
print(livre1.get("titre"))
#ajouter une nouvelle clé valeur
livre1["pays"] = "France"
print(livre1)
#modifier une valeur
livre1["auteur"]="jhon"
print(livre1)
#supprimer une clé valeur
del livre1["pays"]
print(livre1)
livre1.pop("année")
print(livre1)
#supprimer tout le dictionnaire
#livre1.clear()
#print(livre1)
#supprimer la dernière clé valeur de le dictionnaire
livre1.popitem()
print(livre1)
livre1.popitem()
print(livre1)
#afficher les clés du dictionnaire
print(livre2.keys())
#afficher les valeurs du dictionnaire
print(livre2.values())
#afficher les éléments du dictionnaire
print(livre2.items())
#parcourir les éléments du dictionnaire
for c,v in livre2.items():
    print(c,"=>",v)
N={1,2,5,8,10,0}
A={"a","b","c","d",9,8,2,0}
print(N)
print(A)
print("N|A:", N|A)
print("A|N:", A|N)
print("N&A:", N&A)
print("A&N:", A&N)
print(N)
print(A)
print("N-A:", N-A)
print("A-N:", A-N)