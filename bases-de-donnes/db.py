import mysql.connector
c=mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="testdb"
    )
cursor=c.cursor()
#show databases
cursor.execute("show databases")
for db in cursor:
    print(db)

#create table
""" cursor.execute("create table etudiant1(id integer,nom varchar(100),age integer)")
c.commit()
 """
# create table
""" cursor.execute("create table enseignant(id integer auto_increment primary key," \
"nom varchar(100),age integer)") """
""" 
c.commit() """
#insert donner
""" 
cursor.execute("insert enseignant(nom,age)values('maryam',23)") """
""" cursor.execute("insert enseignant(nom,age)values('Hafiza',20)")
 """
""" name=input("enter name")
age=int(input("enter age"))
cursor.execute('insert into enseignant(nom,age) values(%s,%s)',(name,age))
c.commit() """
#select data
""" cursor.execute("select * from enseignant")
for row in cursor:
    print(row)
cursor.execute("select nom from enseignant")
for row in cursor:
    print(row)
cursor.execute("select * from enseignant where age>18")
for row in cursor:
    print(row)
 """
#update data
""" cursor.execute("update enseignant set nom='ali'where id=4")
c.commit()
 """
""" #delete data
cursor.execute("delete from enseignant where id=4")
c.commit()
 """
""" cursor.execute("select * from enseignant")
r= cursor.fetchall()
print(r[0])
for row in r:
    print(row[1])

 """""" 
cursor.execute("drop table etudiant")
c.commit() """
#alter table 
""" cursor.execute("alter table etudiant1 add column email varchar(100)" ) """
""" cursor.execute("alter table etudiant1 rename to etudiant" )
 """
""" cursor.execute("alter table etudiant change column email classe varchar(255)")
 """
""" cursor.execute("alter table etudiant drop column classe")
 """
#database
""" cursor.execute("create database if not exists db1")
 """
""" cursor.execute("drop database db1")
 """
""" cursor.execute("alter table etudiant add column classe varchar(100)") """
""" cursor.execute("insert into etudiant(nom,age,classe) values('Ahmed',25,'python')")
c.commit()
cursor.execute("insert into etudiant(nom,age,classe) values('Ahmed',25,'java')")
c.commit()
cursor.execute("insert into etudiant(nom,age,classe) values('Ahmed',25,'sql')")
c.commit() """
""" cursor.execute("alter table enseignant add column iddepartment integer, ADD CONSTRAINT fk_enseignant_departement foreign key(iddepartment) references departemen(id)")
c.commit()
 """
cursor.execute("insert into departemen(non,cap) values('informatique','100')")
c.commit()
cursor.execute("insert into enseignant(nom,email,age,iddepartment) values('Ali','ali@example.com',30,1)")
c.commit()
cursor.execute("""
CREATE TABLE inscri (
    idetud INTEGER,
    idcours INTEGER,
    date DATE,
    PRIMARY KEY (idetud, idcours),
    CONSTRAINT fk_cours_etud FOREIGN KEY (idetud) REFERENCES etudiant(id),
    CONSTRAINT fk_etud_cour FOREIGN KEY (idcours) REFERENCES cours(id)
)
""")
c.commit()
c.close()