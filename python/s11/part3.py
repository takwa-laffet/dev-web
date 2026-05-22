""" import requests
url="https://api.openai.com/v1/chat/completions"
headers={"Authorization":f"Bearer {API_key}","Content-Type":"application/json"}
data={"model":"gpt-5.5","messages":[{"role":"user","content":"Hello!"}]}
res=requests.post(url,headers=headers,json=data)
print(res.status_code)
print(res.json()) """