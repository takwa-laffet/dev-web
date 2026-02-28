class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    speak(){
        console.log("the animal makes a sound");
    }

}
class Cat extends Animal {
    constructor(name, species, color) {
        super(name, species);
        this.color = color;
    }
    speak(){
        console.log("meow");
    }}
class Dog extends Animal {
    constructor(name, species, color) {
        super(name, species);
        this.color = color;
    }
    speak(){
        console.log("woof");
    }}
class Bird extends Animal {
    constructor(name, species, color) {
        super(name, species);
        this.color = color;
    }

    speak(){
        console.log("tweet");
    }
}
const  tom = new Cat("tom", "cat", "gray");
tom.speak();
const A =new Animal("tom","cat");
A.speak();
const  spike = new Dog("spike", "dog", "brown");
spike.speak();