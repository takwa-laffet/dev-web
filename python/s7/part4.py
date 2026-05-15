import json
""" with open("users.json","r") as fjson:
    d=json.load(fjson)
    print(d) """
with open("users.json","w") as fjson:
    user1={
        "nom":"cyrine",
        "age":25,
        "note":19
    }
    json.dump(user1,fjson)