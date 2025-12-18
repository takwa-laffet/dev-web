import { Persone } from "./persone"

export class Etudiant extends Persone{
constructor(name,age,telphone,email,classe,filiere){
    super(name,age,telphone,email);
    this.classe=classe;
    this.filiere=filiere;

}
inscri(){
    return 'etudiant inscrit '+this.classe+"en filiere "+this.filiere;
}
}