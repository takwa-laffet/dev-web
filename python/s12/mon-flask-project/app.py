from flask import Flask, render_template, request, jsonify
from sqlalchemy import true
import datetime

app = Flask(__name__)

@app.route('/')
def f1():
    a=4+6
    return 'hi'+str(a)
@app.route('/api/first')
def f2():
    return 'this is my first api'
@app.route('/api/second')
def f3():
    return 'this is my second api'
@app.route('/api/user/<name>/<int:age>')
def f4(name, age):
    now =datetime.datetime.now()
    birth_year = now.year - age
    return 'hi'+" "+name+" you were born in :"+str(birth_year)+" the time is :"+str(now)
@app.route("/api/sum/<int:a>/<int:b>")
def f5(a,b):
    sum=a+b
    return str(sum)
@app.route("/html")
def html():
    return"<h2 style='color:red'>this is html code</h2>"
@app.route("/user/<name>")
def home(name):
    return render_template("index.html",name=name)
@app.route("/subjects")
def subjects():
    s=["math","physics","chemistry"]
    return render_template("index.html",subjects=s)
@app.route("/createuser",methods=["POST","GET" ])
def creat():
    if request.method == "POST":
        name=request.form["nom"]
        print(name)
        return "hi "+name
    return render_template("user.html")
@app.route("/post")
def post():
    query=request.args.get("q")
    return "your post is:"+query
@app.route("/posts")
def posts():
    post=[
        {"id":1,"title":"first post","content":"this is my first post"},
        {"id":2,"title":"second post","content":"this is my second post"},
        {"id":3,"title":"third post","content":"this is my third post"}
    ]
    return jsonify(post)

if __name__=='__main__':
    app.run(debug=True)
