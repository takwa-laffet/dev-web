import csv
""" d={
   "1":"test1",
    "2":"test2",
    "3":{
        "4":"test4",
        "5":"test5"
    }
}
print(d) """
""" with open("etudiant.csv","r") as fr:
    r=csv.DictReader(fr)
    for i in r:
      print(i["nom"],i["note"]) """
with open("etudiant.csv","w") as file:
    c=["nom","note","age"]
    e=csv.DictWriter(file,fieldnames=c)
    e.writeheader()
    e.writerow({"nom":"ali","note":15,"age":20})
    e.writerow({"nom":"sami","note":18,"age":22})
