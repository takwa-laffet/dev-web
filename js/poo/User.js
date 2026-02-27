class User{
constructor(name, age,email){
    this.name=name;
    this.age=age;
    this.email=email;
}
// methode class user
sayHello(){
    console.log("bonjour"+" "+this.name);
}
getinfo(){
    console.log("this user name is"+" "+this.name+" "+"and his age is"+" "+this.age,"and his email is"+" "+this.email);
}
}
// objet 1
const p1 = new User("sara",25,"sara@taher.com");
p1.sayHello();
p1.getinfo();
// objet 2
const p2 = new User("takwa",30,"takwa@taher.com");
p2.sayHello();
p2.getinfo();

