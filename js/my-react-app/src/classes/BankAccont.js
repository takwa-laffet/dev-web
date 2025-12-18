export class BankAccount{
    #balance;
    constructor(balance,name){
        this.name=name;
        this.#balance=balance;
    }
    getBalance(){
        return this.#balance;
    }
    charge(x){
        let newcharge =this.#balance+x;
        this.#balance=newcharge;
        return this.#balance;
    }
    decharge(x){
        let newcharge =this.#balance-x;
        this.#balance=newcharge;
        return this.#balance;
    }
}