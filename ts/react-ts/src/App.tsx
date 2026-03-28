import './App.css'

function App() {
let name:string|number="ali";
/* let a;
a=5;        // work but not recommended
a="test"; */
name=60;
const test:boolean=true;
let city="tunis"; // type string automatique
/* city=3; // error because city is type string
 */ 
/* var data:any;
data=3;
console.log(data);

data="test";            // not recommended type any because it can
//  be any type and it can cause problems in the future
console.log(data);

data=true;
console.log(data);
 */
function sum(a:number,b:number):void{
  console.log(a+b);
} 
/* console.log(sum(11,30)); */ // undefined error because the function return void
sum(11,30);
/* sum("ali",20); // error because the function expect number and we give it string
 */

function sum2(a:number,b:number):number{
  let s=a+b;
  return s;
}
let x=sum2(1,2)+1;
console.log(x);
/* console.log(sum2(1));
 */
function formula(a:number,b?:number):number{
  if(b){
    return a+b;
  }else{
    return a;
  }
}

console.log(formula(5));
console.log(formula(5,10));
function geta(name:string,age?:number):void{
  console.log(name,age);
}
 geta("ali");
 geta("mohamed amine",20);

let school:string[]=["table","chair","computer"];
console.log(school);
let dataetudiant:string[]|number[]=["ali","mohamed amine","sami"];
console.log(dataetudiant);
//Tuple
let dataformation:[string,number,boolean,string,number]=["typescript",30,true,"tunis",40];
console.log(dataformation);
let username:Array<string>=["ali","mohamed amine","sami"];
console.log(username);
let nb:Array<number|string>=["1","3",3,"four","five",4];
console.log(nb);/* 
let score:Array<number,string>=[1,4,"2","3",5];
console.log(score); */ // error because the array contain number and string but we declare it as number and string
/* let user:[number,string]=["takwa",30]; // error because the Tuple contain number and string but we declare it as number and string
 */
let user:[string,number]=["takwa",30];
console.log(user);
return (
    <>
    <h1>
      {name}
    </h1>
    {/* <p>
      {a}
    </p> */}
    <p>
      {city}
    </p>
    </>
  )
}

export default App
