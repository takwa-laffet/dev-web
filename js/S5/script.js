const li=document.createElement("li");
li.textContent='item1';
const ul = document.createElement("ul");
//appendchild
ul.appendChild(li);
//document.body
document.body.appendChild(ul);
const master = document.getElementById("masterdiv");
const main=document.getElementById("maindiv");
//appendchild
master.appendChild(main);
//remove (supprimer)
//li.remove();
master.removeChild(main);
//insertbefore
const li2=document.createElement("li");
li2.textContent='item2';
ul.insertBefore(li2,li);
//replacechild
const li3=document.createElement("li");
li3.textContent='item3';
ul.replaceChild(li3,li2);
//----------------------------------------------------------------------------------------------------
//evenements
//evenement souris
//onclick
const button=document.getElementById("btn");
//m1
/* button.onclick=function(){
    master.style.backgroundColor="red";
} */
//m2
button.addEventListener("click",function(){
    master.style.backgroundColor="blue";
})
//mouseover & mouseout
master.addEventListener("mouseover",function(){
    master.style.backgroundColor="#9C2007";}
)
master.addEventListener("mouseout",function(){
    master.style.backgroundColor="#FAA18F";
})
//mousemove
/* const mouseare=document.getElementById("mouse");
const div1=document.createElement("div");
document.body.appendChild(div1);
document.addEventListener("mousemove",function(event){
    let x =mouseare.style.left=event.clientX+"px";
    let y= mouseare.style.top=event.clientY+"px";
    div1.textContent=x+", " +y
}) */
//double click
const div2=document.getElementById("mouse");
div2.addEventListener("dblclick",function(){
    div2.innerHTML="double click";
})
//context menu 
const div3=document.createElement("div");
document.body.appendChild(div3);
div3.style.backgroundColor="#FAA18F";
div3.style.width="200px";
div3.style.height="200px";
div3.addEventListener("contextmenu",function(){
alert("opsss!! right click !!");
})
// evenement clavier
//keydown
/* let recherche=document.getElementById("text");
recherche.addEventListener("keydown",function(event){
    alert("salut");
}) */
//keyup
let recherche=document.getElementById("text");
/* recherche.addEventListener("keyup",function(event){
    console.log("vous avez appuyer la touche "+event.key);
})
 */
//keypres
recherche.addEventListener("keypress",function(e){
    //div3.style.backgroundColor="green";
    if(e.key=="Enter"){
        alert("oui, cest m")
    }
})
