import mysql.connector
c=mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="testdb"
    )
cursor=c.cursor()
cursor.execute("select enseignant.nom,departemen.non from enseignant join departemen on enseignant.iddepartment=departemen.id")
print(cursor.fetchall())
print("-----------------------------")
cursor.execute("select enseignant.nom,departemen.non from enseignant left join departemen on enseignant.iddepartment=departemen.id")
print(cursor.fetchall())
print("-----------------------------")
cursor.execute("select enseignant.nom,departemen.non from enseignant right join departemen on enseignant.iddepartment=departemen.id")
print(cursor.fetchall())    
print("-----------------------------")
cursor.execute("select enseignant.nom,departemen.non from enseignant left join departemen on enseignant.iddepartment=departemen.id union select enseignant.nom,departemen.non from enseignant right join departemen on enseignant.iddepartment=departemen.id")
print(cursor.fetchall())












c.close()
