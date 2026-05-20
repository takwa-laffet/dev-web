""" import requests
url="https://facebook.com/"
res=requests.get(url)
print(res.status_code)
print(res.text) """
""" import requests
url="https://www.httpbin.org/headers"
headers={"user-agent":"Mozilla/5.0" }
res=requests.get(url,headers=headers)
print(res.status_code)
print(res.json()) """
import requests
url="https://www.google.com"
try:
    res=requests.get(url)
    if res.status_code==200:
        print("success")
    else:
        print("failed")
except requests.RequestException as e:
    print("An error occurred:", e)