//parent class
class Person {
    constructor(name, age, email, gender,role) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.gender = gender;
        this.role = role;
    }
    getinfo() {
        console.log("this person name is" + " " + this.name + " " + "and his age is" + " " + this.age, "and his email is" + " " + this.email, "and his gender is" + " " + this.gender, "and his role is" + " " + this.role);
    }

}
//child class
class Student extends Person {
    constructor(name,age,email,gender,role,id){
        super(name,age,email,gender,role);
        this.id=id;
    }
    getclass(){
        console.log("this student id is"+" "+this.id);
    
    }
}
const s1 = new Student("sara",25,"sara@taher.com","female","student",1);
s1.getinfo();
s1.getclass();

class Teacher extends Person{
    constructor(name,age,email,gender,role,subject){
        super(name,age,email,gender,role);
        this.subject=subject;
    }
    getsubject(){
        console.log("this teacher subject is"+" "+this.subject);
    }
}
const t1 = new Teacher("takwa",30,"takwa@taher.com","female","teacher","js");
t1.getinfo();
t1.getsubject();