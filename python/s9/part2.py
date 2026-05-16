""" import re
email=input("enter your email: ")
p=r"(\w+)@(\w+\.\w+)"
result=re.search(p,email)
print(result.group(1))
print(result.group(2))
 """
""" import re
p=r"^[\w.-]+@[\w.-]+\.[\D]+$" 
email=input("enter your email: ")
result=re.search(p,email)
if result:
    print("valid email")
    print(result.group())
else:
    print("invalid email") """
""" import re
text="formation frontend dev web"
#result=re.sub(r"frontend","backend",text)
result=re.sub(r"\D","1",text)
print(result) """