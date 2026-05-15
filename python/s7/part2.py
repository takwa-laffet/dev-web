""" f=open("exemple.txt","r")
print(f.read())
f.close() """

""" f=open("exemple.txt","r")
for x in f:
    print(x.strip())
    print("******")
f.close() """
f=open("exemple.txt","r")
L=f.readlines()
print(L)
print(type(L))
f.close()
