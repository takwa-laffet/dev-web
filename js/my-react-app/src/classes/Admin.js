import { Persone } from "./persone";

export class Admin extends Persone{
    constructor(name,age,telphone,email,role,classes,filiere){
        super(name,age,telphone,email);
        this.role=role;
        this.classes=classes;
        this.filiere=filiere;
    }
    inscri(){
        return 'admin responsable '+this.classes+"en filiere "+this.filiere;
    }
}