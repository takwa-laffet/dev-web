""" import re
text="mon age est 2 3 0 a5ns"
number="n50"
result=re.search(r"\D+",text)# r: raw string 
print(result.group()) """

""" import re
text="bon(jour"
result=re.search(r"\D+",text)
print(result.group()) """
""" import re
t="python est un langage de programmation python est facile a apprendre"
r=re.search(r"langage",t)
print(r.group())
print("--------------------- match")
ma=re.match(r"py",t)
print(ma.group())
print("--------------------- findall")
r=re.findall(r"python",t)
print(r)
 """
""" import re
text="mon age est 230 a5ns"
number="n50"
result=re.findall(r"\d+",text)# r: raw string 
print(result) """