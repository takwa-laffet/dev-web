from flask import Flask, redirect, render_template, request, url_for
import json
import os
app= Flask(__name__)
file="data.json"
def load():
    if not os.path.exists(file):
        return []
    with open(file,"r") as f:
        return json.load(f)
def save(d):    
    with open(file,"w")as f:
        json.dump(d,f)
@app.route("/")
def index():
    r=load()
    total_study_hours=sum(i["study_hours"] for i in r)
    total_sleep_hours=sum(i["sleep_hours"] for i in r)
    total_work_hours=sum(i["work_hours"] for i in r)
    total_sport_hours=sum(i["sport_hours"] for i in r)
    avg_study_hours=round(total_study_hours/len(r),2)if r else 0
    avg_sleep_hours=round(total_sleep_hours/len(r),2)if r else 0
    avg_work_hours=round(total_work_hours/len(r),2)if r else 0
    avg_sport_hours=round(total_sport_hours/len(r),2)if r else 0
    return render_template("index.html",data=r,total_study_hours=total_study_hours
                           ,total_sleep_hours=total_sleep_hours,
                           total_work_hours=total_work_hours,
                           total_sport_hours=total_sport_hours,
                           avg_study_hours=avg_study_hours,
                           avg_sleep_hours=avg_sleep_hours,
                           avg_work_hours=avg_work_hours,
                           avg_sport_hours=avg_sport_hours)
@app.route("/add",methods=["POST","GET"])
def add():
    if request.method=="POST":
        r=load()
        new_data={
            "id":len(r)+1,
            "date":request.form["date"],
            "study_hours":float(request.form["study_hours"]),
            "sleep_hours":float(request.form["sleep_hours"]),
            "work_hours":float(request.form["work_hours"]),
            "sport_hours":float(request.form["sport_hours"]),
        
        }
        r.append(new_data)
        save(r)
        return redirect(url_for("index"))
    return render_template("add.html")
@app.route('/edit/<int:id>',methods=["POST","GET"])
def edit(id):
    r=load()
    dats=next((i for i in r if i["id"]==id),None)
    if not dats:
        return redirect(url_for("index"))
    if request.method == "POST":
        dats["date"]=request.form["date"]
        dats["study_hours"]=float(request.form["study_hours"])
        dats["sleep_hours"]=float(request.form["sleep_hours"])
        dats["work_hours"]=float(request.form["work_hours"])
        dats["sport_hours"]=float(request.form["sport_hours"])
        save(r)
        return redirect(url_for("index"))
    return render_template("edit.html",data=dats)
@app.route("/delete/<int:id>")
def delete(id):
    r=load()
    data=next((i for i in r if i["id"]==id),None)
    if not data:
        return redirect(url_for("index"))
    r.remove(data)
    save(r)
    return redirect(url_for("index"))
if __name__=="__main__":
    app.run(debug=True)