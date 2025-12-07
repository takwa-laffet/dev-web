const display=document.getElementById("display");
const buttons=document.querySelectorAll(".btn-calc");
const clearbtn=document.getElementById("clear");
const equalbtn=document.getElementById("equal");
let resultat="";
//append numbers /operators
buttons.forEach(btn=>{
    btn.onclick=()=>{
        resultat+=btn.dataset.value;
        display.value=resultat;
            display.style.color="black";
    };
});
//clear
clearbtn.onclick=()=>{
    resultat="";
    display.value=resultat;
};
//equal
equalbtn.onclick=()=>{
try{
    let last=eval(resultat); //eval() pour calculer 
display.value=last;
resultat=last;
}
catch{
    display.value="error";
    resultat="";
    display.style.color="red";
}
};