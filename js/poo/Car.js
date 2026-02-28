class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //without abstraction
    startCar(){
        console.log("check engine");
        console.log("inject fuel");
        console.log("start engine");
        console.log("car is running");
    }
    //with abstraction
    start(){
        this.checkEngine();
        this.injectFuel();
        this.startEngine();
        console.log("car is running");}
    
    checkEngine(){
        console.log("check engine with abstraction ");}
    injectFuel(){
        console.log("inject fuel with abstraction");}
    startEngine(){
        console.log("start engine with abstraction");}
    }
const myCar = new Car("Toyota", "Corolla", 2020);
myCar.start();
/////////////////////////////////////////////////////////////////////////
class Shape{
    draw(){
        console.log("drawing a shape");
    }
}
class Circle extends Shape{
    draw(){
        console.log("drawing a circle");
    }
    test(){
        this.draw();
        super.draw();
        console.log("test");
    }
}
const circle = new Circle();
//circle.draw();
circle.test();