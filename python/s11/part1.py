import requests
""" url="https://jsonplaceholder.typicode.com/users"
reponse=requests.get(url)
print(reponse)
data=reponse.json()
print(data)
print(data[0]["email"])
print(data[2]["email"])
for i in data:
    print("username:",i["username"])
    print("-"*30)
 """
""" url="https://jsonplaceholder.typicode.com/posts"
userid=int(input("Enter user id: "))
parametres={"userId":userid}
res=requests.get(url, params=parametres)
for i in res.json():
    print("title:",i["title"])
    print("-"*30)
 """
