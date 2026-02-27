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
// objet 1
const account1 = new Bankaccount("sara",1000);
account1.username="takwa";
account1.getusername();
account1.balance=500000;
account1.getbalance();
account1.depost(500);
account1.getbalance();
account1.withdraw(300);

/* const account2={
    username:"takwa",
    balance:2000,

};
account2.depost=400; */