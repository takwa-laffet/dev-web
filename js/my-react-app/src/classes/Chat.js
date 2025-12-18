import { Animal } from "./Animal.js";
export class Chat extends Animal {
    constructor(id,name,age,cach,type){
        super(id,name,age,cach); // appel du constructeur de la classe parent
        this.type=type;
    }
    
}