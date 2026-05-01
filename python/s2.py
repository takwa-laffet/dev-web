a,b,c=1,2,3
print("a=",a)
print("b=",b)
print("c=",c)
#################
x,y,z=True,False,"hi"
print("x=",x)
print("y=",y)
print("z=",z)
#################
w=d=f=30
print("w=",w)
print("d=",d)
print("f=",f)
#r,y,k=10 //error
#print("r=",r)
#print("y=",y)
#print("k=",k)
logicel=["t","f",3,4,"orange",True,False,3.5]
print(type(logicel))
a,b,c,d,e,f,g,h=logicel
print("a=",a)
print("b=",b)
print("c=",c)
print("d=",d)
print("e=",e)
print("f=",f)
print("g=",g)
print("h=",h)
#j,e=logicel //error
#print("j=",j)
#print("e=",e)
print(logicel[0])
print(logicel[-1])
print(logicel[-2])
### ajouter un element de la liste
logicel.append("takwa")
print(logicel)
logicel.insert(2,"python backend dev web")
print(logicel)
# supprimer un element de la liste
logicel.remove("python backend dev web")
print(logicel)
logicel.pop(-1)
print(logicel)
del logicel[-3]
print(logicel)
#modifier un element de la liste
logicel[4]="banana" # "orange" => "banana"
print(logicel)
#logicel="kiwi"
#print(logicel)
#afficher les elements de la liste
for l in logicel:
 print(l)
#tuble
T=(100,15,200,40,10,200)
print(T)
print(type(T))
print(T[0])
print(T[-1])
for t in T:
 print(t)
if T[0]==1:
 print("the first element is 1")
 x=1
elif T[3]==4:print("hello")
else:
  if T[2]==20:
    print("2 eme if")
  else:
   print("sorry")
   x=30
print(x)
for i in range(1,11):
 print(i)
print("###########################")
j=20
for j in range(20,30):
    print(j)
#[)
print("###########################")
for i in range(2,5):
  print(i)
  if i==3:
    y=3+4
    break
print("y=",y)
#
fruits = ["apple","banana", "cherry", "kiwi", "mango"]
for f in fruits:
  if f == "banana":
    fruits.append("orange")
    continue
  print("Fruit:", f)
print("############################")
for x in range(6):
  print(x)
else:
  print("wow loop is done")
print("############################")
for x in range(7):
  if x==3:
        break
  print(x)
else:
    print("wow loop2 is done")
print("############################")
characters = ["a", "b", "c", "k", "m","o"]
mots=["apple", "banana", "cherry", "kiwi", "mango"]
for c in characters:
  for m in mots:
    print(c,"=",m)
  break
print("############################")
c=0
while c<=5:
  print("hello world")
  print("c=",c)
  c=c+1
print("am done")
print("############################")
i=1
while i<6:
  print(i)
  if i==3:
    break
  i+=1