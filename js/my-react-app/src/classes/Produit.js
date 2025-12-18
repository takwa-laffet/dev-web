export class Produit{
    constructor(Id,name,prix,quntity){
        this.Id=Id;
        this.name=name;
        this.prix=prix;
        this.quntity=quntity;
    }
    getprix(){
        return ("le prix de se produit "+this.name+" est "+this.prix);
    }
    getquantity(){
        return ("la quantite de se produit "+this.name+" est "+this.quntity);
    }
    getId(){
        return ("le id de se produit "+this.name+" est "+this.Id);
    }
}