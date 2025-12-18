  import {sum,multiple, multiple2} from "./module1.js";

let h1=document.createElement("h1");
const text=document.createTextNode("la somme est"+sum(3,4));
h1.appendChild(text);
document.body.appendChild(h1);
let h2=document.createElement("h2");
const text2=document.createTextNode("la multiplication est"+multiple(3,4)+" et le multiple2 est "+multiple2(2,4));
h2.appendChild(text2);
document.body.appendChild(h2);  