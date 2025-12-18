const taskinput=document.getElementById('taskinput');
const addbtn=document.getElementById('addbtn');
const taskslist=document.getElementById('taskslist');
const msg=document.getElementById('msg');
const clearbtn=document.getElementById("clear");
//addbtn
addbtn.addEventListener("click",()=>{
    let task=taskinput.value;
    if(task==""){
        msg.innerHTML="vous devez ecrire une tache";
        msg.style.display="block";
    }
    else{
        let li=document.createElement('li');
        li.textContent=task;
        taskslist.appendChild(li);
        taskinput.value="";
    }
})
//clearbtn
clearbtn.addEventListener("click",()=>{
    taskslist.innerHTML="";
})
//delete par tache 
taskslist.addEventListener("click",(e)=>{
   taskslist.removeChild(e.target);
})
//save localstorage
/* 
localStorage.setItem("tasks",taskinput.value);
console.log(localStorage.getItem("tasks")); */