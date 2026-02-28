class Bankaccount{
    // attribu private
    #balance;
    constructor(username, balance){
        this.username=username;
        this.#balance=balance;
    }
    depost(amount){
        if(amount<=0){
            console.log("invalid amount");
        }else{
        this.#balance+=amount;
        console.log("your new balance is"+" "+this.#balance);
    }}
    getbalance(){
        console.log("your balance is"+" "+this.#balance);
    }
    withdraw(amount){
        if(amount<=this.#balance){
            this.#balance-=amount;
            console.log("your new balance is"+" "+this.#balance);
        }else{
            console.log("insufficient funds");
        }
}
getusername(){
    console.log("the username is"+" "+this.username);
}
}
class Payment extends Bankaccount{
    constructor(username,balance){
        super(username,balance);
    }
    pay(){
        console.log("you have paid");
    }
}
class CreditCard extends Payment{
    constructor(username,balance){
        super(username,balance);
    }

    pay(username){
        console.log("you have paid with credit card "+username);
    }}
class Paypal extends Payment{
    pay(){
        console.log("you have paid with paypal");
    }}
// objet 1
const account1 = new Bankaccount("sara",1000);
const payment1 = new CreditCard("sara",500);
payment1.pay("sara");
/* account1.username="takwa";
account1.getusername();
account1.balance=500000;
account1.getbalance();
account1.depost(500);
account1.getbalance();
account1.withdraw(300); */

/* const account2={
    username:"takwa",
    balance:2000,

};
account2.depost=400; */