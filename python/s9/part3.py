import re 
import datetime
from datetime import timedelta
#date=datetime.datetime.now()
""" print(date)
print(date.year)
print(date.month)
print(date.day)
print(date.hour)
print(date.minute)
print(date.second)
print(date.microsecond) """
""" print(date.strftime("%d,%m,%Y"))
print(date.strftime("%H:%M")) """
""" now=datetime.datetime.today()
print(now-timedelta(days=20))
print(now+timedelta(days=31)) """
""" d1=datetime.datetime(2023,5,17)
d2=datetime.datetime(2024,5,16)
print((d2-d1).days) """
text="le seance de python est 15/05/2026"
p=r"\d{1,2}/\d{2}/\d{4}"
result=re.search(p,text)
if result:
    print(result.group())
else:
    print("no date found")