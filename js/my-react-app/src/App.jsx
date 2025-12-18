import {User} from "./classes/User.js"
import { Produit } from "./classes/Produit.js";
import { BankAccount } from "./classes/BankAccont.js";
import { Chat } from "./classes/Chat.js";
import { Etudiant } from "./classes/Etudiant.js";
import { Admin } from "./classes/Admin.js";
function App() {
  const etu1= new Etudiant("taher",12,123456789,"taher@taher","L2","informatique");
  const admin1= new Admin("taher",12,123456789,"taher@taher","responsable","L2","informatique");
  const chat1= new Chat(1,"sousou",12,200,"arabe");
  const acc = new BankAccount(1000,"sarah");
  const account2 = new BankAccount(2000,"ali");
const user1= new User("sarah",32);
const user2 = new User("ali",40);
const p1=new Produit(1,"pc",1200,3);
const tel=new Produit(2,"iphone 13",1200,4);
//f1();
  const mypromise = new Promise((resolve,reject)=>{
    //resolve le api est ok
    //reject le api est pas ok
    //code 
    const nbr=3;
    if (nbr>0){
        resolve(nbr);    }else{
        reject("error");
    }
});
mypromise.then((nbr)=>{
    console.log(nbr);
}).catch((error)=>{
    console.log(error);
});
  return( <div>
    <p>{etu1.inscri()}</p>
    <p>{admin1.inscri()}</p>

    <h2>{chat1.speak()}</h2>
    <h1>{user1.name}</h1>
<h1>{user1.login()}</h1>
<h1>{user2.login()}</h1>
<p>{p1.getprix()}</p>
<p>{p1.getquantity()}</p>
<p>{p1.getId()}</p>

<p>---------------------------------------------</p>
<p>{tel.getprix()}</p>
<p>{tel.getquantity()}</p>
<p>{tel.getId()}</p>
<p>---------------------------------------------</p>
 <p>{acc.getBalance()}</p> 
 <p>{account2.getBalance()}</p>
<p>{acc.charge(50)}</p>
<p>{acc.decharge(500)}</p>
<p>{account2.name}</p>
  </div>
  )
}

export default App
