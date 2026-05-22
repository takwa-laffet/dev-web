from fastapi import FastAPI
app = FastAPI()
data=[]
@app.get("/api/datauser")
def get_data_user():
    return data
@app.post("/api/datauser")
def create_data_user(item:dict):
    data.append(item)
    return{"message":"Data user created successfully","data":data}