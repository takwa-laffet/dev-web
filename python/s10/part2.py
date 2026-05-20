from bs4 import BeautifulSoup
import requests
url="https://floraison.bio/collections/accessoires"
res=requests.get(url)
s=BeautifulSoup(res.text,"html.parser") #html.parser fait un parsing de la page web
#print(s.title.text)
""" price=s.find("dl")
print(price.text) """
""" a=s.find_all("a")
for i in a:
    print(i.text)
print("------------------prices------------------")
prix=s.find_all("dl")
for i in prix:
    print(i.text) """
""" items=s.find_all("a",class_="full-unstyled-link")
for x in items:
    print(x.text) """
""" rows=s.find_all("tr")
for r in rows:
    c=r.find_all("td")
    for col in c:
        print(col.text) """
