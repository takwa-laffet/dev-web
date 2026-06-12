def add(a,b):
    return a + b  
def addbank(a,b):
  if a>b:
    raise ValueError("a is greater than b")
  return b-a
def sub(a,b):
    return a-b
def mul(a,b):
    return a*b
def div(a,b):
   if b==0:
     raise ValueError("b cannot be zero")
   return a/b