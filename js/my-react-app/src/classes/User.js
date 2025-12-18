export class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    login(){
        return "bonjour tu es connecte avec "+this.name;
    }
}