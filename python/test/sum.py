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

def avg(a,b):
    return (a+b)/2
def power(a,b):
    return a**b